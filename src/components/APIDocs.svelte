<script lang="ts">
  import Masonry from "svelte-bricks";

    let [minColWidth, maxColWidth, gap] = [240, 480, 16];
</script>

<Masonry items={new Array(3)} {minColWidth} {maxColWidth} {gap}>
    <slot />
</Masonry>