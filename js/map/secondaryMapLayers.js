let pev1 = '#f0f9e8';
let pev2 = '#ccebc5';
let pev3 = '#a8ddb5';
let pev4 = '#7bccc4';
let pev5 = '#4eb3d3';
let pev6 = '#2b8cbe';
let pev7 = '#08589e';

let wp1 = '#ffffd4';
let wp2 = '#fed976';
let wp3 = '#feb24c';
let wp4 = '#fd8d3c';
let wp5 = '#fc4e2a';
let wp6 = '#e31a1c';
let wp7 = '#b10026';

let wpjob1 = '#8c510a';
let wpjob2 = '#d8b365';
let wpjob3 = '#f6e8c3';
let wpjob4 = '#f5f5f5';
let wpjob5 = '#c7eae5';
let wpjob6 = '#5ab4ac';
let wpjob7 = '#01665e';

let expression1 = ['interpolate',['linear'],
['get', 'CurPEV'],
  0, pev1,
.98, pev2,
1.64, pev3,
2.66, pev4 ,
4.22, pev5 ,
6.47, pev6 ,
11.83,pev7
];

let expression2 = ['interpolate',['linear'],
['get', 'FutPEV'],
0, pev1,
4.49, pev2,
7.87, pev3,
12.87,  pev4,
21.39,  pev5,
35.52,  pev6,
72.51, pev7
];

let CurPop = ['interpolate',['linear'],
['get', 'CuPEVPop'],
0, pev1,
.086, pev2,
.138, pev3,
.2085,  pev4,
.303,  pev5,
.45,  pev6,
.71, pev7
];

let FutPop = ['interpolate',['linear'],
['get', 'FuPEVPop'],
0, pev1,
.44, pev2,
.72, pev3,
1.13,  pev4,
1.69,  pev5,
2.54,  pev6,
4.75, pev7
];

let CurHH = ['interpolate',['linear'],
['get', 'CuPEV_HU'],
0, pev1,
.229, pev2,
.355,pev3,
.548, pev4,
.7783, pev5,
1.16, pev6,
1.89, pev7
];

let FutHH = ['interpolate',['linear'],
['get', 'FuPEV_HU'],
0, pev1,
1.25,pev2,
1.94, pev3,
2.94,  pev4,
4.31,  pev5,
6.66,  pev6,
12.27, pev7
];

let FC_KD_SM = ['interpolate',['linear'],
['get', 'FC_KD_SM'],
12.29, wp1,
28.98, wp2,
56.37, wp3,
100.15,  wp4,
164.75,  wp5,
321.26,  wp6,
64383, wp7
];

let FC_KD_JB = ['interpolate',['linear'],
['get', 'FC_KD_JB'],
.054, wpjob1,
.074, wpjob2,
.0898, wpjob3,
.1046,  wpjob4,
.1228,  wpjob5,
.1517,  wpjob6,
.7153, wpjob7
];

let expressionPA1 = ['interpolate',['linear'],
['get', 'FutPEV'],
10, '#b2182b',
15,'#ef8a62',
22,'#fddbc7',
32, '#f7f7f7',
50, '#d1e5f0',
99, '#67a9cf',
1234,'#2166ac'
];

const secondaryMapLayers = {
  'charging': {
    id: 'charging',
    type: 'circle',
    source: 'charging',
    // minzoom: 11,
    layout: {
      visibility: 'none',
    },
    paint: {
      "circle-stroke-color": "#3C4C34",
      "circle-stroke-width": 0.5,
      "circle-color": "#c8ffaf",
      "circle-radius": {
        base: 9,
        stops: [
          [10, 3],
          [12,3.5],
          [13, 4.5],
          [14, 5],
          [15, 5.5],
        ],
      },
    },
  },
  'DVRPC-BG': {
    'id': 'DVRPC-BG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
   'fill-color': '#FFF',
   'fill-opacity': 0.0,
    },
},
'dvrpc-current': {
    'id': 'dvrpc-current',
    'type': 'circle',
    'source': 'pev',
    'source-layer': 'pev_bg_centroids',
    'paint': {
        'circle-radius': {
          property: 'CurPEV',
          stops: [
          [{zoom: 8, value: 1.16}, .5],
          [{zoom: 8, value: 2.37}, 1],
          [{zoom: 8, value: 4.49}, 2],
          [{zoom: 8, value: 8.89}, 3],
          [{zoom: 8, value: 105}, 5],
          [{zoom: 12, value: 1.16}, 2],
          [{zoom: 12, value: 2.37}, 3],
          [{zoom: 12, value: 4.49}, 4],
          [{zoom: 12, value: 8.89}, 6],
          [{zoom: 12, value: 105}, 9],
          ]
          },
          'circle-color': '#EA563D',
          'circle-opacity':.75
        },
        "filter": ["all",
        ["==","MAPTYPE","DVRPC"],
        [">=","CurPEV",0.1]
        ]   
},
'dvrpc-projected': {
  'id': 'dvrpc-projected',
  'type': 'circle',
  'source': 'pev',
  'source-layer': 'pev_bg_centroids',
  'paint': {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        property: 'FutPEV',
        stops: [
        [{zoom: 8, value: 42.05}, 1],
        [{zoom: 8, value: 124.15}, 2],
        [{zoom: 8, value: 259.88}, 4],
        [{zoom: 8, value: 509.8}, 7.5],
        [{zoom: 8, value: 1235}, 11],
        [{zoom: 12, value: 42.05}, 2],
        [{zoom: 12, value: 124.15}, 4],
        [{zoom: 12, value: 259.88}, 6.6],
        [{zoom: 12, value: 509.8}, 9.5],
        [{zoom: 12, value: 1235}, 14],
        ]
        },
      'circle-color':'#3182D1',
      'circle-opacity':1
  },
  "filter": ["all",
  ["==","MAPTYPE","DVRPC"],
  [">=","FutPEV",0.1]
  ]  
  },
  'DVRPC-CurrentPEV-BG': {
        'id': 'DVRPC-CurrentPEV-BG',
        'type': 'fill',
        'source': 'pev',
        'source-layer': 'dvrpc_pev_bg',
        'layout': {},
        'paint': {
       'fill-color': expression1,
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
    'DVRPC-FuturePEV-BG': {
      'id': 'DVRPC-FuturePEV-BG',
      'type': 'fill',
      'source': 'pev',
      'source-layer': 'dvrpc_pev_bg',
      'layout': {},
      'paint': {
     'fill-color': expression2,
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
  },
  'DVRPC-CurrentPEV-Pop': {
    'id': 'DVRPC-CurrentPEV-Pop',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
   'fill-color': CurPop,
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
},
  'DVRPC-FuturePEV-Pop': {
    'id': 'DVRPC-FuturePEV-Pop',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
   'fill-color': FutPop,
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
},
'DVRPC-CurrentPEV-HH': {
  'id': 'DVRPC-CurrentPEV-HH',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': CurHH,
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
},
'DVRPC-FuturePEV-HH': {
  'id': 'DVRPC-FuturePEV-HH',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': FutHH,
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
},
'DVRPC-FC-KD-SM': {
  'id': 'DVRPC-FC-KD-SM',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': FC_KD_SM,
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
},
'DVRPC-FC-KD-JB': {
  'id': 'DVRPC-FC-KD-JB',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': FC_KD_JB,
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
},
    'PA-FuturePEV': {
        'id': 'PA-FuturePEV',
        'type': 'fill',
        'source': 'pev',
        'source-layer': 'pa_pev_bg',
        'layout': {},
        'paint': {
          'fill-color': expressionPA1,
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
      },
}

export default secondaryMapLayers