import secondaryMapLayers from "./map/secondaryMapLayers.js";

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

const pevType = (geo, time, showing) => {
  return `${geo}-${time}PEV-${showing}`
}

// type = FC or PC
const chargeType = (geo, cost, showing) => {
return `${geo}-${cost}-${showing}`
}

const constructMainQuery = map => {
  // clear existing layer
  const activeMainLayer = localStorage.getItem('active-main-layer')
  map.setLayoutProperty(activeMainLayer, 'visibility', 'none')

  // extract and build new query
  const geo = $('input[name=geo]:checked', '#main-form').val()
  const theme = $('input[name=theme]:checked', '#main-form').val()
  const type = $('#type_select option:selected').val()
  const layer = $('#layout_select option:selected').val()

  let newMainLayer;

  if(theme == 'workplace') newMainLayer = chargeType(geo, type, layer)
  else newMainLayer = pevType(geo, type, layer)

  // toggle visibility or add layer (first pass only)
  if (map.getLayer(newMainLayer)) {
      map.setLayoutProperty(newMainLayer, "visibility", 'visible');
    } else {
      map.addLayer(secondaryMapLayers[newMainLayer], "road-label");
  }

  // update localStorage
  localStorage.setItem('active-main-layer', newMainLayer)
}

const handleForms = (type, toggles, map) => {
  switch (type) {
    case 'select-main':
      return handleFormSelect(toggles, map)
    case 'main':
      constructMainQuery(map)
      break      
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
