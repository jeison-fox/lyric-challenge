/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time
 * @param fn The function to debounce
 * @param wait The number of milliseconds to delay execution
 * @returns A debounced version of the input function
 */
export function debounce<T extends (...args: string[]) => void>(fn: T, wait: number): T {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounced = ((...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), wait);
  }) as T;

  return debounced;
}
