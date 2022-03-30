import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import {handleBlockGroups, handleMCD} from "./click.js";
import {
    togglerDVRPC,
    togglerPA,
    togglerNJ,
    togglerPEV,
    togglerWP,
    filterCurrent
  } from "./toggler.js";


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const toggleForm = document.getElementById('toggle-form')
const inputs = toggleForm.querySelectorAll('input')
const selects = toggleForm.querySelectorAll('#layout_select')

$('#pa-future').hide();
$('.future').hide();

// map
const map = makeMap()

map.on('load', () => {
      // wiring for on-click event on the map
    togglerDVRPC(map);
    togglerPA(map);
    togglerNJ(map);
    togglerPEV(map);
    togglerWP(map);
    filterCurrent();

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
    //   for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    // set default form state
    let activeInputs = handleForms('input', inputs, map)
    let activeSelects = handleForms('#layout_select', selects, map)
    let allActiveToggles = [... activeSelects, ... activeInputs]

    handleLegend(allActiveToggles, legendContainer)
    // This functiin reorders point features
    //  map.moveLayer('dvrpc-projected', 'dvrpc-current');
    // handle simple toggles - layers on/off and corresponding legend items on/off
    toggleForm.onchange = () => {
        activeInputs = handleForms('input', inputs, map)
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
            // 'fill-color': '#e2eb32',
            // // 'fill-opacity': 0.0,
            // 'fill-outline-color':'#f2f12d',
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
            // 'fill-opacity': 0.0,
            // 'fill-outline-color':'#f2f12d',
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

    
})

// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})


// modal
handleModal(modal, modalToggle, closeModal)
