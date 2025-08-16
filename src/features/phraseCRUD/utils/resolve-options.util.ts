export function resolveOptions<T extends object>(
  base: T,
  override?: Partial<T>
): T {
  return { ...base, ...override };
}

