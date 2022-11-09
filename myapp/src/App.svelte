<script>
  import Router from 'svelte-spa-router';

  import Header from "./Header.svelte";  
  import SnowEffect from "./components/SnowEffect.svelte";  

  import { PageRouterInit } from "./components/Navigation";
  import { fly } from 'svelte/transition';
  

  const PageRouter = PageRouterInit.reduce((acc,item) => {
			acc[item.url] = item.pageComponent;
			return acc;
		},{});


  window.onload = function(){

    const element = document.querySelectorAll('routePage');

    element.forEach(function(item,index){
      item.addEventListener('mousewheel',function(){
        
      })
    });

  }  
  

</script>

<Header />
<SnowEffect />


<Router routes={PageRouter} />









