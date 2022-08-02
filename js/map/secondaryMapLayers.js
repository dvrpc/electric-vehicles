// @update for change to 1 generic fillColor fnc
const pevColors = [
  '#f0f9e8',
  '#ccebc5',
  '#a8ddb5',
  '#7bccc4',
  '#4eb3d3',
  '#2b8cbe',
  '#08589e'
]
const wpColors = [
  '#ffffd4',
  '#fed976',
  '#feb24c',
  '#fd8d3c',
  '#fc4e2a',
  '#e31a1c',
  '#b10026'
]
const wpjobColors = [
  '#8c510a',
  '#d8b365',
  '#f6e8c3',
  '#f5f5f5',
  '#c7eae5',
  '#5ab4ac',
  '#01665e'
]


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
  let [a, b, c, d, e, f] = vals
  return ['step',
    ['get', layer],
    '#ffffd4',
    a, '#fed976',
    b, '#feb24c',
    c, '#fd8d3c',
    d, '#fc4e2a',
    e, '#e31a1c',
    f, '#b10026'
  ]
}

// make wpjob layers
const wpjobStyle = (vals, layer) => {
  let [a, b, c, d, e, f] = vals
  return ['step',
    ['get', layer],
    '#8c510a',
    a, '#d8b365',
    b, '#f6e8c3',
    c, '#f5f5f5',
    d, '#c7eae5',
    e, '#5ab4ac',
    f, '#01665e'
  ]
}

