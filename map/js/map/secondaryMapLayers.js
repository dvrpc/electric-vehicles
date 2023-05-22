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
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        3,
        0.5
      ],
      'circle-color': '#e6afff',
      'circle-radius': {
        base: 9,
        stops: [
          [10, 3],
          [12,4.5],
          [13, 5.5],
          [14, 6],
          [15, 7.5],
        ]
      }
    }
  }
}

export { makeSecondaryMapLayer, secondaryMapLayers }