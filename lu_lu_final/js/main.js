/**
 * @author Lu Lu
 */

//reference map and module
require([
    "esri/config",
    "esri/Map", 
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend"], 
    function (esriConfig, WebMap, MapView, ScaleBar, Legend) {
    esriConfig.apiKey = "AAPK8e4cab574cfa43cdb8ae7394c9d4c0f7PoExz8laArRhs7ahr8mONfvowUk92fn1mRw8iue8vH4Hjsk2MWNzvzs5jxeHkGql";

    esriConfig.portalUrl = "https://myHostName.esri.com/arcgis";

    const webmap = new WebMap({
        portalItem: {
          id: "7baa128b2cde4b3db8ffcd1b3f44d615"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webmap
    });
    
    const scalebar = new ScaleBar({
        view: view
    });

    view.ui.add(scalebar, "bottom-left");

    const legend = new Legend ({
        view: view
    });

    view.ui.add(legend, "top-right");

});