import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import {handleBlockGroups} from "./click.js";


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const toggleForm = document.getElementById('toggle-form')
const inputs = toggleForm.querySelectorAll('input')
const selects = toggleForm.querySelectorAll('select')


// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
 //   for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    // set default form state
    let activeInputs = handleForms('input', inputs, map)
    let activeSelects = handleForms('select', selects, map)
    let allActiveToggles = [... activeSelects, ... activeInputs]

    handleLegend(allActiveToggles, legendContainer)
    // This functiin reorders point features
    //  map.moveLayer('dvrpc-projected', 'dvrpc-current');
    // handle simple toggles - layers on/off and corresponding legend items on/off
    toggleForm.onchange = () => {
        activeInputs = handleForms('input', inputs, map)
        activeSelects = handleForms('select', selects, map)
        allActiveToggles = [... activeSelects, ... activeInputs]

        handleLegend(allActiveToggles, legendContainer)
    }

    map.addSource('dvrpcPEVBG', {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
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
            'fill-outline-color':'#f2f12d',
            'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            .8,
            0.0
            ]
        }
    });
    var hoveredStateId = null;
   
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', 'dvrpcPEVBG', (e) => {
    //  console.log(e.features[0].properties);
    //   var tileID = e.features[0].properties.GEOID10;
        map.getCanvas().style.cursor = "pointer";
        if (e.features.length > 0) {
        console.log(e.features[0])
        if (hoveredStateId !== null) {
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: true }
        );
        }
    });
        
    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', 'dvrpcPEVBG', () => {
        map.getCanvas().style.cursor = "";
        if (hoveredStateId !== null) {
        map.setFeatureState(
        { source: 'dvrpcPEVBG', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        }
        hoveredStateId = null;
    });

    map.on('click','dvrpcPEVBG', (e) => {
        // mapbox function calling of geojson properties
        document.getElementById("mcdStart").style.display = "none";
        document.getElementById("mcdDetails").style.display = "inline-block";
        var props = e.features[0].properties;
       // var coordinates = marker.features[0].geometry.coordinates;
        // var FID = e.features[0].id;
      //  console.log(FID);
          // $("#chart2013").css("display", "block");
          // $("#data-wrapper").css("display", "block");
          // handleSidebarDisplay()
          handleBlockGroups(props,map)
          // handleHighlight(FID)
      });

    
      
})

// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})


// modal
handleModal(modal, modalToggle, closeModal)
