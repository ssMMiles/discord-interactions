import type { BodyInit, HeadersInit, RequestInit } from "undici";
import { Headers, Request, Response, fetch } from "undici";

export { Headers, Request, Response, fetch };
export type { BodyInit, HeadersInit, RequestInit };
export default fetch;
