<script>

    const crawlingCyloneData = [
        {"title":"Tropical Depression 94S","image_url":"/data/tracks/sh942023track.png","locate":"Located at 10.5°S, 107.2°E"},
        {"title":"Invest 94B","image_url":"/data/tracks/io942022track.png","locate":"Located at 11.2°N, 87.6°E"},
        {"title":"Invest 97W","image_url":"/data/tracks/wp972022track.png","locate":"Located at 6.8°N, 112.5°E"}
    ]

</script>


<div>
    <div>태풍 이름 : {crawlingCyloneData[0].title} </div>
    <div>현재위치 : {crawlingCyloneData[0].locate} </div>
    <div>진행 경로 : {crawlingCyloneData[0].image_url} </div>
</div>