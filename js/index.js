import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
// import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import {handleBlockGroups, handleMCD, handleCharging} from "./click.js";
import {
    // togglerDVRPC,
    // togglerPA,
    // togglerNJ,
    togglerPEV,
    togglerWP,
    filterCurrent
  } from "./toggler.js";


// const modal = document.getElementById('modal')
// const modalToggle = document.getElementById('modal-toggle')
// const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const toggleForm = document.getElementById('toggle-form')
const inputs = toggleForm.querySelectorAll('input')
const selects = toggleForm.querySelectorAll('#layout_select')

$('#pa-future').hide();
$('.future').hide();
$('.workplace').hide();
$('.free').hide();
$('.paid').hide();


// map
const map = makeMap()

map.on('load', () => {
      // wiring for on-click event on the map
    // togglerDVRPC(map);
    // togglerPA(map);
    // togglerNJ(map);
    togglerPEV();
    togglerWP();
    filterCurrent();

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
    //   for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    // set default form state
    let activeInputs = handleForms('#charging', inputs, map)
    let activeSelects = handleForms('#layout_select', selects, map)
    let allActiveToggles = [... activeSelects, ... activeInputs]

    handleLegend(allActiveToggles, legendContainer)
    // This functiin reorders point features
    //  map.moveLayer('dvrpc-projected', 'dvrpc-current');
    // handle simple toggles - layers on/off and corresponding legend items on/off
    toggleForm.onchange = () => {
        activeInputs = handleForms('#charging', inputs, map)
        activeSelects = handleForms('#layout_select', selects, map)
        allActiveToggles = [... activeSelects, ... activeInputs]

        handleLegend(allActiveToggles, legendContainer)
    }

    map.addSource('dvrpcPEVBG', {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
    });

    map.addLayer({
        'id': 'dvrpcPEVMCD',
        'type': 'fill',
        'source': 'dvrpcPEVBG',
        'source-layer': 'dvrpc_pev_mcd',
        'layout': {}, 
        'paint': {
            'fill-opacity': 0.0
        }
    });

    map.addSource('dvrpcPEVBG-line', {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
    });

    map.addLayer({
        'id': 'dvrpcPEVBG-line',
        'type': 'line',
        'source': 'dvrpcPEVBG-line',
        'source-layer': 'dvrpc_pev_bg',
        'layout': {}, 
        'paint': {
            "line-width": [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                6,
                1
                ],
            "line-color":[
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                "#FF0000", "#9cafb5"
                ],
            "line-opacity": {
                base: 9,
                stops: [
                  [9, .4],
                  [10, .5],
                  [11, .65],
                  [12, .7],
                  [13, .8],
                  [14, .9],
                ],
             }
    },
        "filter": [">=", "POP", 0.1],
    });

    map.addLayer({
        'id': 'dvrpcPEVBG',
        'type': 'fill',
        'source': 'dvrpcPEVBG',
        'source-layer': 'dvrpc_pev_bg',
        'layout': {}, 
        'paint': {
            'fill-color': '#e2eb32',
            'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            .8,
            0.0
            ]
        },
        "filter": [">=", "POP", 0.1],
    });
    var hoveredStateId = null;
   
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', 'dvrpcPEVBG', (e) => {
    //  console.log(e.features[0].properties);
        var tileID = e.features[0].properties.GEOID10;
     //   var props = e.features[0].properties.GEOID10;
        map.getCanvas().style.cursor = "pointer";
        if (e.features.length > 0) {
      //  console.log(e.features[0])
        if (hoveredStateId !== null) {
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        map.setFeatureState(
            { source: 'dvrpcPEVBG-line', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
            { hover: false }
        );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: true }
        );
        map.setFeatureState(
            { source: 'dvrpcPEVBG-line', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
            { hover: true}
        );
        }
     //   map.setFilter('dvrpcPEVBG-line-RED', ['==', 'GEOID10', tileID]);
      //  handleHighlight(props)
    });
        
    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'dvrpcPEVBG', () => {
      //  var tileID = e.features[0].properties.GEOID10;
        map.getCanvas().style.cursor = "";
        if (hoveredStateId !== null) {
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        map.setFeatureState(
            { source: 'dvrpcPEVBG-line', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
            { hover: false }
        );
        }
        hoveredStateId = null;
     //   map.setFilter('dvrpcPEVBG-line-RED', ['==', 'GEOID10', 999999]);
    });

    map.on('click','dvrpcPEVBG', (e) => {
        // mapbox function calling of geojson properties
        document.getElementById("mapStart").style.display = "none";
        document.getElementById("mapDetails").style.display = "inline-block";
        var props = e.features[0].properties;
        handleBlockGroups(props,map)
        // var coordinates = e.features[0].geometry.coordinates[0];
        // var FID = e.features[0].id;
        // console.log(coordinates);
        // handleSidebarDisplay()
        // handleHighlight(FID)
      });

    map.on('click','dvrpcPEVMCD', (e) => {
        var props = e.features[0].properties;
        handleMCD(props)
    });
