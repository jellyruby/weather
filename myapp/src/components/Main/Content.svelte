<script>
  import ImageCellList from "./ImageCellList.svelte";  
  import ImageCell from "./ImageCell.svelte";  

	

	//#todo. 추후 크롤링한 데이터를 DB화 하여, api 에서 주는 값으로 출력한다.

  const srcList =  [
    {
			title: '현재 진행중인 열대저기압' ,
			ImageList : {
				image: [...new Array(3).fill(undefined).map((value,index)=>{return `/src/assets/img/storm${index+1}.gif`;})],
				name: ['91w','92w','93w']
			}
		},
		{
			title: '기후 감시' ,
			ImageList : {
				//image: [...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+1}.avif`;})],
				image:[
					'https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_asia-lea_t2max_3-day.png',
					'https://www.cpc.ncep.noaa.gov/products/precip/CWlink/daily_ao_index/ao.gefs.sprd2.png',
					'https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_asia-lea_ws10_3-day.png',
					'https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_asia-lea_pwtr_3-day.png',
					'https://climatereanalyzer.org/wx_frames/gfs/ds/gfs_asia-lea_t2max_3-day.png',
				],
				name: ['전세계 평균기온','북극진동','유라시아 눈덮힘','QBO 2년 진동','ENSO']
			}
		},
		{
			title: '날씨 감시' ,
			ImageList : {
				image: [...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+10}.avif`;})],
				name: ['91w','92w','93w']
			}
			
		},
		{
			title: '특이 기상 감시' ,
			ImageList : {
				image: [...new Array(3).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+16}.avif`;})],
				name: ['91w','92w','93w']
			}
		},
		{
			title: '계절 별 기상 분석' ,
			ImageList : {
				image: [...new Array(4).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+19}.avif`;})],
				name: ['91w','92w','93w']
			}
			
		},
		{
			title: '해외 기상청 자료' ,
			ImageList : {
				image: [...new Array(5).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+23}.avif`;})],
				name: ['91w','92w','93w']
			}
			
		},
		{
			title: '수치모델 자료' ,
			ImageList : {
				image: [...new Array(3).fill(undefined).map((value,index)=>{return `/src/assets/img/${index+28}.avif`;})],
				name: ['91w','92w','93w']
			}
			
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
