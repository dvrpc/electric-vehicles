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
    case "select-main":
      handleFormSelect(toggles, map);
      constructQuery()
      break      
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
