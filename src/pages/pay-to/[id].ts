import type { APIContext } from "astro";
import * as paywalls from "../../lib/paywalls"
import paywallData from "../../../data/paywalls.json"

export function getStaticPaths() {
  return paywallData.map((x, i) => ({
    params: { id: x.id }
  }))
}