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

// PA
let expressionPA1 = ['step',
['get', 'FutPEV'],
'#b2182b',
15,'#ef8a62',
22,'#fddbc7',
32, '#f7f7f7',
50, '#d1e5f0',
99, '#67a9cf',
1234,'#2166ac'
];

let CurHH = ['step',
['get', 'CuPEV_HU'],
pev1,
.229, pev2,
.355,pev3,
.548, pev4,
.7783, pev5,
1.16, pev6,
1.89, pev7
];

let CurSM = ['step',
['get', 'CuPEV_SM'],
pev1,
2.98, pev2,
5.25,pev3,
8.01, pev4,
11.9, pev5,
17.65, pev6,
33.71, pev7
];
let CurVeh = ['step',
['get', 'PerCuPEV'],
pev1,
.0016, pev2,
.0024,pev3,
.0032, pev4,
.0044, pev5,
.0065, pev6,
.0103, pev7
];
let FutPev = ['step',
['get', 'FutPEV'],
pev1,
4.49, pev2,
7.87, pev3,
12.87,  pev4,
21.39,  pev5,
35.52,  pev6,
72.51, pev7
];
let FutPop = ['step',
['get', 'FuPEVPop'],
pev1,
.44, pev2,
.72, pev3,
1.13,  pev4,
1.69,  pev5,
2.54,  pev6,
4.75, pev7
];
let FutHH = ['step',
['get', 'FuPEV_HU'],
pev1,
1.25,pev2,
1.94, pev3,
2.94,  pev4,
4.31,  pev5,
6.66,  pev6,
12.27, pev7
];
let FutSM = ['step',
['get', 'FUPEV_SM'],
pev1,
26.97, pev2,
45.94,pev3,
67.38, pev4,
92.56, pev5,
134.82, pev6,
238.44, pev7
];
let FutVeh = ['step',
['get', 'PerFuPEV'],
pev1,
.0111, pev2,
.0149, pev3,
.01983, pev4,
.02648, pev5,
.03766, pev6,
.06804, pev7
];
let FC_KD_SM = ['step',
['get', 'FC_KD_SM'],
wp1,
12.29, wp2,
28.98, wp3,
56.37, wp4,
100.15,  wp5,
164.75,  wp6,
321.26,  wp7
];
let FC_KD_JB = ['step',
['get', 'FC_KD_JB'],
 wpjob1 ,
.054, wpjob2 ,
.074, wpjob3 ,
.0898, wpjob4 ,
.1046,  wpjob5 ,
.1228,  wpjob6 ,
.1517,  wpjob7
];
let FC_CE_SM = ['step',
['get', 'FC_CE_SM'],
wp1,
1.802, wp2,
4.2266, wp3,
8.1766, wp4,
14.1452,  wp5,
23.9576,  wp6,
44.3198,  wp7
];
let FC_CE_JB = ['step',
['get', 'FC_CE_JB'],
wpjob1,
.0083, wpjob2,
.0108, wpjob3,
.0128, wpjob4,
.0145,  wpjob5,
.0169,  wpjob6,
.0209,  wpjob7
];
let PC_KD_SM = ['step',
['get', 'PC_KD_SM'],
wp1,
8.52, wp2,
20.03, wp3,
39.14,  wp4,
69.46,  wp5,
114.29,  wp6,
222.67, wp7
];
let PC_KD_JB = ['step',
['get', 'PC_KD_JB'],
wpjob1,
.0378, wpjob2,
.0512, wpjob3,
.0623,  wpjob4,
.0724,  wpjob5,
.0853,  wpjob6,
.1052, wpjob7
];
let PC_CE_SM = ['step',
['get', 'PC_CE_SM'],
wp1,
1.2, wp2,
2.83, wp3,
5.48,  wp4,
9.5,  wp5,
15.96,  wp6,
29.68, wp7
];
let PC_CE_JB = ['step',
['get', 'PC_CE_JB'],
wpjob1,
.0056, wpjob2,
.0072, wpjob3,
.0085,  wpjob4,
.0097,  wpjob5,
.0113,  wpjob6,
.014,   wpjob7
];


