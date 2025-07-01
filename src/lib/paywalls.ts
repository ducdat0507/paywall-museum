import paywalls from "../../data/paywalls.json";
import type { PaywallInfo, PaywallSeries } from "../types/PaywallInfo";

export const itemsPerPage = 10;
export const totalPages = Math.ceil(paywalls.length / itemsPerPage);

export function getPage(page: number): PaywallSeries[] {
    return (paywalls as PaywallSeries[]).slice(page * itemsPerPage, (page + 1) * itemsPerPage - 1);
}

export function getFromId(id: string): PaywallSeries | undefined {
    return (paywalls as PaywallSeries[]).find((x) => x.id == id);
}