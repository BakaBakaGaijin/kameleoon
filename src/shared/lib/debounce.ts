/* eslint-disable @typescript-eslint/no-explicit-any */
type DebouncedFunction<T extends (...args: any[]) => void> = (...args: Parameters<T>) => void;

export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
): DebouncedFunction<T> {
    let timeout: number;

    return function (...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}
