
<script>
	import ImageCellList from "./ImageCellList.svelte";  
	import ImageCell from "./ImageCell.svelte";  
	import DetailContent from "../../components/Detail/Detail.svelte";   

	

</script>




<section class="preview">
	<button class="preview__close unbutton">&#9587;</button>
	<button class="preview__refresh unbutton">&#10227;</button>
	<DetailContent />
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">현재 진행중인 열대성 저기압</span></h2>
		<div class="grid">

			<!--ImageCell src="/src/assets/img/27.avif"/>
			<ImageCell src="/src/assets/img/26.avif"/>
			<ImageCell src="/src/assets/img/25.avif"/>
			<ImageCell src="/src/assets/img/24.avif"/-->
		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">기후 감시 요소</span></h2>
		<div class="grid">

			<!-- <ImageCell src="/src/assets/img/30.avif"/>
			<ImageCell src="/src/assets/img/29.avif"/>
			<ImageCell src="/src/assets/img/28.avif"/>
			<ImageCell src="/src/assets/img/27.avif"/> -->
		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">날씨 감시 요소</span></h2>
		<div class="grid">
			<!-- <div class="cell__img">
				<div class="cell__img-inner" style="background-image:url(/src/assets/img/22.avif)"></div>
			</div>
			<div class="cell__img">
				<div class="cell__img-inner" style="background-image:url(/src/assets/img/21.avif)"></div>
			</div> -->
		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">특이기상 감시</span></h2>
		<div class="grid">

		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">계절 별 기상 분석</span></h2>
		<div class="grid">

		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">해외 기상청 자료</span></h2>
		<div class="grid">

		</div>
	</div>
	<div class="preview__item">
		<h2 class="preview__item-title oh"><span class="oh__inner">수치모델 자료</span></h2>
		<div class="grid">
			<!-- <div class="cell__img">
				<div class="cell__img-inner" style="background-image:url(/src/assets/img/6.avif)"></div>
			</div>
			<div class="cell__img">
				<div class="cell__img-inner" style="background-image:url(/src/assets/img/8.avif)"></div>
			</div>
			<div class="cell__img">
				<div class="cell__img-inner" style="background-image:url(/src/assets/img/5.avif)"></div>
			</div> -->
		</div>
	</div>
</section>