import ora from "ora"
import conventionalChangelog from 'conventional-changelog'
import { createWriteStream } from 'fs-extra'
import { CHANGELOG_MD } from "../shared/constant";
import logger from "../shared/logger";

interface ChangelogCommandOptions {
  count?: number
}

export function changelog({ count = 0 }: ChangelogCommandOptions): Promise<void> {
  const s = ora().start(`Generating changelog`)

  return new Promise((resolve) => {
    conventionalChangelog({
      preset: 'angular',
      releaseCount: count,
    })
      .pipe(createWriteStream(CHANGELOG_MD))
      .on('close', () => {
        s.succeed(`Changelog generated success!`)
        resolve()
      })
  })
}
