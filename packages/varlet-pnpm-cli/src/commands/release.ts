import inquirer from 'inquirer'
import execa from 'execa'
import logger from '../shared/logger'
import semver from 'semver'
import glob from 'glob'
import { CWD } from "../shared/constant";
import { resolve } from "path";
import { writeFileSync } from "fs-extra";

const releaseTypes = [
  'major',
  'minor',
  'patch',
  'premajor',
  'preminor',
  'prepatch'
]

async function isWorktreeEmpty() {
  const ret = await execa('git', ['status', '--porcelain'])
  return !ret.stdout
}

async function publish() {
  const ret = await execa('pnpm', [
    '-r',
    'publish',
    '--no-git-checks',
    '--access',
    'public'
  ])
  logger.info(ret.stdout)
}

async function pushGit(version: string, message: string) {
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', message])
  await execa('git', ['tag', version])
  await execa('git', ['push'])
}

type packageJsonMap = {
  file: string
  content: string
}

type packageJsonMaps = packageJsonMap[]

function updateVersion(version: string): packageJsonMaps {
  const packageJsons = glob.sync('packages/*/package.json')
  packageJsons.push('package.json')

  return packageJsons.map((path: string) => {
    const file = resolve(CWD, path)
    const config = require(file)
    const currentVersion = config.version

    config.version = version
    writeFileSync(file, JSON.stringify(config, null, 2))

    config.version = currentVersion
    return { file, content: JSON.stringify(config, null, 2) }
  })
}

export async function release() {
  try {
    const currentVersion = require(resolve(CWD, 'package.json')).version

    if (!currentVersion) {
      logger.error('Your package is missing the version field')
      return
    }

    if (!await isWorktreeEmpty()) {
      logger.error('Git worktree is not empty, please commit changed')
      return
    }

    let name = 'Please select release type'
    const ret = await inquirer.prompt([
      {
        name,
        type: 'list',
        choices: releaseTypes,
      },
    ])

    const type = ret[name]
    const isPreRelease = type.startsWith('pre')
    let expectVersion = semver.inc(currentVersion, type, `alpha.${Date.now()}`)
    expectVersion = isPreRelease ? expectVersion.slice(0, -2) : expectVersion

    name = 'version confirm'
    const confirm = await inquirer.prompt([
      {
        name: name,
        type: 'confirm',
        message: `All packages version ${currentVersion} -> ${expectVersion}:`
      },
    ])
    if (!confirm[name]) {
      return
    }

    const packageJsonMaps = updateVersion(expectVersion)

    if (!isPreRelease) {
      await pushGit(expectVersion, `v${expectVersion}`)
    }

    await publish()

    if (isPreRelease) {
      packageJsonMaps.forEach(({ file, content }) => writeFileSync(file, content))
    }

    logger.success(`Release version ${expectVersion} successfully!`)
  } catch (error: any) {
    logger.error(error.toString())
  }
}
