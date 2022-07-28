import secondaryMapLayers from "./map/secondaryMapLayers.js";

// simple get of active state, no map toggling built in
const extractInput = inputs => {
  let active = {};

  inputs.forEach(input => {
    if(input.checked) {
      active[input.name] = input.value
    }
  })

  console.log('active object ', active)
}

// handles: checkboxes, toggles, radio buttons
const handleFormInputs = (inputs, map) => {
  let active = [];

  inputs.forEach((input) => {
    const layer = input.value;
    const checked = input.checked;
    const visibility = checked ? "visible" : "none";

    if (checked) active.push(layer);

    if (map.getLayer(layer)) {
      map.setLayoutProperty(layer, "visibility", visibility);
    } else {
      // add layer on first pass
      if (checked) {
        const mapLayer = secondaryMapLayers[layer];
           map.addLayer(mapLayer, "road-label");
      }
    }
  });

  return active;
};

// attempt 41: form onchange
  // 1: iterate through #layout_select and hide all
  // 2: iterate through inputs & #type_select to extract params
  // 3: use params to build correct layer id
      // use pevType and chargeType fncs to generate the correct values
  // 5: set layoutvisibility of that layer, done
// 

// attempt 4902: state?
// fuck all the forms, pull active layer from state
// on form toggle, clear existing layer from localStorage.mainLayer
// build new layer as described above
// set visibility and set new localStorage jawn

const handleFormSelect = (selects, map) => {
  let active = [];

  selects.forEach((select) => {
    const options = Array.from(select.children);

    options.forEach((option) => {
      const layer = option.value;
      const selected = option.selected;
      const visibility = selected ? "visible" : "none";

      if (selected) active.push(layer);

      if (map.getLayer(layer)) {
        map.setLayoutProperty(layer, "visibility", visibility);
      } else {
        // add layer on first pass
        if (selected) {
          const mapLayer = secondaryMapLayers[layer];
           map.addLayer(mapLayer, "road-label");
        }
      }
    });
  });

  return active;
};


const extractSelect = id => $(`#${id} option:selected`).val()


// @update: existing combinations of jawns:
// <option value="DVRPC-CurrentPEV-BG" id="topCurrent" class="dvrpc current pev">Current PEVs</option>
//                 <option value="DVRPC-CurrentPEV-Pop" class="dvrpc current pev">Current PEVs per 100 People</option>
//                 <option value="DVRPC-CurrentPEV-HH" class="dvrpc current pev">Current PEVs per Household</option>
//                 <option value="DVRPC-CurrentPEV-SM" class="dvrpc current pev">Current PEVs per Sq. Mi.</option>
//                 <option value="DVRPC-CurrentPEV-Veh" class="dvrpc current pev">Current Percentage of Passengers that are PEVs</option>

//                 <option value="DVRPC-FuturePEV-BG" id="topFuture"class="dvrpc future pev">Future PEVs</option>
//                 <option value="DVRPC-FuturePEV-Pop" class="dvrpc future pev">Future PEVs per 100 People</option>
//                 <option value="DVRPC-FuturePEV-HH" class="dvrpc future pev">Future PEVs per Household</option>
//                 <option value="DVRPC-FuturePEV-SM" class="dvrpc future pev">Future PEVs per Sq. Mi.</option>
//                 <option value="DVRPC-FuturePEV-Veh" class="dvrpc future pev">Future Percentage of Passengers that are PEVs</option>

//                 <option value="DVRPC-FC-KD-SM" id="topFree" class="dvrpc free work">Free Charging - kWh of Demand per Sq. Mi.</option>
//                 <option value="DVRPC-FC-KD-JB" class="dvrpc free work">Free Charging - kWh of Demand per Job</option>
//                 <option value="DVRPC-FC-CE-SM" class="dvrpc free work">Free Charging - Charging Event per Sq. Mi.</option>
//                 <option value="DVRPC-FC-CE-JB" class="dvrpc free work">Free Charging - Charging Event per Job</option>

//                 <option value="DVRPC-PC-KD-SM" id="topPaid" class="dvrpc paid work">Paid Charging - kWh of Demand per Sq. Mi.</option>
//                 <option value="DVRPC-PC-KD-JB" class="dvrpc paid work">Paid Charging - kWh of Demand per Job</option>
//                 <option value="DVRPC-PC-CE-SM" class="dvrpc paid work">Paid Charging - Charging Event per Sq. Mi.</option>
//                 <option value="DVRPC-PC-CE-JB" class="dvrpc paid work">Paid Charging - Charging Event per Job</option>
// @update: wholeslae change to all map/toggle stuff
  // - put geographical btns, category btns and type select under one form
  // listen to form change and extract all active form elements
    // i.e.:
      // get pa or nj or cvrpc from geo btns
      // get pev or charging from type btns
      // get scenario and type from select
  // construct layerID from those 
  // iterate through loop of all main layers
    // visibility on if layer == layer, visisbility off otherwise
// put extra layers (charging locations) in independent form, handle w/existing simple 
// form handler

// helper fnc to make pev and charge queries
// geos: dvrpc, pa, nj
// type: current, future, paid, free
const pevType = (geo, time, showing) => {
  return `${geo}-${time}PEV-${showing}`
}
// type = FC or PC
const chargeType = (geo, cost, showing) => {
  return `${geo}-${cost}-${showing}`
}

// receive obj with active form elements organized by type
const constructQuery = (toggles) => {
  const inputs = toggles.inputs
  const selects = toggles.selects
  // extract btn states

  // extract select states

  // spread over onto objects


  // {
  //   geo: pa // dvrpc // nj,
  //   theme: distribution // workplace,
  //   showing: Current // Future // PC // FC,
  //   type: 
        // for distribution: Veh, SM, HH, Pop, BG.
        // for workplace: KD-SM, KD-JB, CD-SM, CE-JB, KD-SM, KD-JB, CE-SM, CE-JB
  // }
  toggles = {
    geo: 'pa',
    theme: 'workplace',
    showing: 'FC',
    type: 'CE-SM'
  }
  let jawn;

  // extract

  // pick layer from pevType or chargeType fnc
  if(toggles.theme == 'distribution') {
    jawn = pevType(toggles.geo, toggles.showing, toggles.type)
  
  } else if(toggles.theme == 'workplace') {
    jawn = chargeType(toggles.geo, toggles.showing, toggles.type) 
  }

  return jawn
}

const handleForms = (type, toggles, map) => {
  switch (type) {
    case 'select-main':
      return handleFormSelect(toggles, map)
    case 'main':
      // step 1: construct query from active inputs & return select-like objects
        // don't need to be atual selects, just objects with .selected and .value
      constructQuery(toggles, map)

      // step 2: call handleFormSelects (?)
      break      
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
