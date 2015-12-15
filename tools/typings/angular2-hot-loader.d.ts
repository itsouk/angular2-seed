declare module 'angular2-hot-loader' {
  export interface Options {
      port?: number;
      path?: string;
      transpile?: boolean;
  }
  export function listen(localConfig?: Options): void;
  export function onChange(files: string[]): void;
}