<script >


    import {querystring} from "svelte-spa-router"

    const crawlingCyloneData = [
        {
            "title":"Tropical Depression 94S",
            "image_url":"https://cyclonicwx.com/data/tracks/wp902022track.png",
            "locate":"10.5°S, 107.2°E",
            "jtwc":'test'
        },
        {
            "title":"Invest 94B","image_url":"/data/tracks/io942022track.png",
            "locate":"Located at 11.2°N, 87.6°E",
            "jtwc":'test'
        },
        {"title":"Invest 97W","image_url":"/data/tracks/wp972022track.png","locate":"Located at 6.8°N, 112.5°E"}
    ]


    const onClickCellImage = () => {
        
    }
    

</script>


<div class="detail__item">
    <h2 class="detail__item-title oh"><span class="oh__inner">{crawlingCyloneData[0].title}</span></h2>
    <div class="grid grid_detail">

        <div class="cell__img" >
            <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[0].jtwc}"/>
        </div>
        <div class="cell__img"  >
            <img alt="아직 이미지가 생성되지 않았습니다." src="{crawlingCyloneData[0].image_url}"/>
            {crawlingCyloneData[0].locate}
        </div>
        
    </div>
</div>

