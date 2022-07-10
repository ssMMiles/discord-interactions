import { FormData } from "formdata-node";
export type RouteLike = `/${string}`;

export interface APIRequest {
  /**
   * The HTTP method used in this request
   */
  method: string;
  /**
   * The full path used to make the request
   */
  path: RouteLike;
  /**
   * The API route identifying the ratelimit for this request
   */
  route: string;
  /**
   * Additional HTTP options for this request
   */
  options: RequestOptions;
  /**
   * The data that was used to form the body of this request
   */
  data: HandlerRequestData;
  /**
   * The number of times this request has been attempted
   */
  retries: number;
}

/**
 * Internal request options
 *
 * @internal
 */
export interface InternalRequest extends RequestData {
  method: RequestMethod;
  fullRoute: RouteLike;
}

export type HandlerRequestData = Pick<InternalRequest, "files" | "body" | "auth">;

export enum RequestMethod {
  Delete = "DELETE",
  Get = "GET",
  Patch = "PATCH",
  Post = "POST",
  Put = "PUT"
}

export interface Route {
  identifier: string;
  path: string;
}

export interface Attachment {
  id?: string;
  name: string;
  data: Blob;
}

export interface RequestOptions {
  auth?: boolean;
  authPrefix?: "Bot" | "Bearer";
  formData?: FormData;
  body?: unknown;
  files?: Attachment[] | undefined;
  headers?: Map<string, string>;
  rawBody?: boolean;
  query?: URLSearchParams;
  reason?: string;
  versioned?: boolean;
}

export interface RequestData extends RequestOptions {
  path: string;
  method: RequestMethod;
}

export interface RateLimitData {
  retryAfter: number;
  limit: number | null;
  bucket: string;
  url: string;
  route: string;
  identifier: string;
  global: boolean;
  method: RequestMethod;
}
