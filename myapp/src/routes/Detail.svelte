<div  class="routePage">
    <!-- Include the CesiumJS JavaScript and CSS files -->
    <script
        src="https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js"
    ></script>
    <script>
        // Your access token can be found at: https://cesium.com/ion/tokens.
        // This is the default access token from your ion account

        Cesium.Ion.defaultAccessToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYTFlNTY1Ny1kMGJlLTQyMTQtYmFkYS1iYTc4Y2U3YzlmMTQiLCJpZCI6MTEzOTkyLCJpYXQiOjE2Njc4Mjg3MjZ9.XOhDJ7zWEfmydDZFFhouf5m84E-DOTwmJznLK5ZJ87M";

        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const viewer = new Cesium.Viewer("cesiumContainer", {
            terrainProvider: Cesium.createWorldTerrain(),
        });
        // Add Cesium OSM Buildings, a global 3D buildings layer.
        const buildingTileset = viewer.scene.primitives.add(
            Cesium.createOsmBuildings()
        );
        // Fly the camera to San Francisco at the given longitude, latitude, and height.
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation: {
                heading: Cesium.Math.toRadians(0.0),
                pitch: Cesium.Math.toRadians(-15.0),
            },
        });
    </script>
    <link
        href="https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Widgets/widgets.css"
        rel="stylesheet"
    />
    <div id="cesiumContainer" />
</div>
