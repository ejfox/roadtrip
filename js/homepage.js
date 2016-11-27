$(document).ready(function(){

  mapboxgl.accessToken = 'pk.eyJ1IjoiZWpmb3giLCJhIjoiY2lyZjd0bXltMDA4b2dma3JzNnA0ajh1bSJ9.iCmlE7gmJubz2RtL4RFzIw'  

  map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/mapbox/dark-v9',
    //style: 'mapbox://styles/ejfox/civmvmaof000b2jmy8qet2ye0',
    //style: 'mapbox://styles/ejfox/civmmjq9u001w2imx012o0jca',
    style: 'mapbox://styles/ejfox/civmvmaof000b2jmy8qet2ye0',
    //zoom: 11,
    zoom: 3.2,
    pitch: 25,
    //center: [mapLon, mapLat],
    center: [-98.5795, 39.8282],
    maxZoom: 6.5,
    minZoom: 3,
    //scrollZoom: false,
    //interactive: false
  })

  var mapStops = []
  var mapStopLonLat = []

  $('.map-stop').each(function(){
    var thisStop = {}    

    thisStop.title = $(this).attr('data-title')
    thisStop.location = $(this).attr('data-location')
    thisStop.url = $(this).attr('data-url')
    thisStop.lat = +$(this).attr('data-lat')
    thisStop.lon = +$(this).attr('data-lon')
    thisStop.lonlat = [thisStop.lon, thisStop.lat]

    mapStops.push(thisStop)
    mapStopLonLat.push(thisStop.lonlat)
    
    $(this).remove()
  })

  map.on('load', function(){

    map.flyTo({
      center: mapStops[0].lonlat,
      zoom: 3.5, 
      speed: 0.25,
      curve: 0.8
    })

    map.addSource("route", {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": mapStopLonLat
                }
            }
        });

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": "route",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#888",
            "line-width": 4
        }
    });

    mapStops.forEach(function(stop){
      //console.log("stop -->", stop)
      var el = document.createElement('div');
      el.className = 'map-marker';
      el.style = "cursor: pointer;"

      el.addEventListener('click', function() {
        console.log('stop', stop)
        location = stop.url
      });
      
      new mapboxgl.Marker(el, {
        offset: [-8, -8]
      })
      .setLngLat([stop.lon, stop.lat])
      .addTo(map);      
      
    })

    // fitBounds doesn't work even though it should

    //map.fitBounds(mapStopLonLat)

    /*
    map.fitBounds([
      [
        -84.387982,
        33.748995        
      ],[
        -82.551487,
        35.595058        
      ]
    ])
    */

  


  })

})
