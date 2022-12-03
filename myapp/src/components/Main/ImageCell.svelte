<script>

    export let src;
    export let name;

</script>


<div class="cell__img">
    <div>{name}</div>
    <div id="{name}" class="cell__img-inner" style="background-image:url({src})" data-url={name}></div>
</div>