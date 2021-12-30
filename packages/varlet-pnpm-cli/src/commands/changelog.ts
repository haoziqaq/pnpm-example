import ora from "ora";
import conventionalChangelog from "conventional-changelog";
import { createWriteStream } from "fs-extra";
import { CHANGELOG_MD } from "../shared/constant";

interface ChangelogCommandOptions {
  append?: boolean;
  releaseCount?: number;
}

export function changelog({
  releaseCount = 1,
  append = false,
}: ChangelogCommandOptions): Promise<void> {
  const s = ora().start(`Generating changelog`);

  return new Promise((resolve) => {
    conventionalChangelog({
      preset: "angular",
      releaseCount,
      append,
    })
      .pipe(createWriteStream(CHANGELOG_MD))
      .on("close", () => {
        s.succeed(`Changelog generated success!`);
        resolve();
      });
  });
}
