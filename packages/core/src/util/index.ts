export * from "../app/contexts/response-types.js";
export * from "./errors.js";
export * from "./simple-responses.js";

export function deprecationWarning(name: string, alternative: string): void {
  console.warn(`${name} is deprecated and will be removed in the next release. Please switch to ${alternative}`);
}
