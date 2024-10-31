declare module 'base-58' {
    export function encode(buffer: Buffer): string;
    export function decode(string: string): Buffer;
}
