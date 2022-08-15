import type { BodyInit, HeadersInit, RequestInit } from "./types.js";

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const { fetch, Headers, Request, Response } = global;

export { fetch, Headers, Request, Response };
export type { HeadersInit, RequestInit, BodyInit };
export default fetch;
