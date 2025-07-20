import type { PricingTypes } from "./PricingTypes"

export type PaywallSeries = {
    id: string,
    name: string,
    paywalls: PaywallInfo[]
}

export type PaywallInfo = {
    imageUrl: string,
    imageAlt: string,
    attribution: string,
    links: {
        url: string,
        type: PricingTypes
    }[]
}