export type HeadersInit = Headers | string[][] | { [key: string]: string };
export type BodyInit = ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream | string | URLSearchParams | FormData;

export interface RequestInit {
  body?: BodyInit | undefined;
  headers?: HeadersInit | undefined;
  method?: string | undefined;
  redirect?: RequestRedirect | undefined;
  signal?: AbortSignal | null | undefined;
}

export interface ResponseInit {
  headers?: HeadersInit | undefined;
  size?: number | undefined;
  status?: number | undefined;
  statusText?: string | undefined;
  timeout?: number | undefined;
  url?: string | undefined;
}
