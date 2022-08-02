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

// DVRPC Layer Specs
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


// Pennsylvannia Layer Specs
let PA_Cur = ['step',
  ['get', 'CurPEV'],
  pev1,
  .98, pev2,
  1.64, pev3,
  2.66, pev4,
  4.22, pev5,
  6.47, pev6,
  11.83,pev7
]
let PA_CurPop = ['step',
  ['get', 'CuPEVPop'],
  pev1,
  0.07, pev2,
  0.1, pev3,
  0.14, pev4,
  0.19, pev5,
  0.28, pev6,
  0.71, pev7
]
let PA_CurHH = ['step',
  ['get', 'CuPEV_HU'],
  pev1,
  0.183, pev2,
  0.253, pev3,
  0.347, pev4,
  0.48, pev5,
  0.69, pev6,
  1.15, pev7
];
let PA_CurSM = ['step',
  ['get', 'CuPEV_SM'],
  pev1,
  0.21, pev2,
  1.07, pev3,
  2.91, pev4,
  5.41, pev5,
  9.62, pev6,
  19.36, pev7
];
let PA_CurVeh = ['step',
  ['get', 'PerCuPEV'],
  pev1,
  0.001, pev2,
  0.0015, pev3,
  0.002, pev4,
  0.0028, pev5,
  0.0038, pev6,
  0.0066, pev7
];
let PA_FutPev = ['step',
  ['get', 'FutPEV'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let PA_FutPop = ['step',
  ['get', 'FuPEVPop'],
  pev1,
  0.73, pev2,
  1.12, pev3,
  1.53, pev4,
  2.06, pev5,
  2.93, pev6,
  5.2, pev7
];
let PA_FutHH = ['step',
  ['get', 'FuPEV_HU'],
  pev1,
  1.87, pev2,
  2.78, pev3,
  3.72, pev4,
  5.02, pev5,
  7.16, pev6,
  12.91, pev7
];
let PA_FutSM = ['step',
  ['get', 'FUPEV_SM'],
  pev1,
  2.63, pev2,
  13.94, pev3,
  37.71, pev4,
  69.56, pev5,
  120.07, pev6,
  231.87, pev7
];
let PA_FutVeh = ['step',
  ['get', 'PerFuPEV'],
  pev1,
  0.0135, pev2,
  0.0177, pev3,
  0.0225, pev4,
  0.0291, pev5,
  0.0409, pev6,
  0.0716, pev7
];
// @update: missing data
let PA_FC_KD_SM = ['step',
  ['get', 'FC_KD_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
// @update: missing data
let PA_FC_KD_JB = ['step',
  ['get', 'FC_KD_JB'],
  wpjob1 ,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
// @update: missing data
let PA_FC_CE_SM = ['step',
  ['get', 'FC_CE_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
// @update: missing data
let PA_FC_CE_JB = ['step',
  ['get', 'FC_CE_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
// @update: missing data
let PA_PC_KD_SM = ['step',
  ['get', 'PC_KD_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
// @update: missing data
let PA_PC_KD_JB = ['step',
  ['get', 'PC_KD_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
// @update: missing data
let PA_PC_CE_SM = ['step',
  ['get', 'PC_CE_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
// @update: missing data
let PA_PC_CE_JB = ['step',
  ['get', 'PC_CE_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];


// New Jersey Layer Specs
let NJ_Cur = ['step',
  ['get', 'CurPEV'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  ,pev7
]
let NJ_CurPop = ['step',
  ['get', 'CuPEVPop'],
  pev1,
  , pev2,
  , pev3,
  ,  pev4,
  ,  pev5,
  ,  pev6,
  , pev7
]
let NJ_CurHH = ['step',
  ['get', 'CuPEV_HU'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_CurSM = ['step',
  ['get', 'CuPEV_SM'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_CurVeh = ['step',
  ['get', 'PerCuPEV'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FutPev = ['step',
  ['get', 'FutPEV'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FutPop = ['step',
  ['get', 'FuPEVPop'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FutHH = ['step',
  ['get', 'FuPEV_HU'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FutSM = ['step',
  ['get', 'FUPEV_SM'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FutVeh = ['step',
  ['get', 'PerFuPEV'],
  pev1,
  , pev2,
  , pev3,
  , pev4,
  , pev5,
  , pev6,
  , pev7
];
let NJ_FC_KD_SM = ['step',
  ['get', 'FC_KD_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
let NJ_FC_KD_JB = ['step',
  ['get', 'FC_KD_JB'],
  wpjob1 ,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
let NJ_FC_CE_SM = ['step',
  ['get', 'FC_CE_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
let NJ_FC_CE_JB = ['step',
  ['get', 'FC_CE_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
let NJ_PC_KD_SM = ['step',
  ['get', 'PC_KD_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
let NJ_PC_KD_JB = ['step',
  ['get', 'PC_KD_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];
let NJ_PC_CE_SM = ['step',
  ['get', 'PC_CE_SM'],
  wp1,
  , wp2,
  , wp3,
  , wp4,
  , wp5,
  , wp6,
  , wp7
];
let NJ_PC_CE_JB = ['step',
  ['get', 'PC_CE_JB'],
  wpjob1,
  , wpjob2,
  , wpjob3,
  , wpjob4,
  , wpjob5,
  , wpjob6,
  , wpjob7
];


// @update make layer def fncs

// make pev layers
const pevStyle = (vals, layer) => {
  let [a, b, c, d, e, f] = vals
  return ['step',
    ['get', layer],
    '#f0f9e8',
    a, '#ccebc5',
    b, '#a8ddb5',
    c, '#7bccc4',
    d, '#4eb3d3',
    e, '#2b8cbe',
    f, '#08589e'
  ]
}

// make wp layers
const wpStyle = (vals, layer) => {

}

// make wpjob layers
const wpjobStyle = (vals, layer) => {

}


// Obj to reference all geographic layer specs
const layerSpecs = {
  'DVRPC-CurrentPEV-Pop': {
    id: 'DVRPC-CurrentPEV-Pop',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([.086,.138,.2085,.303,.45,.71], 'CuPEVPop')
  },
  'DVRPC-CurrentPEV-HH': {
    id: 'DVRPC-CurrentPEV-HH',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([.229,.355,.548,.7783,1.16,1.89], 'CuPEV_HU')
  },
  'DVRPC-CurrentPEV-SM': {
    id: 'DVRPC-CurrentPEV-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([2.98,5.25,8.01,11.9,17.65,33.71], 'CuPEV_SM')
  },
  'DVRPC-CurrentPEV-Veh': {
    id: 'DVRPC-CurrentPEV-Veh',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([.0016,.0024,.0032,.0044,.0065,.0103], 'PerCuPEV')
  },
  'DVRPC-FuturePEV-BG': {
    id: 'DVRPC-FuturePEV-BG',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([4.49,7.87,12.87,21.39,35.52,72.51], 'FutPEV')
  },
  'DVRPC-FuturePEV-Pop': {
    id: 'DVRPC-FuturePEV-Pop',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([0.44,0.72,1.13,1.69,2.54,4.75], 'FuPEVPop')
  },
  'DVRPC-FuturePEV-HH': {
    id: 'DVRPC-FuturePEV-HH',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([1.25,1.94,2.94,4.31,6.66,12.27], 'FuPEV_HU')
  },
  'DVRPC-FuturePEV-SM': {
    id: 'DVRPC-FuturePEV-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([26.97,45.94,67.38,92.56,134.82,238.44], 'FUPEV_SM')
  },
  'DVRPC-FuturePEV-Veh': {
    id: 'DVRPC-FuturePEV-Veh',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: pevStyle([.0111,.0149,.01983,.02648,.03766,.06804], 'PerFuPEV')
  },
  'DVRPC-FC-KD-SM': {
    id: 'DVRPC-FC-KD-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: FC_KD_SM
  },
  'DVRPC-FC-KD-JB': {
    id: 'DVRPC-FC-KD-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: FC_KD_JB
  },
  'DVRPC-FC-CE-SM': {
    id: 'DVRPC-FC-CE-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: FC_CE_SM
  },
  'DVRPC-FC-CE-JB': {
    id: 'DVRPC-FC-CE-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: FC_CE_JB
  },
  'DVRPC-PC-KD-SM': {
    id: 'DVRPC-PC-KD-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: PC_KD_SM
  },
  'DVRPC-PC-KD-JB': {
    id: 'DVRPC-PC-KD-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: PC_KD_JB
  },
  'DVRPC-PC-CE-SM': {
    id: 'DVRPC-PC-CE-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: PC_CE_SM
  },
  'DVRPC-PC-CE-JB': {
    id: 'DVRPC-PC-CE-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: PC_CE_JB
  },

  // Pennsylvannia 
  'PA-CurrentPEV-BG': {
    id: 'PA-CurrentPEV-BG',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_Cur
  },
  'PA-CurrentPEV-Pop': {
    id: 'PA-CurrentPEV-Pop',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_CurPop
  },
  'PA-CurrentPEV-HH': {
    id: 'PA-CurrentPEV-HH',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_CurHH
  },
  'PA-CurrentPEV-SM': {
    id: 'PA-CurrentPEV-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_CurSM
  },
  'PA-CurrentPEV-Veh': {
    id: 'PA-CurrentPEV-Veh',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_CurVeh
  },
  'PA-FuturePEV-BG': {
    id: 'PA-FuturePEV-BG',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FutPev
  },
  'PA-FuturePEV-Pop': {
    id: 'PA-FuturePEV-Pop',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FutPop
  },
  'PA-FuturePEV-HH': {
    id: 'PA-FuturePEV-HH',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FutHH
  },
  'PA-FuturePEV-SM': {
    id: 'PA-FuturePEV-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FutSM
  },
  'PA-FuturePEV-Veh': {
    id: 'PA-FuturePEV-Veh',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FutVeh
  },
  'PA-FC-KD-SM': {
    id: 'PA-FC-KD-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FC_KD_SM
  },
  'PA-FC-KD-JB': {
    id: 'PA-FC-KD-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FC_KD_JB
  },
  'PA-FC-CE-SM': {
    id: 'PA-FC-CE-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FC_CE_SM
  },
  'PA-FC-CE-JB': {
    id: 'PA-FC-CE-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_FC_CE_JB
  },
  'PA-PC-KD-SM': {
    id: 'PA-PC-KD-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_PC_KD_SM
  },
  'PA-PC-KD-JB': {
    id: 'PA-PC-KD-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_PC_KD_JB
  },
  'PA-PC-CE-SM': {
    id: 'PA-PC-CE-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_PC_CE_SM
  },
  'PA-PC-CE-JB': {
    id: 'PA-PC-CE-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: PA_PC_CE_JB
  },

  // New Jersey
  'NJ-CurrentPEV-BG': {
    id: 'NJ-CurrentPEV-BG',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_Cur
  },
  'NJ-CurrentPEV-Pop': {
    id: 'NJ-CurrentPEV-Pop',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_CurPop
  },
  'NJ-CurrentPEV-HH': {
    id: 'NJ-CurrentPEV-HH',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_CurHH
  },
  'NJ-CurrentPEV-SM': {
    id: 'NJ-CurrentPEV-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_CurSM
  },
  'NJ-CurrentPEV-Veh': {
    id: 'NJ-CurrentPEV-Veh',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_CurVeh
  },
  'NJ-FuturePEV-BG': {
    id: 'NJ-FuturePEV-BG',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FutPev
  },
  'NJ-FuturePEV-Pop': {
    id: 'NJ-FuturePEV-Pop',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FutPop
  },
  'NJ-FuturePEV-HH': {
    id: 'NJ-FuturePEV-HH',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FutHH
  },
  'NJ-FuturePEV-SM': {
    id: 'NJ-FuturePEV-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FutSM
  },
  'NJ-FuturePEV-Veh': {
    id: 'NJ-FuturePEV-Veh',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FutVeh
  },
  'NJ-FC-KD-SM': {
    id: 'NJ-FC-KD-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FC_KD_SM
  },
  'NJ-FC-KD-JB': {
    id: 'NJ-FC-KD-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FC_KD_JB
  },
  'NJ-FC-CE-SM': {
    id: 'NJ-FC-CE-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FC_CE_SM
  },
  'NJ-FC-CE-JB': {
    id: 'NJ-FC-CE-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_FC_CE_JB
  },
  'NJ-PC-KD-SM': {
    id: 'NJ-PC-KD-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_PC_KD_SM
  },
  'NJ-PC-KD-JB': {
    id: 'NJ-PC-KD-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_PC_KD_JB
  },
  'NJ-PC-CE-SM': {
    id: 'NJ-PC-CE-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_PC_CE_SM
  },
  'NJ-PC-CE-JB': {
    id: 'NJ-PC-CE-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: NJ_PC_CE_JB
  }
}

// layer generator to reduce hard coding of layers
const makeSecondaryMapLayer = name => {
  const layerInfo = layerSpecs[name]

  return {
      'id': layerInfo.id,
      'type': 'fill',
      'source': 'pev',
      'source-layer': layerInfo.sourceLayer,
      'layout': {},
      'paint': {
        'fill-color': layerInfo.fillColor,
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
  }
}

// for this project, overlay layers are secondaryMapLayers
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
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
        'circle-opacity': 1
    },
    "filter": ["all",
      ["==","MAPTYPE","DVRPC"],
      [">=","FutPEV",0.1]
    ]
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
  }
}

export { makeSecondaryMapLayer, secondaryMapLayers }


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