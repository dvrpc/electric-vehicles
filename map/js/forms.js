import {
  makeSecondaryMapLayer,
  secondaryMapLayers,
} from "./map/secondaryMapLayers.js";
import { makePopup } from "./map/popup.js";
import { handleChargingPopup } from "./map/mapUtils.js";

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

      // add layer on first pass
    } else {
      if (checked) {
        // keep old method b/c only overlays hit this fnc
        const mapLayer = secondaryMapLayers[layer];

        if (layer === "charging") {
          const popup = makePopup();
          handleChargingPopup("charging", map, popup);
        }

        map.addLayer(mapLayer, "county-outline");
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
const pevType = (time, showing) => {
  return `DVRPC-${time}PEV-${showing}`;
};
const chargeType = (cost, showing) => {
  return `DVRPC-${cost}-${showing}`;
};

const constructMainQuery = (map) => {
  // clear existing layer
  const activeMainLayer = localStorage.getItem("active-main-layer");
  map.setLayoutProperty(activeMainLayer, "visibility", "none");

  // extract and build new query
  const theme = $("input[name=theme]:checked", "#main-form").val();
  const type = $("#type_select option:selected").val();
  const layer = $("#layout_select option:selected").val();

  let newLayerId;

  if (theme == "workplace") newLayerId = chargeType(type, layer);
  else newLayerId = pevType(type, layer);

  // toggle visibility or add layer (first pass only)
  if (map.getLayer(newLayerId)) {
    map.setLayoutProperty(newLayerId, "visibility", "visible");
  } else {
    const newLayer = makeSecondaryMapLayer(newLayerId);
    map.addLayer(newLayer, "dvrpcPEVBG");
  }

  // update localStorage
  localStorage.setItem("active-main-layer", newLayerId);

  // return generic id to create legend
  let genericID = newLayerId.split("-");
  let layerGeo = genericID.shift().toLowerCase();
  genericID = genericID.join("-");

  return [genericID, layerGeo];
};

const handleForms = (type, toggles, map) => {
  switch (type) {
    case "select":
      return handleFormSelect(toggles, map);
    case "main":
      return constructMainQuery(map);
    case "input":
      return handleFormInputs(toggles, map);
    default:
      return handleFormInputs(toggles, map);
  }
};

export default handleForms;
