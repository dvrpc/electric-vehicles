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
  'DVRPC-CurrentPEV-BG': {
    'id': 'DVRPC-CurrentPEV-BG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
          ['get', 'CurPEV'],
          pev1,
          .98, pev2,
          1.64, pev3,
          2.66, pev4 ,
          4.22, pev5 ,
          6.47, pev6 ,
          11.83,pev7
        ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .9],
          [12, .8],
          [14, .4],
        ],
      },
    }
  },
  dvrpcMCD: {
    'id': 'dvrpcPEVMCD',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_mcd',
    'layout': {}, 
    'paint': {
        'fill-opacity': 0.0
    }
  },
  PevLines: {
    'id': 'dvrpcPEVBG-line',
    'type': 'line',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {}, 
    'paint': {
        "line-width": [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            6,
            1
            ],
        "line-color":[
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            "#FF0000", "#9cafb5"
            ],
        "line-opacity": {
            base: 9,
            stops: [
              [9, .4],
              [10, .5],
              [11, .65],
              [12, .7],
              [13, .8],
              [14, .9],
            ],
         }
      },
    "filter": [">=", "POP", 0.1],
  },
  PevFills: {
    'id': 'dvrpcPEVBG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {}, 
    'paint': {
        'fill-color': '#e2eb32',
        'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        .8,
        0.0
        ]
    },
    "filter": [">=", "POP", 0.1],
  }
};

export default layers;
