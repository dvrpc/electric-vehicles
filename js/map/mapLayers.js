const layers = {
  countyOutline: {
    id: "county-outline",
    type: "line",
    source: "census",
    "source-layer": "county",
    paint: {
      "line-width":{
        base: 9,
        stops: [
          [8, 2.5],
          [10, 4],
          [12, 6],
          // [13, 8],
        ],
      },
      "line-color": "#505a5e",
    },
    filter: ["==", "DVRPC", "Yes"],
  },
  muniOutline: {
    id: "municipality-outline",
    type: "line",
    source: "census",
    "source-layer": "municipalities",
    paint: {
      "line-width":{
        base: 9,
        stops: [
          [8, 1],
          [10, 1.5],
          [12, 2.5],
          // [13, 6],
        ],
      },
      // "line-color": "#4a5c64",
      "line-color":   "#fcfcfc",
    },
    filter: ["==", "DVRPC", "Yes"],
  },
  // add default layers here
};

export default layers;
