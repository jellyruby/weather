
<!--script>

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


<Gallery {images} /-->



  
<script>

  import MainContent from "../components/Main/Content.svelte";  
  import PreviewContent from "../components/Main/Preview.svelte";   
	import {gsapStart} from "../assets/js/index.js";
	import { onMount } from "svelte";


	onMount(() => {

		gsapStart();

	});


</script>

  

  <main>
		<div class="frame">
			<div class="frame__title">
				<h1 class="frame__title-main"> 먀옹 </h1>
				<a aria-label="Back to the article" class="frame__title-back" href="https://github.com/jellyruby/weather">
					<span class="oh__inner">Back to the article</span>
					<svg width="21px" height="21px" viewBox="0 0 24 24">
						<path vector-effect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
					</svg>
				</a>
			</div>
			<a class="frame__prevdemo hover-line" href="https://cafe.naver.com/ArticleRead.nhn?clubid=27402246&menuid=1&boardtype=L&page=1&specialmenutype=&userDisplay=15&articleid=59899">
				참고자료 [네이버 카페 E.I.M.O]
			</a>
		</div>
		<section class="intro">
			<p>이곳은 인트로입니닷!</p>
		</section>

		<MainContent/>
		<PreviewContent/>
		

		<footer class="page-footer">
			<p class="page-footer__text">날씨가 참 좋습니다</p>
			
			<p class="page-footer__credits">
				Made by @jellyzircon 
			</p>
		</footer>
	</main>











