import secondaryMapLayers from "./map/secondaryMapLayers.js";

// handles: checkboxes, toggles, radio buttons
const handleFormInputs = (inputs, map) => {
  let active = [];
  console.log(inputs)

  inputs.forEach((input) => {
    const layer = input.value;
    const checked = input.checked;
    const visibility = checked ? "visible" : "none";

    if (checked) active.push(layer);

    if (map.getLayer(layer)) {
      console.log('map layer ', layer)
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

// handles: select
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
const constructQuery = toggles => {
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
  console.log('for mtype ', type)
  switch (type) {
    case "main":
      constructQuery()
      break      
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
