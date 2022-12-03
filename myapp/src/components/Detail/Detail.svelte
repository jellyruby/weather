<script >

    import ProductShow from "../ProductShow.svelte"

    import {querystring} from "svelte-spa-router"

    const crawlingCyloneData = [
        {
            "title":"Tropical Depression 94S",
            "image_url":"https://cyclonicwx.com/data/tracks/wp902022track.png",
            "locate":"10.5°S, 107.2°E"
        },
        {
            "title":"Invest 94B","image_url":"/data/tracks/io942022track.png",
            "locate":"Located at 11.2°N, 87.6°E"
        },
        {"title":"Invest 97W","image_url":"/data/tracks/wp972022track.png","locate":"Located at 6.8°N, 112.5°E"}
    ]


    const onClickCellImage = (src ) => {
        
    }
    

</script>



<section class="preview">
	<button class="preview__close unbutton">&#9587;</button>
	<div class="preview__item preview__item--current">
		<h2 class="preview__item-title oh"><span class="oh__inner">{crawlingCyloneData[0].title}</span></h2>
		<div class="grid_detail">

            <div class="cell__img" on:click={() => onClickCellImage(crawlingCyloneData[0].jtwc)} >
                <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[0].jtwc}"/>
            </div>
            <div class="cell__img" on:click={() => onClickCellImage(crawlingCyloneData[0].jtwc)} >
                <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[0].image_url}"/>
                {crawlingCyloneData[0].locate}
            </div>
            
		</div>
	</div>
	
</section>
