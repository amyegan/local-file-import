import { myName } from './_test.js'

export function GET(request) {
  return new Response(`Hello from ${myName}`);
}
