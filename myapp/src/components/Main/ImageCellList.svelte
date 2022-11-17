<script>

    import ImageCell from './ImageCell.svelte';
    export let srcList;

</script>

<div class="cell cell--images">
    {#each srcList as src}
        <ImageCell {src}/>
    {/each}
</div>