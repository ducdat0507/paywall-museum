
import type { APIContext } from "astro";
import * as paywalls from "../../lib/paywalls";


export function GET ({ params, request }: APIContext) {
  return new Response(
    JSON.stringify({
        totalPages: paywalls.totalPages
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}