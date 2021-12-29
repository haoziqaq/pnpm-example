import inquirer from 'inquirer'
import execa from 'execa'
import logger from '../shared/logger'
import semver from 'semver'
import glob from 'glob'
import { CWD } from "../shared/constant";
import { resolve } from "path";

const releaseTypes = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch'
]

async function isWorktreeEmpty() {
  const ret = await execa('git', ['status', '--porcelain'])
  return !ret.stdout
}

export async function release() {
  if (!await isWorktreeEmpty()) {
    logger.error('Git worktree is not empty, please commit changed')
    return
  }

  const currentVersion = require(resolve(CWD, 'package.json')).version

  if (!currentVersion) {
    logger.error('Your package is missing the version field')
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
  const isPre = type.startsWith('pre')

  const expectVersion = semver.inc(currentVersion, type)

  const res = glob.sync('**/package.json')
  console.log(res)
}
