export const withLatency =
  <A extends unknown[], R>(
    fn: (...args: A) => Promise<R>,
    ms = 800
  ) => {
    return async (...args: A): Promise<R> => {
      await new Promise((resolve) => setTimeout(resolve, ms));
      return fn(...args);
    };
  };