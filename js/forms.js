import { makeSecondaryMapLayer, secondaryMapLayers } from "./map/secondaryMapLayers.js";

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
        // keep old method b/c only overlays hit this fnc
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
          // keep old method b/c only overlays hit this fnc
          const mapLayer = secondaryMapLayers[layer];
          map.addLayer(mapLayer, "road-label");
        }
      }
    });
  });

  return active;
};

// helpers to build layer id query
const pevType = (geo, time, showing) => {
  return `${geo}-${time}PEV-${showing}`
}
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

  let newLayerId;

  if(theme == 'workplace') newLayerId = chargeType(geo, type, layer)
  else newLayerId = pevType(geo, type, layer)

  // toggle visibility or add layer (first pass only)
  if (map.getLayer(newLayerId)) {
      map.setLayoutProperty(newLayerId, "visibility", 'visible');
    } else {
      // create & add layer
      const newLayer = makeSecondaryMapLayer(newLayerId)
      map.addLayer(newLayer, "dvrpcPEVBG-line");
  }

  // update localStorage
  localStorage.setItem('active-main-layer', newLayerId)

  return newLayerId
}

const handleForms = (type, toggles, map) => {
  switch (type) {
    case 'select-main':
      return handleFormSelect(toggles, map)
    case 'main':
      return constructMainQuery(map)
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
