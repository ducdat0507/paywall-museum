<script lang="ts">
    import Masonry from 'svelte-bricks';
    import PaywallCard from './PaywallCard.svelte';

    let {
        paywall,
        base
    } = $props()

    let items = $state(paywall.paywalls)

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
        <PaywallCard {item} {base} />
    {/snippet}
</Masonry>