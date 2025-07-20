<script lang="ts">
    import Masonry from 'svelte-bricks'
  import type { PaywallInfo } from '../types/PaywallInfo';
  import { pricingTypes } from '../types/PricingTypes';

    let {
        item
    }: {
        item: PaywallInfo
    } = $props()
    
</script>

<section class="item border-1 bg-amber-100 text-black border-amber-200 rounded-xs shadow-sm">
    <div class="border-1 bg-amber-200 border-amber-200 m-0.5 overflow-hidden">
        <img class="w-full max-h-80 object-contain" src={item.imageUrl} alt={item.imageAlt} />
    </div>
    <p class="mb-1">
        <span class="float-left opacity-75">{item.attribution}</span>
        <span class="inline-block -mt-2 -mb-1">
            {#each item.links as link}
                <a class="attr-link button" href={link.url}>
                    {pricingTypes[link.type].name}
                </a>
            {/each}
            {#if !item.links.length}
                <span class="opacity-50 inline-block my-2 mr-2">Attribution missing :(</span>
            {/if}
        </span>
    </p>
</section>

<style>
    @reference "tailwindcss";

    .item {
        @apply duration-100;
    }
    .item:hover {
        @apply z-1 -rotate-[0.5deg] -translate-y-0.5 shadow-md;
    }
    .item p {
        @apply font-sans font-normal text-end text-sm italic mt-2 ml-3 mr-1;
    }
    .item .attr-link {
        @apply not-italic px-2 py-1 my-1 text-white rounded-xs;
    }
</style>