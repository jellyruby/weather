<script>
    import Gallery from "svelte-gallery";
    import Dayjs from "dayjs";
    import { fade } from 'svelte/transition';

    const imgUrl = Dayjs().format('YYYYMMDD0600.png');
    



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
<div class="routePage">
    <Gallery {images} />
</div>
  