let fetch, Headers, Request, Response;
import type { BodyInit, HeadersInit, ResponseInit } from "./types.js";

if (typeof self === "object") {
  fetch = self.fetch;
  Headers = self.Headers;
  Request = self.Request;
  Response = self.Response;
} else if (typeof global === "object") {
  fetch = global.fetch;
  Headers = global.Headers;
  Request = global.Request;
  Response = global.Response;
}

export { fetch, Headers, Request, Response };
export type { ResponseInit, HeadersInit, BodyInit };
export default fetch;
