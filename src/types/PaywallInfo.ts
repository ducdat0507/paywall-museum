export type PaywallSeries = {
    id: string,
    name: string,
    paywalls: PaywallInfo[]
}

export type PaywallInfo = {
    imageUrl: string,
    imageAlt: string,
    links: {
        url: string,
        type: string
    }[]
}