import makeMap from "./map/map.js";
import sources from "./map/mapSources.js";
import layers from "./map/mapLayers.js";
import handleModal from "./modal.js";
import handleForms from "./forms.js";
import handleLegend from "./legend.js";
import { handleBlockGroups } from "./click.js";

// general elements
const modal = document.getElementById("modal");
const modalToggle = document.getElementById("modal-toggle");
const closeModal = document.getElementById("close-modal");
const legendContainer = document.getElementById("legend-container");

// map elements
const mainForm = document.getElementById("main-form");
const overlayForm = document.getElementById("overlay-form");
const overlayInputs = overlayForm.querySelectorAll("input");
const mapStart = document.getElementById("mapStart");
const mapDetails = document.getElementById("mapDetails");



// default state
localStorage.setItem("active-main-layer", "DVRPC-CurrentPEV-Pop");

localStorage.setItem("active-geo", "dvrpc");
localStorage.setItem("hoveredStateId", "");
localStorage.setItem("clickedLayer", "");


// default visibility
$(".charge").hide();
$(".workplace").hide();
$("#type_select").hide();



const map = makeMap();

map.on("load", () => {
  handleLegend(["CurrentPEV-Pop"], legendContainer, "dvrpc");

  for (const source in sources) map.addSource(source, sources[source]);
  for (const layer in layers) map.addLayer(layers[layer], "road-label");

  mainForm.onchange = () => {
    // update map & return layer id + geo
    let [genericID, layerGeo] = handleForms("main", null, map);

    // handle possibility of active overlays when toggling main layers
    const activeLayers = handleForms("input", overlayInputs, map);

    activeLayers.push(genericID);
    handleLegend(activeLayers, legendContainer, layerGeo);
  };

  overlayForm.onchange = () => {
    const activeOverlayInputs = handleForms("input", overlayInputs, map);
    const activeGeo = localStorage.getItem("active-geo");
    let activeMainLayer = localStorage.getItem("active-main-layer").split("-");

    activeMainLayer.shift();
    activeMainLayer = activeMainLayer.join("-");
    activeOverlayInputs.push(activeMainLayer);

    handleLegend(activeOverlayInputs, legendContainer, activeGeo);
  };

  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  const hoverGeoFill = (e, hoverState, fillLayer) => {
    let hoveredStateId = localStorage.getItem(hoverState);

    map.getCanvas().style.cursor = "pointer";

    if (e.features.length > 0) {
      if (hoveredStateId.length) {
        map.setFeatureState(
          { source: "pev", sourceLayer: fillLayer, id: hoveredStateId },
          { hover: false }
        );
      }

      hoveredStateId = e.features[0].id;

      map.setFeatureState(
        { source: "pev", sourceLayer: fillLayer, id: hoveredStateId },
        { hover: true }
      );

      localStorage.setItem(hoverState, hoveredStateId);
    }
  };

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  const leaveGeoFill = (hoverState, fillLayer) => {
    let hoveredStateId = localStorage.getItem(hoverState);

    map.getCanvas().style.cursor = "";

    if (hoveredStateId.length) {
      map.setFeatureState(
        { source: "pev", sourceLayer: fillLayer, id: hoveredStateId },
        { hover: false }
      );
    }

    localStorage.setItem(hoverState, null);
  };

  // zoom to + highlight clicked area
  const clickFill = (e, clickLayer) => {
    const features = e.features[0];
    const props = features.properties;
    const geo = features.geometry.coordinates[0];

    const geoMid = Math.floor(geo.length / 2);
    const a = geo[0];
    const b = geo[geoMid];

    map.fitBounds([a, b], {
      padding: { top: 0, bottom: 30, left: 0, right: 0 },
      maxZoom: 10,
    });

    // show/hide clicked fill
    const activeClicked = localStorage.getItem("clickedLayer");
    if (activeClicked.length) map.setFilter(activeClicked, ["==", ["id"], ""]);

    map.setFilter(clickLayer, ["==", ["id"], features.id]);
    localStorage.setItem("clickedLayer", clickLayer);

    // handle sidebar elements
    mapStart.removeAttribute("open");
    handleBlockGroups(props, map);
    mapDetails.style.display = "inline-block";
  };

  // establish mouse events
  map.on("mousemove", "dvrpcPEVBG", (e) =>
    hoverGeoFill(e, "hoveredStateId", "dvrpc_pev_bg")
  );
  map.on("mouseleave", "dvrpcPEVBG", () =>
    leaveGeoFill("hoveredStateId", "dvrpc_pev_bg")
  );
  map.on("click", "dvrpcPEVBG", (e) => clickFill(e, "dvrpcPEVBG-click"));
});

// loading spinner
map.on("idle", () => {
  const spinner = map["_container"].querySelector(".lds-ring");
  spinner.classList.remove("lds-ring-active");
});

// modal
handleModal(modal, modalToggle, closeModal);
