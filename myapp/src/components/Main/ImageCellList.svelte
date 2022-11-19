<script>

    import src from 'gsap/src';
    import ImageCell from './ImageCell.svelte';
    export let srcList;

    const srcParma = srcList.image.map((vlaue,index)=>{

        

        return {image : srcList.image[index], name : srcList.name[index], }

    });

</script>

<div class="cell cell--images">
    {#each srcParma as src}
        <ImageCell src={src.image} name={src.name}/>
    {/each}
</div>