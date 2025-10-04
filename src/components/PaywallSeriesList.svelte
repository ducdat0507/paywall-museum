<script lang="ts">
    import Masonry from 'svelte-bricks';
    import PaywallSeriesCard from './PaywallSeriesCard.svelte';

    let {
        startItems, startPage,
        base
    } = $props()

    let page = $state(startPage)
    let items = $state(startItems)

    let [minColWidth, maxColWidth, gap] = [300, 480, 16]
</script>

<Masonry
    {items}
    {minColWidth}
    {maxColWidth}
    class="m-4"
    {gap}
    >
    {#snippet children({ item })}
        <PaywallSeriesCard {item} {base} />
    {/snippet}
</Masonry>