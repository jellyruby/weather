<script>
    import { Swipe, SwipeItem } from "svelte-swipe";
    let active_item = 0; //readonly
    let SwipeComp;
  
      function changeSlide(i){
      SwipeComp.goTo(i)
    }
  
    export let images = [];
  
  </script>
  
  <style>
    .swipe-holder{
      height: 30vh;
      width: 100%;
    }
    .is-center{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      max-width: 100%;
      height: auto;
    }
   
  </style>
  <div class="row">
      <div class="col">
          <div class="card">
          <div class="swipe-holder">
              <Swipe bind:active_item bind:this={SwipeComp}>
                  {#each images as image}
                  <SwipeItem>
                      <img class="img-fluid" src={image} alt="">
                  </SwipeItem>
                  {/each}
              </Swipe>
          </div>
        <div class="card-body">
              <div class="is-center">
                  {#each images as image, i}
                  <img class="img-fluid {active_item == i ? 'rounded' : 'img-thumbnail'}" on:click={() => changeSlide(i)} style="height:30px; width:30px; cursor:pointer" src={image} alt="">
                  {/each}
              </div>
        </div>
          </div>	
      </div>
  </div>
  
  
  