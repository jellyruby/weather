<script >

    export let detailKey = 0;

    const crawlingCyloneData = [
        {
            "title":"Tropical Depression 94S",
            "image_url":"https://cyclonicwx.com/data/tracks/wp902022track.png",
            "updateDate": "2022-12-10",
            "htmlText":"가시광선 이미지",
            "comment":"사람의 눈에 보이는 가시광선 이미지입니다. 햇빛이 비추는 낮 시간에만 보입니다.",
            "html":'<img alt="아직 이미지가 생성되지 않았습니다." src="https://www.easterlywave.com/media/latest/sate/92W_b1.png"/>'
    
        },
        {
            "title":"Tropical Depression 92W",
            "updateDate": "2022-12-10",
            "htmlText":"수온",
            "comment":"통상적으로 26.5도 이상의 수온에서 태풍이 발생하며 <br> 28도 이상의 수온에서 태풍이 발달하기 좋은 환경입니다.",
            "html":'<img alt="아직 이미지가 생성되지 않았습니다." src="https://www.data.jma.go.jp/gmd/kaiyou/data/db/kaikyo/daily/image/HQ/2022/sstD_HQ20221208.png"/>'
        }
    ]


    const onClickCellImage = () => {
        
    }
    

</script>


<div class="detail__item">
    <h2 class="detail__item-title oh"><span class="oh__inner">{crawlingCyloneData[detailKey].title}</span></h2>
    <div class="grid_detail">

		{#each crawlingCyloneData as src}
            <div>
                <div class="cell__img-title">{src.htmlText}</div> (update by : {src.updateDate})
                {@html src.html}
                {@html src.comment} 
            </div>
            
		{/each}

        <!--div class="cell__img" >
            <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[detailKey].jtwc}"/>
        </div>
        <div class="cell__img"  >
            <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[detailKey].image_url}"/>
            {crawlingCyloneData[0].locate}
        </div-->
        
    </div>
</div>

