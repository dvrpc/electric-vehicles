let pev1 = '#f0f9e8';
let pev2 = '#ccebc5';
let pev3 = '#a8ddb5';
let pev4 = '#7bccc4';
let pev5 = '#4eb3d3';
let pev6 = '#2b8cbe';
let pev7 = '#08589e';

const layers = {
  countyOutline: {
    id: "county-outline",
    type: "line",
    source: "census",
    "source-layer": "county",
    paint: {
      "line-width": 2.5,
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
          [12, 3],
          [13, 5],
        ],
      },
      "line-color": "#4a5c64",
    },
    filter: ["==", "DVRPC", "Yes"],
  },
  'DVRPC-CurrentPEV-Pop': {
    'id': 'DVRPC-CurrentPEV-Pop',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEVPop'],
        pev1,
        .086, pev2,
        .138, pev3,
        .2085,  pev4,
        .303,  pev5,
        .45,  pev6,
        .71, pev7
      ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
          [14, .4],
        ],
      },
    }
  }
  // add default layers here
};

export default layers;