// @update: can abstract ^ to this:
const makeFillColor = (vals, layer, colors) => {
  const [a, b, c, d, e, f] = vals
  const [g, h, i, j, k, l, m] = colors

  return ['step',
    ['get', layer],
    g,
    a, h,
    b, i,
    c, j,
    d, k,
    e, l,
    f, m
  ]  
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
    fillColor: wpStyle([12.29,28.98,56.37,100.15,164.75,321.26], 'FC_KD_SM')
  },
  'DVRPC-FC-KD-JB': {
    id: 'DVRPC-FC-KD-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpjobStyle([.054,.074,.0898,.1046,.1228,.1517], 'FC_KD_JB')
  },
  'DVRPC-FC-CE-SM': {
    id: 'DVRPC-FC-CE-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpStyle([1.802,4.2266,8.1766,14.1452,23.9576,44.3198], 'FC_CE_SM')
  },
  'DVRPC-FC-CE-JB': {
    id: 'DVRPC-FC-CE-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpjobStyle([.0083,.0108,.0128,.0145,.0169,.0209], 'FC_CE_JB')
  },
  'DVRPC-PC-KD-SM': {
    id: 'DVRPC-PC-KD-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpStyle([8.52,20.03,39.14,69.46,114.29,222.67], 'PC_KD_SM')
  },
  'DVRPC-PC-KD-JB': {
    id: 'DVRPC-PC-KD-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpjobStyle([.0378,.0512,.0623,.0724,.0853,.1052], 'PC_KD_JB')
  },
  'DVRPC-PC-CE-SM': {
    id: 'DVRPC-PC-CE-SM',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpStyle([1.2,2.83,5.48,9.5,15.96,29.68], 'PC_CE_SM')
  },
  'DVRPC-PC-CE-JB': {
    id: 'DVRPC-PC-CE-JB',
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: wpjobStyle([.0056,.0072,.0085,.0097,.0113,.014], 'PC_CE_JB')
  },

  // Pennsylvannia 
  'PA-CurrentPEV-BG': {
    id: 'PA-CurrentPEV-BG',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.98,1.64,2.66,4.22,6.47,11.83], 'CurPEV')
  },
  'PA-CurrentPEV-Pop': {
    id: 'PA-CurrentPEV-Pop',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.07,0.1,0.14,0.19,0.28,0.71], 'CuPEVPop')
  },
  'PA-CurrentPEV-HH': {
    id: 'PA-CurrentPEV-HH',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.183,0.253,0.347,0.48,0.69,1.15], 'CuPEV_HU')
  },
  'PA-CurrentPEV-SM': {
    id: 'PA-CurrentPEV-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.21,1.07,2.91,5.41,9.62,19.36], 'CuPEV_SM')
  },
  'PA-CurrentPEV-Veh': {
    id: 'PA-CurrentPEV-Veh',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.001,0.0015,0.002,0.0028,0.0038,0.0066], 'PerCuPEV')
  },
  // @update missing data
  'PA-FuturePEV-BG': {
    id: 'PA-FuturePEV-BG',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([], 'FutPEV')
  },
  'PA-FuturePEV-Pop': {
    id: 'PA-FuturePEV-Pop',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.73,1.12,1.53,2.06,2.93,5.2], 'FuPEVPop')
  },
  'PA-FuturePEV-HH': {
    id: 'PA-FuturePEV-HH',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([1.87,2.78,3.72,5.02,7.16,12.91], 'FuPEV_HU')
  },
  'PA-FuturePEV-SM': {
    id: 'PA-FuturePEV-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([2.63,13.94,37.71,69.56,120.07,231.87], 'FUPEV_SM')
  },
  'PA-FuturePEV-Veh': {
    id: 'PA-FuturePEV-Veh',
    sourceLayer: 'pa_pev_bg',
    fillColor: pevStyle([0.0135,0.0177,0.0225,0.0291,0.0409,0.0716], 'PerFuPEV')
  },
  'PA-FC-KD-SM': {
    id: 'PA-FC-KD-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpStyle([], 'FC_KD_SM')
  },
  'PA-FC-KD-JB': {
    id: 'PA-FC-KD-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpjobStyle([], 'FC_KD_JB')
  },
  'PA-FC-CE-SM': {
    id: 'PA-FC-CE-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpStyle([], 'FC_CE_SM')
  },
  'PA-FC-CE-JB': {
    id: 'PA-FC-CE-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpjobStyle([], 'FC_CE_JB')
  },
  'PA-PC-KD-SM': {
    id: 'PA-PC-KD-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpStyle([], 'PC_KD_SM')
  },
  'PA-PC-KD-JB': {
    id: 'PA-PC-KD-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpjobStyle([], 'PC_KD_JB')
  },
  'PA-PC-CE-SM': {
    id: 'PA-PC-CE-SM',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpStyle([], 'PC_CE_SM')
  },
  'PA-PC-CE-JB': {
    id: 'PA-PC-CE-JB',
    sourceLayer: 'pa_pev_bg',
    fillColor: wpjobStyle([], 'PC_CE_JB')
  },

  // New Jersey
  'NJ-CurrentPEV-BG': {
    id: 'NJ-CurrentPEV-BG',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'CurPEV')
  },
  'NJ-CurrentPEV-Pop': {
    id: 'NJ-CurrentPEV-Pop',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'CuPEVPop')
  },
  'NJ-CurrentPEV-HH': {
    id: 'NJ-CurrentPEV-HH',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'CuPEV_HU')
  },
  'NJ-CurrentPEV-SM': {
    id: 'NJ-CurrentPEV-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'CuPEV_SM')
  },
  'NJ-CurrentPEV-Veh': {
    id: 'NJ-CurrentPEV-Veh',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'PerCuPEV')
  },
  'NJ-FuturePEV-BG': {
    id: 'NJ-FuturePEV-BG',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'FutPEV')
  },
  'NJ-FuturePEV-Pop': {
    id: 'NJ-FuturePEV-Pop',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'FuPEVPop')
  },
  'NJ-FuturePEV-HH': {
    id: 'NJ-FuturePEV-HH',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'FuPEV_HU')
  },
  'NJ-FuturePEV-SM': {
    id: 'NJ-FuturePEV-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'FUPEV_SM')
  },
  'NJ-FuturePEV-Veh': {
    id: 'NJ-FuturePEV-Veh',
    sourceLayer: 'nj_pev_bg',
    fillColor: pevStyle([], 'PerFuPEV')
  },
  'NJ-FC-KD-SM': {
    id: 'NJ-FC-KD-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpStyle([12.29,28.98,56.37,100.15,164.75,321.26], 'FC_KD_SM')
  },
  'NJ-FC-KD-JB': {
    id: 'NJ-FC-KD-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpjobStyle([0.0546,0.074,0.0898,0.1046,0.1228,0.1517], 'FC_KD_JB')
  },
  'NJ-FC-CE-SM': {
    id: 'NJ-FC-CE-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpStyle([1.802,4.2266,8.1766,14.1452,23.9576,44.3198], 'FC_CE_SM')
  },
  'NJ-FC-CE-JB': {
    id: 'NJ-FC-CE-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpjobStyle([0.0083,0.0108,0.0128,0.0145,0.0169,0.0209], 'FC_CE_JB')
  },
  'NJ-PC-KD-SM': {
    id: 'NJ-PC-KD-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpStyle([8.52,20.03,39.14,69.46,114.29,222.67], 'PC_KD_SM')
  },
  'NJ-PC-KD-JB': {
    id: 'NJ-PC-KD-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpjobStyle([0.0378,0.0512,0.0623,0.0724,0.0853,0.1052], 'PC_KD_JB')
  },
  'NJ-PC-CE-SM': {
    id: 'NJ-PC-CE-SM',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpStyle([1.2,2.83,5.48,9.5,15.96,29.68], 'PC_CE_SM')
  },
  'NJ-PC-CE-JB': {
    id: 'NJ-PC-CE-JB',
    sourceLayer: 'nj_pev_bg',
    fillColor: wpjobStyle([0.0056,0.0072,0.0085,0.0097,0.0113,0.014], 'PC_CE_JB')
  }
}

// layer generator to reduce hard coding of layers
const makeSecondaryMapLayer = name => {
  const layerInfo = layerSpecs[name]

  // @update: if breaking up into one obj per geo
  // switch(name.split(['-'][0])) {
  //   case 'NJ':
  //     console.log('nj jawn')
  //     // layerInfo = njSpecs[name]
  //     break
  //   case 'PA':
  //     console.log('pa jawn')
  //     // layerInfo = paSpecs[name]
  //     break
  //   default:
  //     console.log('dvrpc jawn')
  //     // layerInfo = dvrpcSpecs[name]
  // }

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