import ora from "ora";
import conventionalChangelog from "conventional-changelog";
import { createWriteStream } from "fs-extra";
import { CHANGELOG_MD } from "../shared/constant";

export function changelog(): Promise<void> {
  const s = ora().start(`Generating changelog`);

  return new Promise((resolve) => {
    conventionalChangelog({ preset: "angular" })
      .pipe(createWriteStream(CHANGELOG_MD))
      .on("close", () => {
        s.succeed(`Changelog generated success!`);
        resolve();
      });
  });
}
