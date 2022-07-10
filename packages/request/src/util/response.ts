import { Response } from "isomorphic-fetch-ponyfill";

export async function parse(response: Response) {
  if (response.headers.get("content-type") === "application/json") {
    return response.json();
  }

  return response.arrayBuffer();
}
