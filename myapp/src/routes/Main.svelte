<script>

import Gallery from "svelte-gallery";

const images = [
    {
      src: "http://localhost:8080/image",
      width: 686,
      height: 296,
    },

  ];

</script>


<div>대충 히마와리 위성 </div>


<Gallery {images} />