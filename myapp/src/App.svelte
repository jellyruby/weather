<!--script>
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


<Router routes={PageRouter} /-->
<script>

  
  import ImageCellList from "./components/MainList/ImageCellList.svelte";  
  
  const srcList = [...new Array(4).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+5}.avif`;})];


  const srcList2 = [...new Array(5).map((value,index)=>{return `/src/assets/img/${index+1}.avif`;})];


  console.log([...new Array(4).fill(undefined)]);
  

  console.log(srcList);  
  console.log(srcList2);

</script>


  <main>
		<div class="frame">
			<div class="frame__title">
				<h1 class="frame__title-main"> 먀옹 </h1>
				<a aria-label="Back to the article" class="frame__title-back" href="https://tympanus.net/codrops/?p=65056">
					<span class="oh__inner">Back to the article</span>
					<svg width="21px" height="21px" viewBox="0 0 24 24">
						<path vector-effect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
					</svg>
				</a>
			</div>
			<a class="frame__prevdemo hover-line" href="http://tympanus.net/Development/GlitchPerspective/">Previous demo</a>
		</div>
		<section class="intro">
			<p>나는 낭만 고양이</p>
		</section>
		<section class="content">
			<div class="cover"></div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">열대성 저기압 감시</span></h2>
				</div>
        <ImageCellList srcList={srcList}/>

			</div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">기후 감시</span></h2>
				</div>
        <ImageCellList srcList={srcList2}/>
			</div>
            <div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">날씨 감시</span></h2>
				</div>
				<div class="cell cell--images">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/10.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/11.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/12.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/13.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/14.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/15.avif)"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">특이 기상 감지</span></h2>
				</div>
				<div class="cell cell--images">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/16.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/17.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/18.avif)"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">계절 별 기상 분석</span></h2>
				</div>
				<div class="cell cell--images">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/19.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/20.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/21.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/22.avif)"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">해외 기상청 자료</span></h2>
				</div>
				<div class="cell cell--images">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/23.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/24.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/25.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/26.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/27.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/28.avif)"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">수치모델 자료</span></h2>
				</div>
				<div class="cell cell--images">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/29.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/30.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/1.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/10.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/12.avif)"></div>
					</div>
				</div>
			</div>
		</section><!-- /content -->
		<section class="preview">
			<button class="preview__close unbutton">&#9587;</button>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Nobody's Love</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/27.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/26.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/25.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/24.avif)"></div>
					</div>
				</div>
			</div>
            <div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Good Wings</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/30.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/29.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/28.avif)"></div>
					</div>
				</div>
			</div>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Maniac Fly</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/22.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/21.avif)"></div>
					</div>
				</div>
			</div>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Crumble Toe</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/20.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/19.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/30.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/31.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/2.avif)"></div>
					</div>
				</div>
			</div>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Finger Wax</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/15.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/14.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/13.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/12.avif)"></div>
					</div>
				</div>
			</div>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Haunted X</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/11.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/10.avif)"></div>
					</div>
				</div>
			</div>
			<div class="preview__item">
				<h2 class="preview__item-title oh"><span class="oh__inner">Next Horror</span></h2>
				<div class="grid">
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/6.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/8.avif)"></div>
					</div>
					<div class="cell__img">
						<div class="cell__img-inner" style="background-image:url(/src/assets/img/5.avif)"></div>
					</div>
				</div>
			</div>
		</section>
		<footer class="page-footer">
			<p class="page-footer__text">What alacrity around one and the same dropping! Never did adventurers hurrying from the four corners of the earth display such eagerness in working a Californian claim.</p>
			<p class="page-footer__text">Before the sun becomes too hot, they are there in their hundreds, large and small, promiscuously, of every sort, shape and size, hastening to carve themselves a slice of the common cake. There are some that work in the open air and scrape the surface; there are some that dig themselves galleries in the thick of the heap, in search of choice veins; others work the lower stratum and bury their spoil without delay in the underlying ground; others—the smallest—stand aside to crumble a morsel that has fallen from the mighty excavations of their more powerful fellow-workers. Some, the newcomers and, no doubt, the hungriest, consume their meal on the spot; but the greater number mean to put by a substance that will allow them to spend long days in plenty, down in some safe retreat. A nice, fresh dropping is not found just when you want it, amid the fields bare of thyme; a windfall of that sort is as manna from the sky; only fortune’s favourites receive so fair a portion. Wherefore the riches of to-day are prudently stored for the morrow.</p>
			<p class="page-footer__text">Who is this that trots towards the heap, fearing lest he come too late? His long legs move with a sudden, awkward action, as though driven by some mechanism within his belly; his little red antennæ spread their fan, a sign of anxious greed. He is coming, he has come, not without sending some few banqueters sprawling. It is the Sacred Beetle, clad all in black, the biggest and most famous of our Dung-beetles. Ancient Egypt held him in veneration and looked upon him as a symbol of immortality. Here he now sits at table, beside his fellow-guests, each of whom is giving the last touches to his ball with the flat of his broad fore-legs or else enriching it with yet one more layer before retiring to enjoy the fruit of his labours in peace. Let us follow the construction of the famous ball in all its phases.</p>
			<p class="page-footer__text">For his own needs, the Beetle is less fastidious and contents himself with a wholesale selection. The notched shield scoops and digs, eliminates and gathers somewhat at random. The fore-legs play a mighty part in the work. They are flattened, curved into the segment of a circle, supplied with powerful nervures and armed on the outside with five sturdy teeth. If a powerful effort be needed to remove an obstacle or to force a way through the thickest part of the heap, the Dung-beetle makes [6]play with his elbows, that is to say, he flings his toothed legs to right and left and clears a semi-circular space with a vigorous thrust of the rake. Room once made, a different kind of work is found for these same limbs: they collect armfuls of the material raked together by the shield and push it under the insect’s belly, between the four hind-legs. These are shaped for the turner’s trade. The legs, especially the last two, are long and slender, slightly bowed and ending in a very sharp claw. One has but to look at them to recognize a pair of spherical compasses capable of embracing a globular body in their curved branches and improving its form. In fact, their mission is to shape the ball.</p>
			<p class="page-footer__credits">
				Made by @jellyzircon
			</p>
		</footer>
	</main>









