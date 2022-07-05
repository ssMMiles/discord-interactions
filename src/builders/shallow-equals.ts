export function shallowEquals(object: Record<string, unknown>, other: Record<string, unknown>): boolean {
  const keys = [Object.keys(object), Object.keys(other)];

  if (keys[0].length !== keys[1].length) return false;

  for (const key of [...keys[0], ...keys[1]]) {
    if (object?.[key] !== other?.[key]) return false;
  }

  return true;
}
