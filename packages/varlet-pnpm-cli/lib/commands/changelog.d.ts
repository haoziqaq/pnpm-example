interface ChangelogCommandOptions {
  append?: boolean;
  releaseCount?: number;
}
export declare function changelog({
  releaseCount,
  append,
}: ChangelogCommandOptions): Promise<void>;
export {};
