
<script>

  import Router from 'svelte-spa-router';
  import Main from './routes/Main.svelte';
  import Detail from "./routes/Detail.svelte";  




</script>

<Router routes={{
	'/': Main,
	'/Detail': Detail,
  }} />
  

