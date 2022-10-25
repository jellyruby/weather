
<script>

  let snows = [...new Array(100).map(()=>{return 1;})];
  let snowClass = "snowShow";


</script>


{#each snows as snow}
  <div class={snowClass} />
{/each}

<button
  on:click={() => {
    snowClass = snowClass == "snowShow" ? "snowHide" : "snowShow";
  }}
>
  Snow Off
</button>


<style lang="scss">
    @use 'sass:math';
    //@import "../style/app.scss";
    // 직접 sass/scss 코드를 입력해도 된다.
    $b: 100;
    
    .snowShow {
      border-radius: 50%;
      float: left;
      margin-top: -50px;
      position: absolute;
      @for $i from 0 to $b {
        $rw: random(10) + 1;
  
        $ra: random(20) + 10;
        $rd: random(10) + 1;
  
        $rc: random(10) + 90;
  
        &:nth-child(#{$i + 1}) {
          margin-left: (math.percentage(math.div(1,$b))) * $i;
          width: $rw + px;
          height: $rw + px;
          background: hsla(0, 0%, math.percentage($rc), math.percentage(0.8));
          background-color:rgb(185, 222, 233);
          color:rgb(185, 222, 233);
          box-shadow: 0 0 15px 10px ;
          animation: fall $ra + s $rd + s infinite;
        }
      }
    }
  
    @keyframes fall {
      0% {
        transform: scale(0);
      }
      2% {
        transform: scale(1);
        top: -50px;
      }
      100% {
        transform: scale(0);
        top: 100%;
      }
    }
  </style>
  