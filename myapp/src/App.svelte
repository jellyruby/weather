<script>
  import Gallery from "svelte-gallery";
  import Dayjs from "dayjs";
  import SnowEffect from "./components/SnowEffect.svelte";
  import Router from 'svelte-spa-router';
  import Main from "./routes/Main.svelte";
  import Detail from "./routes/Detail.svelte";
  

  const imgUrl = Dayjs().format('YYYYMMDD0600.png');

  let name = "jonghwa";
  //let fruits = ["apple","pineapple","melon","mango"];
  

  const images = [
    {
      src: "https://www.weather.go.kr/w/repositary/xml/fct/mid/img/FCT_WI1_11B10101_"+imgUrl,
      width: 686,
      height: 296,
    },
    {
      src: "https://www.weather.go.kr/w/repositary/xml/fct/mid/img/FCT_WI1_11B20201_"+imgUrl,
      width: 686,
      height: 296,
    },
    {
      src: "https://www.weather.go.kr/w/repositary/xml/fct/mid/img/FCT_WI1_11B20601_"+imgUrl,
      width: 686,
      height: 296,
    },
    {
      src: "https://www.weather.go.kr/w/repositary/xml/fct/mid/img/FCT_WI1_11B20305_"+imgUrl,
      width: 686,
      height: 296,
    },
  ];
</script>



<Router routes={{
  '/': Main,
  '/Detail': Detail
}} />


<SnowEffect>

</SnowEffect>



<div>
  <Gallery {images} />
</div>