// New Jersey


const secondaryMapLayers = {
  'charging': {
    id: 'charging',
    type: 'circle',
    source: 'charging',
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

// DVRPC
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
'DVRPC-CurrentPEV-SM': {
  'id': 'DVRPC-CurrentPEV-SM',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
    'fill-color': ['step',
      ['get', 'CuPEV_SM'],
      pev1,
      2.98, pev2,
      5.25,pev3,
      8.01, pev4,
      11.9, pev5,
      17.65, pev6,
      33.71, pev7
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
      ]
    }
  }
},
'DVRPC-CurrentPEV-Veh': {
  'id': 'DVRPC-CurrentPEV-Veh',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': CurVeh,
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
  'DVRPC-FuturePEV-BG': {
  'id': 'DVRPC-FuturePEV-BG',
  'type': 'fill',
  'source': 'pev',
  'source-layer': 'dvrpc_pev_bg',
  'layout': {},
  'paint': {
 'fill-color': FutPev,
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
  'DVRPC-FuturePEV-SM': {
    'id': 'DVRPC-FuturePEV-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
    'fill-color': FutSM,
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
  'DVRPC-FuturePEV-Veh': {
    'id': 'DVRPC-FuturePEV-Veh',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
    'fill-color': FutVeh,
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
  // FREE
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
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  'DVRPC-FC-CE-SM': {
    'id': 'DVRPC-FC-CE-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': FC_CE_SM,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  'DVRPC-FC-CE-JB': {
    'id': 'DVRPC-FC-CE-JB',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': FC_CE_JB,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  //Paid
  'DVRPC-PC-KD-SM': {
    'id': 'DVRPC-PC-KD-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': PC_KD_SM,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  'DVRPC-PC-KD-JB': {
    'id': 'DVRPC-PC-KD-JB',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': PC_KD_JB,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  'DVRPC-PC-CE-SM': {
    'id': 'DVRPC-PC-CE-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': PC_CE_SM,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },
  'DVRPC-PC-CE-JB': {
    'id': 'DVRPC-PC-CE-JB',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'dvrpc_pev_bg',
    'layout': {},
    'paint': {
  'fill-color': PC_CE_JB,
  "fill-opacity": {
    base: 9,
    stops: [
      [9, 1],
      [11, .7],
      [12, .65],
      [13, .5],
      [14, .4],
    ],
  },
    }
  },

  // New Jersey
  'NJ-CurrentPEV-BG': {
    'id': 'NJ-CurrentPEV-BG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'paint': {
      'fill-color': ['step',
          ['get', 'CurPEV'],
          pev1,
          0.98, pev2,
          1.64, pev3,
          2.66, pev4,
          4.22, pev5,
          6.47, pev6,
          11.83, pev7
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
  'NJ-CurrentPEV-Pop': {
    'id': 'NJ-CurrentPEV-Pop',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEVPop'],
        pev1,
        0.086, pev2,
        0.138, pev3,
        0.2085, pev4,
        0.303, pev5,
        0.45, pev6,
        0.71, pev7,
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
  },
  'NJ-CurrentPEV-HH': {
    'id': 'NJ-CurrentPEV-HH',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
          ['get', 'CuPEV_HU'],
          pev1,
          0.229, pev2,
          0.355, pev3,
          0.548, pev4,
          0.7783, pev5,
          1.16, pev6,
          1.89, pev7,
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
      }
    }
  },
  'NJ-CurrentPEV-SM': {
    'id': 'NJ-CurrentPEV-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEV_SM'],
        pev1,
        2.98, pev2,
        5.25, pev3,
        8.01, pev4,
        11.9, pev5,
        17.65, pev6,
        33.71, pev7
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
        ]
      }
    }
  },
  'NJ-CurrentPEV-Veh': {
    'id': 'NJ-CurrentPEV-Veh',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'nj_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'PerCuPEV'],
        pev1,
        0.0016, pev2,
        0.0024, pev3,
        0.0032, pev4,
        0.0044, pev5,
        0.006543, pev6,
        0.0103, pev7,
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
        ]
      }
    }
  },


  //PA
  'PA-CurrentPEV-BG': {
    'id': 'PA-CurrentPEV-BG',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
          ['get', 'CurPEV'],
          pev1,
          .98, pev2,
          1.64, pev3,
          2.66, pev4,
          4.22, pev5,
          6.47, pev6,
          11.83,pev7
        ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .9],
          [12, .8],
          [14, .4]
        ]
      }
    }
  },
  'PA-CurrentPEV-Pop': {
    'id': 'PA-CurrentPEV-Pop',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEVPop'],
        pev1,
        0.07, pev2,
        0.1, pev3,
        0.14, pev4,
        0.19, pev5,
        0.28, pev6,
        0.71, pev7
      ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
          [14, .4]
        ]
      }
    }
  },
  'PA-CurrentPEV-HH': {
    'id': 'PA-CurrentPEV-HH',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEV_HU'],
        pev1,
        0.183, pev2,
        0.253, pev3,
        0.347, pev4,
        0.48, pev5,
        0.69, pev6,
        1.15, pev7
      ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
          [14, .4]
        ]
      }
    }
  },
  'PA-CurrentPEV-SM': {
    'id': 'PA-CurrentPEV-SM',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'CuPEV_SM'],
        pev1,
        0.21, pev2,
        1.07, pev3,
        2.91, pev4,
        5.41, pev5,
        9.62, pev6,
        19.36, pev7
      ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
          [14, .4]
        ]
      }
    }
  },
  'PA-CurrentPEV-Veh': {
    'id': 'PA-CurrentPEV-Veh',
    'type': 'fill',
    'source': 'pev',
    'source-layer': 'pa_pev_bg',
    'layout': {},
    'paint': {
      'fill-color': ['step',
        ['get', 'PerCuPEV'],
        pev1,
        0.001, pev2,
        0.0015, pev3,
        0.002, pev4,
        0.0028, pev5,
        0.0038, pev6,
        0.0066, pev7,
      ],
      "fill-opacity": {
        base: 9,
        stops: [
          [9, 1],
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
          [14, .4]
        ]
      }
    }
  },
}

