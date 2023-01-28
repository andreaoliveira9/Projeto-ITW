/* Instantiate map to the div with id "map" */
var map = new atlas.Map("map", {
    center: [0, 0],
    zoom: 1,
    view: "Auto",
    style: "satellite",

    authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: 'F9_n7R94jV3qqQjLOss7SaFOvt9cD537Rw9XBN0Lvck',

        getToken: function(resolve, reject, map) {
            var tokenServiceUrl = "https://azuremapscodesamples.azurewebsites.net/Common/TokenService.ashx";

            fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
        }
    }
});

map.events.add('ready', function() {
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [144, -37],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [101, 2],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [50, 26],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [2, 41],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [29, 40],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [7, 43],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-73, 45],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [3, 46],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-1, 52],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [8, 49],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [19, 47],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [0, 39],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [5, 50],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [9, 45],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [103, 1],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [138, 35],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [121, 31],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-46, -23],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-86, 39],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [6, 50],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [11, 44],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [136, 34],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [14, 47],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [54, 24],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-58, -34],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-6, 36],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-9, 38],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [134, 34],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [138, -34],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [28, -25],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-1, 52],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-99, 19],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-112, 33],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [5, 43],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [126, 34],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-43, -22],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-83, 42],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [0, 51],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [4, 52],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [5, 50],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [4, 47],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-96, 32],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-118, 33],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-115, 36],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-3, 40],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-76, 42],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [13, 57],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-78, 44],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [2, 41],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [4, 50],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [3, 45],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-74, 46],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [1, 49],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [0, 47],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [3, 49],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-2, 53],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-8, 41],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-117, 33],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [13, 52],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-9, 38],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-81, 27],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-7, 33],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [14, 42],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [7, 46],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [2, 41],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [77, 28],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-97, 30],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [14, 47],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [39, 43],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-74, 40],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [49, 40],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [105, 21],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [-8, 37],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [11, 43],
        pixelOffset: [5, -18],
    }));
    map.markers.add(new atlas.HtmlMarker({
        htmlContent: "<div><div class='pin bounce'></div><div class='pulse'></div></div>",
        position: [39, 21],
        pixelOffset: [5, -18],
    }));
});