<script>
  import ImageCellList from "./ImageCellList.svelte";  
  import ImageCell from "./ImageCell.svelte";  
  
  const srcList =  [
    {
			title: '열대성 저기압 감시' ,
			ImageList : [...new Array(4).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+5}.avif`;})]
		},
		{
			title: '기후 감시' ,
			ImageList : [...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+1}.avif`;})]
		},
		{
			title: '날씨 감시' ,
			ImageList : [...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+10}.avif`;})]
		},
		{
			title: '특이 기상 감시' ,
			ImageList :[...new Array(3).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+16}.avif`;})]
		},
		{
			title: '계절 별 기상 분석' ,
			ImageList :[...new Array(4).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+19}.avif`;})]
		},
		{
			title: '해외 기상청 자료' ,
			ImageList :[...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+23}.avif`;})]
		},
		{
			title: '수치모델 자료' ,
			ImageList :[...new Array(3).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+28}.avif`;})]
		}
  ];
  


</script>



<section class="content">
    <div class="cover"></div>
		{#each srcList as src}
    <div class="row">
			<div class="cell cell--text">
					<h2 class="cell__title oh"><span class="oh__inner">{src.title}</span></h2>
			</div>
			 <ImageCellList srcList={src.ImageList}/>
	</div>
		{/each}


</section>
