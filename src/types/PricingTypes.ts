

export const pricingTypes = {
    "pricing": {
        name: "Pricing page"
    },
    "paywall": {
        name: "Paywall page"
    },
}

export type PricingTypes = keyof typeof pricingTypes;