export default secondaryMapLayers


// @update declutter unknown layers
//   'DVRPC-BG': {
//     'id': 'DVRPC-BG',
//     'type': 'fill',
//     'source': 'pev',
//     'source-layer': 'dvrpc_pev_bg',
//     'layout': {},
//     'paint': {
//    'fill-color': '#FFF',
//    'fill-opacity': 0.0,
//     },
// },
// @update what is?
// 'dvrpc-current': {
//     'id': 'dvrpc-current',
//     'type': 'circle',
//     'source': 'pev',
//     'source-layer': 'pev_bg_centroids',
//     'paint': {
//         'circle-radius': {
//           property: 'CurPEV',
//           stops: [
//           [{zoom: 8, value: 1.16}, .5],
//           [{zoom: 8, value: 2.37}, 1],
//           [{zoom: 8, value: 4.49}, 2],
//           [{zoom: 8, value: 8.89}, 3],
//           [{zoom: 8, value: 105}, 5],
//           [{zoom: 12, value: 1.16}, 2],
//           [{zoom: 12, value: 2.37}, 3],
//           [{zoom: 12, value: 4.49}, 4],
//           [{zoom: 12, value: 8.89}, 6],
//           [{zoom: 12, value: 105}, 9],
//           ]
//           },
//           'circle-color': '#EA563D',
//           'circle-opacity':.75
//         },
//         "filter": ["all",
//         ["==","MAPTYPE","DVRPC"],
//         [">=","CurPEV",0.1]
//         ]   
// },

  // 'PA-FuturePEV': {
  //     'id': 'PA-FuturePEV',
  //     'type': 'fill',
  //     'source': 'pev',
  //     'source-layer': 'pa_pev_bg',
  //     'layout': {},
  //     'paint': {
  //       'fill-color': expressionPA1,
  //       "fill-opacity": {
  //         base: 9,
  //         stops: [
  //           [9, 1],
  //           [11, .7],
  //           [12, .65],
  //           [13, .5],
  //           [14, .4],
  //         ],
  //       },
  //     }
  //   },