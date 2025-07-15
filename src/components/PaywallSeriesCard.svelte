<script>
    import Masonry from 'svelte-bricks'

    let {
        item
    } = $props()
</script>

<section class="item border-1 bg-amber-100 text-black border-amber-200 rounded-xs shadow-sm">
    <a href={"/pay-to/" + item.id} class="block">
        <div class="border-1 border-amber-200 m-0.5 overflow-hidden">
            <img class="w-full" src={item.paywalls[0].imageUrl} alt={item.paywalls[0].imageAlt} />
        </div>
        <h2 class="mb-1">{item.name}</h2>
    </a>
</section>

<style>
    @reference "tailwindcss";

    .item {
        @apply duration-100;
    }
    .item:hover {
        @apply z-1 -rotate-[0.5deg] -translate-y-0.5 shadow-md;
    }
    .item h2 {
        @apply font-sans font-normal text-center text-sm italic mt-1;
    }
</style>