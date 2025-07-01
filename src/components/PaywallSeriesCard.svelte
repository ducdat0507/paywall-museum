<script>
    import Masonry from 'svelte-bricks'

    let {
        item
    } = $props()
</script>

<section class="item text-center">
    <div class="border-1 border-gray-900">
        <img class="w-full" src={item.paywalls[0].imageUrl} alt={item.paywalls[0].imageAlt} />
    </div>
    <h2 class="xs:font-sans italic">{item.name}</h2>
</section>