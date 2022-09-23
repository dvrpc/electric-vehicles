import { stops, colors } from './mapPaint.js'

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
        'fill-opacity': {
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

// Obj to reference all geographic layer specs
const layerSpecs = {
  'DVRPC-CurrentPEV-HH': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.curHH, 'CuPEV_HU', colors.pev)
  },
  'DVRPC-CurrentPEV-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.curSM, 'CuPEV_SM', colors.pev)
  },
  'DVRPC-CurrentPEV-Veh': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.curVeh, 'PerCuPEV', colors.pev)
  },
  'DVRPC-FuturePEV-Pop': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.futPop, 'FuPEVPop', colors.pev)
  },
  'DVRPC-FuturePEV-HH': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.futHH, 'FuPEV_HU', colors.pev)
  },
  'DVRPC-FuturePEV-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.futSM, 'FUPEV_SM', colors.pev)
  },
  'DVRPC-FuturePEV-Veh': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.futVeh, 'PerFuPEV', colors.pev)
  },
  'DVRPC-FC-KD-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.FC_KD_SM, 'FC_KD_SM', colors.wp)
  },
  'DVRPC-FC-KD-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.FC_KD_JB, 'FC_KD_JB', colors.wpJob)
  },
  'DVRPC-FC-CE-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.FC_CE_SM, 'FC_CE_SM', colors.wp)
  },
  'DVRPC-FC-CE-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.FC_CE_JB, 'FC_CE_JB', colors.wpJob)
  },
  'DVRPC-PC-KD-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.PC_KD_SM, 'PC_KD_SM', colors.wp)
  },
  'DVRPC-PC-KD-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.PC_KD_JB, 'PC_KD_JB', colors.wpJob)
  },
  'DVRPC-PC-CE-SM': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.PC_CE_SM, 'PC_CE_SM', colors.wp)
  },
  'DVRPC-PC-CE-JB': {
    sourceLayer: 'dvrpc_pev_bg',
    fillColor: makeFillColor(stops.dvrpc.PC_CE_JB, 'PC_CE_JB', colors.wpJob)
  },

  // Pennsylvannia 
  'PA-CurrentPEV-Pop': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.curPop, 'CuPEVPop', colors.pev)
  },
  'PA-CurrentPEV-HH': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.curHH, 'CuPEV_HU', colors.pev)
  },
  'PA-CurrentPEV-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.curSM, 'CuPEV_SM', colors.pev)
  },
  'PA-CurrentPEV-Veh': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.curVeh, 'PerCuPEV', colors.pev)
  },
  'PA-FuturePEV-Pop': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.futPop, 'FuPEVPop', colors.pev)
  },
  'PA-FuturePEV-HH': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.futHH, 'FuPEV_HU', colors.pev)
  },
  'PA-FuturePEV-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.futSM, 'FUPEV_SM', colors.pev)
  },
  'PA-FuturePEV-Veh': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.futVeh, 'PerFuPEV', colors.pev)
  },
  'PA-FC-KD-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.FC_KD_SM, 'FC_KD_SM', colors.wp)
  },
  'PA-FC-KD-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.FC_KD_JB, 'FC_KD_JB', colors.wpJob)
  },
  'PA-FC-CE-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.FC_CE_SM, 'FC_CE_SM', colors.wp)
  },
  'PA-FC-CE-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.FC_CE_JB, 'FC_CE_JB', colors.wpJob)
  },
  'PA-PC-KD-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.PC_KD_SM, 'PC_KD_SM', colors.wp)
  },
  'PA-PC-KD-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.PC_KD_JB, 'PC_KD_JB', colors.wpJob)
  },
  'PA-PC-CE-SM': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.PC_CE_SM, 'PC_CE_SM', colors.wp)
  },
  'PA-PC-CE-JB': {
    sourceLayer: 'pa_pev_bg',
    fillColor: makeFillColor(stops.pa.PC_CE_JB, 'PC_CE_JB', colors.wpJob)
  },

  // New Jersey
  'NJ-CurrentPEV-Pop': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.curPop, 'CuPEVPop', colors.pev)
  },
  'NJ-CurrentPEV-HH': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.curHH, 'CuPEV_HU', colors.pev)
  },
  'NJ-CurrentPEV-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.curSM, 'CuPEV_SM', colors.pev)
  },
  'NJ-CurrentPEV-Veh': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.curVeh, 'PerCuPEV', colors.pev)
  },
  'NJ-FuturePEV-Pop': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.futPop, 'FuPEVPop', colors.pev)
  },
  'NJ-FuturePEV-HH': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.futHH, 'FuPEV_HU', colors.pev)
  },
  'NJ-FuturePEV-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.futSM, 'FUPEV_SM', colors.pev)
  },
  'NJ-FuturePEV-Veh': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.futVeh, 'PerFuPEV', colors.pev)
  },
  'NJ-FC-KD-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.FC_KD_SM, 'FC_KD_SM', colors.wp)
  },
  'NJ-FC-KD-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.FC_KD_JB, 'FC_KD_JB', colors.wpJob)
  },
  'NJ-FC-CE-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.FC_CE_SM, 'FC_CE_SM', colors.wp)
  },
  'NJ-FC-CE-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.FC_CE_JB, 'FC_CE_JB', colors.wpJob)
  },
  'NJ-PC-KD-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.PC_KD_SM, 'PC_KD_SM', colors.wp)
  },
  'NJ-PC-KD-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.PC_KD_JB, 'PC_KD_JB', colors.wpJob)
  },
  'NJ-PC-CE-SM': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.PC_CE_SM, 'PC_CE_SM', colors.wp)
  },
  'NJ-PC-CE-JB': {
    sourceLayer: 'nj_pev_bg',
    fillColor: makeFillColor(stops.nj.PC_CE_JB, 'PC_CE_JB', colors.wpJob)
  }
}

// for this project, overlay layers are secondaryMapLayers
const secondaryMapLayers = {
  'charging': {
    id: 'charging',
    type: 'circle',
    source: 'charging',
    paint: {
      'circle-stroke-color': '#3C4C34',
      'circle-stroke-width': 0.5,
      'circle-color': '#c8ffaf',
      'circle-radius': {
        base: 9,
        stops: [
          [10, 3],
          [12,3.5],
          [13, 4.5],
          [14, 5],
          [15, 5.5],
        ]
      }
    }
  }
}

export { makeSecondaryMapLayer, secondaryMapLayers }