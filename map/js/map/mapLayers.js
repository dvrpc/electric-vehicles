let pev1 = '#f0f9e8';
let pev2 = '#ccebc5';
let pev3 = '#a8ddb5';
let pev4 = '#7bccc4';
let pev5 = '#4eb3d3';
let pev6 = '#2b8cbe';
let pev7 = '#08589e';

const layers = {
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
          .2085, pev4 ,
          .303, pev5 ,
          .45, pev6 ,
          .71,pev7
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
        ],
        'fill-outline-color':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#FF0000',
          '#000000'
        ]
    },
    "filter": [">=", "POP", 0.1],
  },
  PevClick: {
    'id': 'dvrpcPEVBG-click',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {}, 
    'paint': {
        'fill-color': '#e2eb32',
        'fill-outline-color': '#FF0000'
    },
    "filter": ["==", "geoid10", ''],
  },
  // @UPDATE: remove
  PAPevFills: {
    'id': 'paPEVBG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
        'fill-color': '#e2eb32',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          .8,
          0.0
        ],
        'fill-outline-color':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#FF0000',
          '#000000'
        ]
    },
    "filter": [">=", "POP", 0.1],
  },
  // @UPDATE: remove
  PAPevClick: {
    'id': 'paPEVBG-click',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {}, 
    'paint': {
        'fill-color': '#e2eb32',
        'fill-outline-color': '#FF0000'
    },
    "filter": ["==", "geoid10", ''],
  },
  // @UPDATE: remove
  NJPevFills: {
    'id': 'njPEVBG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {
      'visibility': 'none'
    }, 
    'paint': {
        'fill-color': '#e2eb32',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          .8,
          0.0
        ],
        'fill-outline-color':[
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          '#FF0000',
          '#000000'
        ]
    },
    "filter": [">=", "POP", 0.1],
  },
  // @UPDATE: remove
  NJPevClick: {
    'id': 'njPEVBG-click',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {}, 
    'paint': {
        'fill-color': '#e2eb32',
        'fill-outline-color': '#FF0000'
    },
    "filter": ["==", "geoid10", ''],
  },
  countyOutline: {
    id: "county-outline",
    type: "line",
    source: "census",
    "source-layer": "county",
    paint: {
      "line-width": 2.5,
      "line-color": "#505a5e",
    },
    "filter": ["==", "DVRPC", 'Yes']
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
    "filter": ["==", "DVRPC", 'Yes']
  }
};

export default layers;
