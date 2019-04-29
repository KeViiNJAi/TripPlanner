console.log('inside src index.js');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoidGx1bzk3MTMiLCJhIjoiY2p2Mmo2cTFsMGNmcTRlbDgwbmZ0N2ZkdCJ9.CUj7L2YbJZWg7xlrhlUtfg';

/* const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});


let FSANYC = new mapboxgl.Marker(markerDomEl)
  .setLngLat([-74.009151, 40.705086])
  .addTo(map); */

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map);
