export function stringifyQuery(query: unknown): [string, string][] {
  if (typeof query !== "object" || query === null || Array.isArray(query)) {
    throw new Error("Query must be an object");
  }

  return Object.entries(query).map(([key, value]) => {
    if (typeof value === "bigint" || typeof value === "number" || typeof value === "boolean") {
      return [key, value.toString()];
    }

    if (typeof value === "string") {
      return [key, value];
    }

    throw new Error(`Query parameter ${key} must be a string, number, bigint or boolean. Value: ${value}`);
  });
}
