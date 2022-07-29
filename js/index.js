import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import {handleBlockGroups, handleMCD} from "./click.js";
import { togglerPEV, togglerWP, togglerPA, togglerNJ, togglerDVRPC, filterCurrent } from "./toggler.js";

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const mainForm = document.getElementById('main-form')
const overlayForm = document.getElementById('overlay-form')
const overlayInputs = overlayForm.querySelectorAll('input')
const mapStart = document.getElementById('mapStart')
const mapDetails = document.getElementById('mapDetails')

$('.charge').hide()
$('.workplace').hide()

localStorage.setItem('active-main-layer', 'DVRPC-CurrentPEV-BG')

const map = makeMap()

map.on('load', () => {    
    togglerPEV();
    togglerWP();
    filterCurrent();
    togglerPA(map)
    togglerNJ(map)
    togglerDVRPC(map)

    handleLegend(['DVRPC-CurrentPEV-BG'], legendContainer)

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    mainForm.onchange = () => {
        // update map & return layer id
        let layerLegendID = handleForms('main', null, map)
        
        // clear any clicked queries
        mapDetails.style.display = 'none'
        mapStart.style.display = 'inline-block'

        handleLegend([layerLegendID], legendContainer)
    }

    overlayForm.onchange = () => {
        const activeOverlayInputs = handleForms('input', overlayInputs, map)
        activeOverlayInputs.push(localStorage.getItem('active-main-layer'))
        handleLegend(activeOverlayInputs, legendContainer)
    }

    var hoveredStateId = null;
   
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', 'dvrpcPEVBG', (e) => {
        var tileID = e.features[0].properties.GEOID10;
        map.getCanvas().style.cursor = "pointer";
        if (e.features.length > 0) {
        if (hoveredStateId !== null) {
        map.setFeatureState(
        { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        map.setFeatureState(
            { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
            { hover: false }
        );
        }
        hoveredStateId = e.features[0].id;
        map.setFeatureState(
        { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: true }
        );
        map.setFeatureState(
            { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
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
        { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
        { hover: false }
        );
        map.setFeatureState(
            { source: 'pev', sourceLayer:'dvrpc_pev_bg', id: hoveredStateId },
            { hover: false }
        );
        }
        hoveredStateId = null;
     //   map.setFilter('dvrpcPEVBG-line-RED', ['==', 'GEOID10', 999999]);
    });

    map.on('click','dvrpcPEVBG', (e) => {
        // mapbox function calling of geojson properties
        mapStart.style.display = "none";
        mapDetails.style.display = "inline-block";
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
