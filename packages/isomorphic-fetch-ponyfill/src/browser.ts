/* eslint-disable @typescript-eslint/ban-ts-comment */
let fetch, Headers, Request, Response;

import type { BodyInit, HeadersInit, ResponseInit } from "whatwg-fetch";
import {
  fetch as fetchPolyfill,
  Headers as HeadersPolyfill,
  Request as RequestPolyfill,
  Response as ResponsePolyfill
} from "whatwg-fetch";

if (global !== undefined) {
  fetch = global.fetch;
  Headers = global.Headers;
  Request = global.Request;
  Response = global.Response;
  // @ts-ignore
} else if (self !== undefined && self.fetch !== undefined) {
  // @ts-ignore
  fetch = self.fetch;
  // @ts-ignore
  Headers = self.Headers;
  // @ts-ignore
  Request = self.Request;
  // @ts-ignore
  Response = self.Response;
} else {
  fetch = fetchPolyfill;
  Headers = HeadersPolyfill;
  Request = RequestPolyfill;
  Response = ResponsePolyfill;
}

export { fetch, Headers, Request, Response };
export type { ResponseInit, HeadersInit, BodyInit };
