import type { BodyInit, HeadersInit, RequestInit } from "undici";
import { fetch, Headers, Request, Response } from "undici";

export { fetch, Headers, Response, Request };
export type { RequestInit, HeadersInit, BodyInit };
export default fetch;
