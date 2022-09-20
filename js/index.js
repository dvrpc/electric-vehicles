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

localStorage.setItem('active-main-layer', 'DVRPC-CurrentPEV-Pop')
localStorage.setItem('active-geo', 'dvrpc')
localStorage.setItem('hoveredStateId', null)
localStorage.setItem('pa-hoveredStateId', null)
localStorage.setItem('nj-hoveredStateId', null)

const map = makeMap()

map.on('load', () => {    
    togglerPEV();
    togglerWP();
    filterCurrent();
    togglerPA(map)
    togglerNJ(map)
    togglerDVRPC(map)

    handleLegend(['CurrentPEV-Pop'], legendContainer, 'dvrpc')

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    mainForm.onchange = () => {
        // update map & return layer id + geo
        let [genericID, layerGeo] = handleForms('main', null, map)
        localStorage.setItem('active-geo', layerGeo)

        // clear any clicked queries
        mapDetails.style.display = 'none'

        mapStart.setAttribute('open', '')

        // handle possibility of active overlays when toggling main layers
        const activeLayers = handleForms('input', overlayInputs, map)
        activeLayers.push(genericID)
        handleLegend(activeLayers, legendContainer, layerGeo)
    }

    overlayForm.onchange = () => {
        const activeOverlayInputs = handleForms('input', overlayInputs, map)
        const activeGeo = localStorage.getItem('active-geo')
        let activeMainLayer = localStorage.getItem('active-main-layer').split('-')
        
        activeMainLayer.shift()
        activeMainLayer = activeMainLayer.join('-')
        activeOverlayInputs.push(activeMainLayer)

        handleLegend(activeOverlayInputs, legendContainer, activeGeo)
    }
   
    // @todo: pull hover and click fncs into new mapEvents.js file within /js/map/
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    const hoverGeoFill = (e, hoverState, fillLayer, lineLayer) => {
        let hoveredStateId = localStorage.getItem(hoverState)

        map.getCanvas().style.cursor = "pointer";

        if (e.features.length > 0) {
            if (hoveredStateId !== null) {
                map.setFeatureState(
                    { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                    { hover: false }
                );
                map.setFeatureState(
                    { source: 'pev', sourceLayer: lineLayer, id: hoveredStateId },
                    { hover: false }
                );
            }

            hoveredStateId = e.features[0].id;

            map.setFeatureState(
                { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                { hover: true }
            );
            map.setFeatureState(
                { source: 'pev', sourceLayer: lineLayer, id: hoveredStateId },
                { hover: true}
            );

            localStorage.setItem(hoverState, hoveredStateId)
        }
    }

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    const leaveGeoFill = (hoverState, fillLayer, lineLayer) => {
        let hoveredStateId = localStorage.getItem(hoverState)

        map.getCanvas().style.cursor = "";

        if (hoveredStateId !== null) {
            map.setFeatureState(
                { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                { hover: false }
            );
            map.setFeatureState(
                { source: 'pev', sourceLayer: lineLayer, id: hoveredStateId },
                { hover: false }
            );
        }

        localStorage.setItem(hoverState, null)
    }

    // establish mouse events
    map.on('mousemove', 'dvrpcPEVBG', e => hoverGeoFill(e, 'hoveredStateId', 'dvrpc_pev_bg', 'dvrpcPEVBG-line'))
    map.on('mousemove', 'paPEVBG', e => hoverGeoFill(e, 'pa-hoveredStateId', 'pa_pev_bg', 'paPEVBG-line'))
    map.on('mousemove', 'njPEVBG', e => hoverGeoFill(e, 'nj-hoveredStateId', 'nj_pev_bg', 'njPEVBG-line'))
        
    map.on('mouseleave', 'dvrpcPEVBG', () => leaveGeoFill('hoveredStateId', 'dvrpc_pev_bg', 'dvrpcPEVBG-line'))
    map.on('mouseleave', 'paPEVBG', () => leaveGeoFill('pa-hoveredStateId', 'pa_pev_bg', 'paPEVBG-line'))
    map.on('mouseleave', 'njPEVBG', () => leaveGeoFill('nj-hoveredStateId', 'nj_pev_bg', 'njPEVBG-line'))

    // @todo: fitBounds after click. consider highlight too
    map.on('click','dvrpcPEVBG', (e) => {
        const features = e.features[0]
        var props = features.properties;
        const geo = features.geometry.coordinates[0]
        const geoMid = Math.floor(geo.length / 2)
        const a = geo[0]
        const b = geo[geoMid]

        map.fitBounds([a, b], 
            {
                padding: {top: 0, bottom: 30, left: 0, right: 0},
                maxZoom: 10
            }
        )

        mapStart.removeAttribute('open')
        handleBlockGroups(props,map)
        mapDetails.style.display = "inline-block";
    });

    map.on('click','paPEVBG', (e) => {
        var props = e.features[0].properties;
        mapStart.removeAttribute('open')
        handleBlockGroups(props,map)
        mapDetails.style.display = "inline-block";
    });

    map.on('click','njPEVBG', (e) => {
        var props = e.features[0].properties;
        mapStart.removeAttribute('open')
        handleBlockGroups(props,map)
        mapDetails.style.display = "inline-block";
    });

    // @TODO shelf until MCD's get incorporated
    // map.on('click','dvrpcPEVMCD', (e) => {
    //     var props = e.features[0].properties;
    //     handleMCD(props)
    // });
})

// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})


// modal
handleModal(modal, modalToggle, closeModal)
