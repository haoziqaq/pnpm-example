export declare function compileUMD(): Promise<void>;
export declare function compileDir(dir: string): Promise<void>;
export declare function compileFile(file: string): Promise<void>;
export declare function compileModule(modules?: 'umd' | 'commonjs' | boolean): Promise<void>;
