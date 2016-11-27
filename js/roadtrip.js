$(document).ready(function(){

  mapLat = +$('#map').attr('data-lat')
  mapLon = +$('#map').attr('data-lon')

  mapboxgl.accessToken = 'pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw'

  map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/dark-v9',
    //style: 'mapbox://styles/ejfox/civmvmaof000b2jmy8qet2ye0',
    //style: 'mapbox://styles/ejfox/civmmjq9u001w2imx012o0jca',
    style: 'mapbox://styles/ejfox/civmvmaof000b2jmy8qet2ye0',
    //zoom: 11,
    zoom: 6.5,
    pitch: 25,    
    center: [mapLon, mapLat ],
    scrollZoom: false,
    interactive: false
  })

  /*
  map.on('mousemove', function(){
    map.zoomTo(5.5, {
      duration: 300
    })
  })
  */

  map.on('mousedown', function(){
    if (map.getZoom() > 4.5 ) {
      map.zoomTo(4.5, {
        duration: 900
      })
    }
    else {
      map.zoomTo(6.5, {
        duration: 900
      })
    }
  })

  /*
  map.on('mouseout', function(){
    map.zoomTo(6.5, {
      duration: 300
    })
  })
  */
  
  /*
  var el = document.createElement('div');
  el.className = 'map-marker';

  new mapboxgl.Marker(el, {
        offset: [-6, -6]
      })
    .setLngLat([mapLon, mapLat])
    .addTo(map);
  */


  $.fn.sparkline.defaults.pie.sliceColors = ['#000','#CCC'];
  $.fn.sparkline.defaults.pie.offset = 90

  $.fn.sparkline.defaults.line.spotColor = ['#000'];
  $.fn.sparkline.defaults.line.minSpotColor = false//['#999'];
  $.fn.sparkline.defaults.line.maxSpotColor = false//['#999'];
  $.fn.sparkline.defaults.line.spotRadius = 2;
  $.fn.sparkline.defaults.line.defaultPixelsPerValue = 6

  $.fn.sparkline.defaults.common.lineColor = '#999';
  $.fn.sparkline.defaults.common.fillColor = false;
  $.fn.sparkline.defaults.common.disableInteraction = true

  $('.sparkline').sparkline('html', {
    enableTagOptions: true
  });
})