// Charging Station Actions
    map.on('mousemove', 'charging', (e) => {
        map.getCanvas().style.cursor = "pointer";
        var props = e.features[0].properties;
    //    handleCharging(props)
        createPopUpCL(e.features[0])
    });

    map.on('mouseleave', 'charging', (e) => {
        map.getCanvas().style.cursor = "";
        closePopUp();
    });     

    // map.on('click','charging', (e) => {
    //     var props = e.features[0].properties;
    //     handleCharging(props)
    //     createPopUpCL(e.features[0])
    // });

    function createPopUpCL(currentFeature) {
        const popUps = document.getElementsByClassName("mapboxgl-popup");

        function replacer(key, value) {
            return value.replace(/[^\w\s]/gi, '').replace(/["']/g, '');
          }
         

          var ev_connect_values = currentFeature.properties.ev_connector_types.replace(/[^\w\s]/gi, '').replace(/["']/g, '');
          var ev_connect = ev_connect_values;
        //   console.log(ev_connect_values);
         if (currentFeature.properties.ev_level1_evse_num > 0){
            var ev_type1 = "<p><b>Type:</b> Level 1 <br><b>EVSE Ports:</b> " + currentFeature.properties.ev_level1_evse_num +"</p>";
          } else {
          var ev_type1 = ""}; 

          if (currentFeature.properties.ev_level2_evse_num > 0){
            var ev_type2 = "<p><b>Type:</b> Level 2 <br><b>EVSE Ports:</b> " + currentFeature.properties.ev_level2_evse_num +"</p>";
          } else {
          var ev_type2 = ""};  

          if (currentFeature.properties.ev_dc_fast_num > 0){
            var ev_dcfast = "<p><b>Type:</b> DC Fast <br><b>EVSE Ports:</b> " + currentFeature.properties.ev_dc_fast_num  +"</p>";
          } else {
          var ev_dcfast = ""}; 
    
        if (popUps[0]) popUps[0].remove();
        // var popup = new mapboxgl.Popup({ closeOnClick: false })
        new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
          "<p><B>"
          + currentFeature.properties.station_name
          +"</B></p><p>"
          + currentFeature.properties.street_address
          +"</p><p>"
          + currentFeature.properties.sity 
          +", "
          + currentFeature.properties.state
          +", "
          + currentFeature.properties.zIP
          +"</p><hr>"
          + ev_type1
          + ev_type2
          + ev_dcfast
          +"<p><b>Connector(s):</b> "
          + ev_connect
          +"</p><p><b>Charge Network:</b> "
          + currentFeature.properties.ev_network
          +"</p><p><b>Access Info:</b> "
          + currentFeature.properties.access_days_time
          +"</p><p><i>Station details are subject to change.</i></p>"
          )
          .addTo(map);
      }
    
      function closePopUp() {
        const popUps = document.getElementsByClassName("mapboxgl-popup");
        if (popUps[0]) popUps[0].remove();
      }

    
})

// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})


// modal
// handleModal(modal, modalToggle, closeModal)
