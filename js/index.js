import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
import {handleBlockGroups, handleMCD} from "./click.js";
import {
    // togglerDVRPC,
    // togglerPA,
    // togglerNJ,
    togglerPEV,
    togglerWP,
    filterCurrent
  } from "./toggler.js";


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const mainForm = document.getElementById('main-form')
const mainSelects = mainForm.querySelectorAll('#layout_select')
const overlayForm = document.getElementById('overlay-form')
const overlayInputs = overlayForm.querySelectorAll('input')

$('.charge').hide()
$('.workplace').hide()

localStorage.setItem('active-main-layer', 'DVRPC-CurrentPEV-Pop')

// map
const map = makeMap()

const pevType = (geo, time, showing) => {
    return `${geo}-${time}PEV-${showing}`
  }
  // type = FC or PC
  const chargeType = (geo, cost, showing) => {
    return `${geo}-${cost}-${showing}`
  }

map.on('load', () => {
      // wiring for on-click event on the map
    // togglerDVRPC(map);
    // togglerPA(map);
    // togglerNJ(map);
    
    togglerPEV();
    togglerWP();
    filterCurrent();

    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer], 'road-label')

    // set default form state
    // let activeSelects = handleForms('select-main', mainSelects, map)
    // let allActiveToggles = [... activeSelects]
    // handleLegend(allActiveToggles, legendContainer)
    // @update ^ rethink legend

    //  map.moveLayer('dvrpc-projected', 'dvrpc-current');

    // @update new logic
    // @update simpler solution:
        // rather than doing a complex state jawn,
        // consider sticking with only listening to the layout toggles
        // on change. other form actions toggle their value field
        // and the old 
        // I.E.
            // on input change, invoke a function that
            // toggles the value (and content?) of the options
            // call handleForms just on the selects
            // e-z p-z?....
        
    mainForm.onchange = e => {
        // clear existing layer
        const activeMainLayer = localStorage.getItem('active-main-layer')
        map.setLayoutProperty(activeMainLayer, 'visibility', 'none')

        // sample query: DVRPC-CurrentPEV-Pop
        // sample query 2: DVRPC-FC-KD-SM

        // extract and build new query
        const geo = 'DVRPC'
        const theme ='distribution'
        const type = $(`#type_select option:selected`).val() // current, future, free or paid
        const layer = $(`#layout_select option:selected`).val()

        let query;

        if(theme == 'workplace') query = chargeType(geo, type, layer)
        else query = pevType(geo, type, layer)

        console.log('query is ', query)

        // `
        //     <option value="DVRPC-CurrentPEV-Pop" data-type="pev" id="pevTop" class="dvrpc pev">PEVs</option>
        //     <option data-type="pev100" class="dvrpc pev">PEVs per 100 People</option>
        //     <option data-type="pevHouse" class="dvrpc pev">PEVs per Household</option>
        //     <option data-type="pevSqMi" class="dvrpc pev">PEVs per Sq. Mi.</option>
        //     <option data-type="pevPass" class="dvrpc pev">PEV Market Share (%)</option>
        // `

        // handleForms('main', )
        // main handleForms will output the new active layer
        // onchange will iterate over array of all layers?
        // activeInputs = handleForms('input', inputs, map)
        // activeSelects = handleForms('select', selects, map)
        // allActiveToggles = [... activeSelects, ... activeInputs]

        // handleLegend(allActiveToggles, legendContainer)
    }

    // @update: remove active legend, look into fnc update
    overlayForm.onchange = () => {
        let activeOverlayInputs = handleForms('input', overlayInputs, map)
        handleLegend(activeOverlayInputs, legendContainer)
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
