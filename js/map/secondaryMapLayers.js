import { stops, colors } from './mapPaint.js'

// might just replace this w/old objs?? ugh
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

// layer generator to reduce hard coding of layers
const makeSecondaryMapLayer = id => {
  const layerInfo = layerSpecs[id]

  return {
      'id': id,
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

// @update: implement consistent scales.
// each set of layer type (PEV current, PEV future, workplace free and workplace paid)
// should have a single set of steps defined. Re-incorporate objs from old branch and
// refactor the fillColor param to reference those. Do the same for the layerConfig fncs. 

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

// Obj to reference all geographic layer specs
const layerSpecs = {
  'DVRPC-CurrentPEV-Pop': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.curPop, 'CuPEVPop', colors.pev)
  },
  'DVRPC-CurrentPEV-HH': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.229,.355,.548,.7783,1.16,1.89], 'CuPEV_HU', pevColors)
  },
  'DVRPC-CurrentPEV-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([2.98,5.25,8.01,11.9,17.65,33.71], 'CuPEV_SM', pevColors)
  },
  'DVRPC-CurrentPEV-Veh': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.0016,.0024,.0032,.0044,.0065,.0103], 'PerCuPEV', pevColors)
  },
  'DVRPC-FuturePEV-BG': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([4.49,7.87,12.87,21.39,35.52,72.51], 'FutPEV', pevColors)
  },
  'DVRPC-FuturePEV-Pop': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([0.44,0.72,1.13,1.69,2.54,4.75], 'FuPEVPop', pevColors)
  },
  'DVRPC-FuturePEV-HH': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([1.25,1.94,2.94,4.31,6.66,12.27], 'FuPEV_HU', pevColors)
  },
  'DVRPC-FuturePEV-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([26.97,45.94,67.38,92.56,134.82,238.44], 'FUPEV_SM', pevColors)
  },
  'DVRPC-FuturePEV-Veh': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.0111,.0149,.01983,.02648,.03766,.06804], 'PerFuPEV', pevColors)
  },
  'DVRPC-FC-KD-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([12.29,28.98,56.37,100.15,164.75,321.26], 'FC_KD_SM', wpColors)
  },
  'DVRPC-FC-KD-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.054,.074,.0898,.1046,.1228,.1517], 'FC_KD_JB', wpjobColors)
  },
  'DVRPC-FC-CE-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([1.802,4.2266,8.1766,14.1452,23.9576,44.3198], 'FC_CE_SM', wpColors)
  },
  'DVRPC-FC-CE-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.0083,.0108,.0128,.0145,.0169,.0209], 'FC_CE_JB', wpjobColors)
  },
  'DVRPC-PC-KD-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([8.52,20.03,39.14,69.46,114.29,222.67], 'PC_KD_SM', wpColors)
  },
  'DVRPC-PC-KD-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.0378,.0512,.0623,.0724,.0853,.1052], 'PC_KD_JB', wpjobColors)
  },
  'DVRPC-PC-CE-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([1.2,2.83,5.48,9.5,15.96,29.68], 'PC_CE_SM', wpColors)
  },
  'DVRPC-PC-CE-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor([.0056,.0072,.0085,.0097,.0113,.014], 'PC_CE_JB', wpjobColors)
  },

  // Pennsylvannia 
  'PA-CurrentPEV-BG': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.98,1.64,2.66,4.22,6.47,11.83], 'CurPEV', pevColors)
  },
  'PA-CurrentPEV-Pop': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.curPop, 'CuPEVPop', colors.pev)
  },
  'PA-CurrentPEV-HH': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.183,0.253,0.347,0.48,0.69,1.15], 'CuPEV_HU', pevColors)
  },
  'PA-CurrentPEV-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.21,1.07,2.91,5.41,9.62,19.36], 'CuPEV_SM', pevColors)
  },
  'PA-CurrentPEV-Veh': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.001,0.0015,0.002,0.0028,0.0038,0.0066], 'PerCuPEV', pevColors)
  },
  // @update missing data
  'PA-FuturePEV-BG': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'FutPEV', pevColors)
  },
  'PA-FuturePEV-Pop': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.73,1.12,1.53,2.06,2.93,5.2], 'FuPEVPop', pevColors)
  },
  'PA-FuturePEV-HH': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([1.87,2.78,3.72,5.02,7.16,12.91], 'FuPEV_HU', pevColors)
  },
  'PA-FuturePEV-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([2.63,13.94,37.71,69.56,120.07,231.87], 'FUPEV_SM', pevColors)
  },
  'PA-FuturePEV-Veh': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([0.0135,0.0177,0.0225,0.0291,0.0409,0.0716], 'PerFuPEV', pevColors)
  },
  'PA-FC-KD-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'FC_KD_SM', wpColors)
  },
  'PA-FC-KD-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'FC_KD_JB', wpjobColors)
  },
  'PA-FC-CE-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'FC_CE_SM', wpColors)
  },
  'PA-FC-CE-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'FC_CE_JB', wpjobColors)
  },
  'PA-PC-KD-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'PC_KD_SM', wpColors)
  },
  'PA-PC-KD-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'PC_KD_JB', wpjobColors)
  },
  'PA-PC-CE-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'PC_CE_SM', wpColors)
  },
  'PA-PC-CE-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor([], 'PC_CE_JB', wpjobColors)
  },

  // New Jersey
  'NJ-CurrentPEV-BG': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'CurPEV', pevColors)
  },
  'NJ-CurrentPEV-Pop': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.curPop, 'CuPEVPop', colors.pev)
  },
  'NJ-CurrentPEV-HH': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'CuPEV_HU', pevColors)
  },
  'NJ-CurrentPEV-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'CuPEV_SM', pevColors)
  },
  'NJ-CurrentPEV-Veh': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'PerCuPEV', pevColors)
  },
  'NJ-FuturePEV-BG': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'FutPEV', pevColors)
  },
  'NJ-FuturePEV-Pop': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'FuPEVPop', pevColors)
  },
  'NJ-FuturePEV-HH': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'FuPEV_HU', pevColors)
  },
  'NJ-FuturePEV-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'FUPEV_SM', pevColors)
  },
  'NJ-FuturePEV-Veh': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([], 'PerFuPEV', pevColors)
  },
  'NJ-FC-KD-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([12.29,28.98,56.37,100.15,164.75,321.26], 'FC_KD_SM', wpColors)
  },
  'NJ-FC-KD-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([0.0546,0.074,0.0898,0.1046,0.1228,0.1517], 'FC_KD_JB', wpjobColors)
  },
  'NJ-FC-CE-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([1.802,4.2266,8.1766,14.1452,23.9576,44.3198], 'FC_CE_SM', wpColors)
  },
  'NJ-FC-CE-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([0.0083,0.0108,0.0128,0.0145,0.0169,0.0209], 'FC_CE_JB', wpjobColors)
  },
  'NJ-PC-KD-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([8.52,20.03,39.14,69.46,114.29,222.67], 'PC_KD_SM', wpColors)
  },
  'NJ-PC-KD-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([0.0378,0.0512,0.0623,0.0724,0.0853,0.1052], 'PC_KD_JB', wpjobColors)
  },
  'NJ-PC-CE-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([1.2,2.83,5.48,9.5,15.96,29.68], 'PC_CE_SM', wpColors)
  },
  'NJ-PC-CE-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor([0.0056,0.0072,0.0085,0.0097,0.0113,0.014], 'PC_CE_JB', wpjobColors)
  }
}

// for this project, overlay layers are secondaryMapLayers
const secondaryMapLayers = {
  'charging': {
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