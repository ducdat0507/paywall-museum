<script lang="ts">
    import Masonry from 'svelte-bricks';
    import PaywallSeriesCard from './PaywallSeriesCard.svelte';

    let {
        startItems, startPage
    } = $props()

    let page = $state(startPage)
    let items = $state(startItems)

    let [minColWidth, maxColWidth, gap] = [240, 320, 16]
    let calcCols = (
        masonryWidth: number,
        minColWidth: number,
        gap: number,
    ): number => {
        return Math.min(
            items.length,
            Math.floor((masonryWidth + gap) / (minColWidth + gap)) || 1,
        )
    }
</script>

<Masonry
    {items}
    {minColWidth}
    {maxColWidth}
    {calcCols}
    class="m-4"
    {gap}
    >
    {#snippet children({ item })}
        <PaywallSeriesCard {item} />
    {/snippet}
</Masonry>