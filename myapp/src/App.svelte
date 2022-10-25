<script>
  import SnowEffect from "./components/SnowEffect.svelte";
  import Router from 'svelte-spa-router';
  import Main from "./routes/Main.svelte";
  import Detail from "./routes/Detail.svelte";
  import WeathetGallery from "./routes/Gallery.svelte";

</script>

<SnowEffect />

<Router routes={{
  '/': Main,
  '/Detail': Detail,
  '/Gallery' : WeathetGallery
}} />




