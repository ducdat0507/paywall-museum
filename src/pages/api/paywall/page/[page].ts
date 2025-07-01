import type { APIContext } from "astro";
import * as paywalls from "../../../../lib/paywalls"

export function getStaticPaths() {
  return new Array(paywalls.totalPages).fill("").map((x, i) => ({
    params: { page: i + 1 }
  }))
}

export function GET ({ params, request }: APIContext) {
  return new Response(
    JSON.stringify(paywalls.getPage(+params.page! - 1)),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}