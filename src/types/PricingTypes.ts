

export const pricingTypes = {
    "pricing": {
        name: "Pricing page"
    },
    "paywall": {
        name: "Paywall page"
    },
    "checkout": {
        name: "Checkout page"
    },
}

export type PricingTypes = keyof typeof pricingTypes;