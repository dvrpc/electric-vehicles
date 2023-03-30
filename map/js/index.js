import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import { handleBlockGroups } from "./click.js";
import { togglerPEV, togglerWP, togglerPA, togglerNJ, togglerDVRPC } from "./toggler.js";
import { extents } from './map/mapUtils.js'

// general elements
const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')

// map elements
const mainForm = document.getElementById('main-form')
const overlayForm = document.getElementById('overlay-form')
const overlayInputs = overlayForm.querySelectorAll('input')
const mapStart = document.getElementById('mapStart')
const mapDetails = document.getElementById('mapDetails')

// toggles
const pevToggle = document.getElementById("PEV")
const wpToggle = document.getElementById("WP")

// @UPDATE: remove
const njToggle = document.getElementById("NJ-toggle")
const paToggle = document.getElementById("PA-toggle")
// @UPDATE: end remove

const dvrpcToggle =document.getElementById("DVRPC-toggle")

// variables
let extentBtn;

// default state
localStorage.setItem('active-main-layer', 'DVRPC-CurrentPEV-Pop')

// @UPDATE: remove active-geo logic
localStorage.setItem('active-geo', 'dvrpc')

localStorage.setItem('hoveredStateId', '')

// @UPDATE: remove
localStorage.setItem('pa-hoveredStateId', '')
localStorage.setItem('nj-hoveredStateId', '')
// @UPDATE: end remove

localStorage.setItem('clickedLayer', '')

// default visibility
$('.charge').hide()
$('.workplace').hide()

// event handlers
pevToggle.onclick = () => togglerPEV(pevToggle, wpToggle)
wpToggle.onclick = () => togglerWP(pevToggle, wpToggle)

const map = makeMap()

map.on('load', () => {   
    // @UPDATE: remove
    njToggle.onclick = () => togglerNJ(map, njToggle, paToggle, dvrpcToggle)
    paToggle.onclick = () => togglerPA(map, njToggle, paToggle, dvrpcToggle)
    // @UPDATE: end remove

    dvrpcToggle.onclick = () => togglerDVRPC(map, njToggle, paToggle, dvrpcToggle)

    handleLegend(['CurrentPEV-Pop'], legendContainer, 'dvrpc')

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    mainForm.onchange = () => {
        // update map & return layer id + geo
        let [genericID, layerGeo] = handleForms('main', null, map)

        // @UPDATE: remove active geo logic
        localStorage.setItem('active-geo', layerGeo)

        // clear any clicked queries if geo changes
        const activeClicked = localStorage.getItem('clickedLayer')
        let part = activeClicked.split('-')[0]
        let activeGeo = part.substring(part.length - 5, 0)
        
        // @UPDATE: remove geo logic
        if(activeGeo && layerGeo != activeGeo){
            mapDetails.style.display = 'none'
            map.setFilter(activeClicked, ['==', ['id'], ''])
            mapStart.setAttribute('open', '')
        }

        // filter muni and county bounds & adjust extent btn
        if(!extentBtn) extentBtn = document.getElementById('extent-btn')

        // @UPDATE: remove layerGeo logic
        switch(layerGeo) {
            case 'pa':
                map.setFilter('municipality-outline', ["==", "STATE", 'PA'])
                map.setFilter('county-outline', ["==", "STATE", 'PA'])
                extentBtn.onclick = () => map.flyTo({ center: extents.pa.center, zoom: extents.pa.zoom });
                break
            case 'nj':
                map.setFilter('municipality-outline', ["==", "STATE", 'NJ'])
                map.setFilter('county-outline', ["==", "STATE", 'NJ'])
                extentBtn.onclick = () => map.flyTo({ center: extents.nj.center, zoom: extents.nj.zoom });
                break
            default:
                map.setFilter('municipality-outline', ["==", "DVRPC", 'Yes'])
                map.setFilter('county-outline', ["==", "DVRPC", 'Yes'])
                extentBtn.onclick = () => map.flyTo({ center: extents.dvrpc.center, zoom: extents.dvrpc.zoom });
        }

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
   
    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    const hoverGeoFill = (e, hoverState, fillLayer) => {
        let hoveredStateId = localStorage.getItem(hoverState)

        map.getCanvas().style.cursor = "pointer";

        if (e.features.length > 0) {
            if (hoveredStateId.length) {
                map.setFeatureState(
                    { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                    { hover: false }
                );
            }

            hoveredStateId = e.features[0].id;

            map.setFeatureState(
                { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                { hover: true }
            );

            localStorage.setItem(hoverState, hoveredStateId)
        }
    }

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    const leaveGeoFill = (hoverState, fillLayer) => {
        let hoveredStateId = localStorage.getItem(hoverState)

        map.getCanvas().style.cursor = "";

        if (hoveredStateId.length) {
            map.setFeatureState(
                { source: 'pev', sourceLayer: fillLayer, id: hoveredStateId },
                { hover: false }
            );
        }

        localStorage.setItem(hoverState, null)
    }

    // zoom to + highlight clicked area
    const clickFill = (e, clickLayer) => {
        const features = e.features[0]
        const props = features.properties;
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
            
        // show/hide clicked fill
        const activeClicked = localStorage.getItem('clickedLayer')
        if(activeClicked.length) map.setFilter(activeClicked, ['==', ['id'], ''])

        map.setFilter(clickLayer, ['==', ['id'], features.id])
        localStorage.setItem('clickedLayer', clickLayer)

        // handle sidebar elements
        mapStart.removeAttribute('open')
        handleBlockGroups(props,map)
        mapDetails.style.display = "inline-block";
    }

    // establish mouse events
    map.on('mousemove', 'dvrpcPEVBG', e => hoverGeoFill(e, 'hoveredStateId', 'dvrpc_pev_bg'))

    // @UPDATE: remove
    map.on('mousemove', 'paPEVBG', e => hoverGeoFill(e, 'pa-hoveredStateId', 'pa_pev_bg'))
    map.on('mousemove', 'njPEVBG', e => hoverGeoFill(e, 'nj-hoveredStateId', 'nj_pev_bg'))
    // @UPDATE: end rmove
        
    map.on('mouseleave', 'dvrpcPEVBG', () => leaveGeoFill('hoveredStateId', 'dvrpc_pev_bg'))

    // @UPDATE: remove
    map.on('mouseleave', 'paPEVBG', () => leaveGeoFill('pa-hoveredStateId', 'pa_pev_bg'))
    map.on('mouseleave', 'njPEVBG', () => leaveGeoFill('nj-hoveredStateId', 'nj_pev_bg'))
    // @UPDATE: end remove

    map.on('click','dvrpcPEVBG', (e) => clickFill(e, 'dvrpcPEVBG-click'));

    // @UPDATE: remove
    map.on('click','paPEVBG', (e) => clickFill(e, 'paPEVBG-click'));
    map.on('click','njPEVBG', (e) => clickFill(e, 'njPEVBG-click'));
    // @UPDATE: end remove
})

// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})


// modal
handleModal(modal, modalToggle, closeModal)
