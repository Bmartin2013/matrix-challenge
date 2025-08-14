export const withLatency = <T>(
  fn: (...args: any[]) => Promise<T>,
  ms = 800
) => {
  return async (...args: any[]): Promise<T> => {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return fn(...args);
  };
};
