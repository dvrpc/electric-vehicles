mapboxgl.accessToken =
"pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6Ii00ZklVS28ifQ.Ht4KwAM3ZUjo1dT2Erskgg";
const initMap = () => {
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/crvanpollard/ck5fpyqti0v971itf7edp2eyd",
    center: [-75.2273, 40.071],
    bounds: [
      [-76.09405517578125, 39.49211914385648],
      [-74.32525634765625, 40.614734298694216],
    ],
    minZoom: 5,
    maxZoom: 17
  });
};

const makeRegionalExtentEls = (map) => {
  let zoom = window.innerWidth <= 420 ? 7.3 : 8.42;

  const dvrpcExtent = {
    center: [-75.2273, 40.071],
    zoom: zoom,
    pitch: 0,
    bearing: 0,
  };

  // create custom button elements
  const button = document.createElement("button");
  const icon = document.createElement("img");

  button.type = "button";
  button.title = "Zoom to regional extent";

  button.id = 'extent-btn'
  icon.id = "regional-extent-img";
  icon.alt = "DVRPC Alternative Logo";
  icon.src = "https://www.dvrpc.org/img/banner/new/bug-favicon.png";

  button.classList.add("mapboxgl-ctrl-icon");
  button.classList.add("mapboxgl-ctrl-dvrpc");

  button.setAttribute("aria-label", "Default DVRPC Extent");

  button.onclick = () =>
    map.flyTo({ center: dvrpcExtent.center, zoom: dvrpcExtent.zoom });

  button.appendChild(icon);

  return button;
};

const makeControls = (map) => {
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: "Zoom to location",
    bbox: [
      -76.09405517578125, 39.49211914385648, -74.32525634765625,
      40.614734298694216,
    ],
    marker: false,
  });

  const navigationControl = new mapboxgl.NavigationControl();
  const extentControl = makeRegionalExtentEls(map);

  // plug into mapbox fncs
  map.addControl(geocoder, "top-right");

  navigationControl._extent = extentControl;
  navigationControl._container.appendChild(extentControl);

  return navigationControl;
};

const makeMap = () => {
  const map = initMap();
  const control = makeControls(map);

  map.addControl(control);

  return map;
};

export default makeMap;
