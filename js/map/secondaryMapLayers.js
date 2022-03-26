let expression1 = ['interpolate',['linear'],
['get', 'CurPEV'],
10, '#288835',
15,'#6bc878',
22,'#b0e6b8',
32, '#d2f7ed',
50, '#7dc4e3',
99, '#50a7da',
1234,'#00619b'
// 10, '#b2182b',
// 15,'#ef8a62',
// 22,'#fddbc7',
// 32, '#f7f7f7',
// 50, '#d1e5f0',
// 99, '#67a9cf',
// 1234,'#2166ac'
];

let expression2 = ['interpolate',['linear'],
['get', 'FutPEV'],
10, '#288835',
15,'#6bc878',
22,'#b0e6b8',
32, '#d2f7ed',
50, '#7dc4e3',
99, '#50a7da',
1234,'#00619b'
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
  charging: {
    id: "charging",
    type: "circle",
    source: "charging",
    // minzoom: 11,
    layout: {
      visibility: "none",
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
              [{zoom: 8, value: 2}, .5],
              [{zoom: 8, value: 4}, 1],
              [{zoom: 8, value: 8}, 3],
              [{zoom: 8, value: 105}, 6],
              [{zoom: 12, value: 2}, 3],
              [{zoom: 12, value: 4}, 5],
              [{zoom: 12, value: 8}, 8],
              [{zoom: 12, value: 105}, 12],
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
            [{zoom: 8, value: 5}, 1],
            [{zoom: 8, value: 11}, 2],
            [{zoom: 8, value: 23}, 4],
            [{zoom: 8, value: 50}, 7.5],
            [{zoom: 8, value: 1500}, 11],
            [{zoom: 12, value: 5}, 2],
            [{zoom: 12, value: 11}, 4],
            [{zoom: 12, value: 23}, 6.6],
            [{zoom: 12, value: 50}, 9.5],
            [{zoom: 12, value: 1500}, 14],
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
          [10, .8],
          [11, .7],
          [12, .65],
          [13, .5],
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