let expression1 = ["match", ["get", "GEOID10"]]
dvrpcPEV.forEach(function(row) {
    let data = row["CurPEV"],
    color
  if (data < 10) color = '#b2182b'
  else if (data >= 10 && data < 15) color = '#ef8a62'
  else if (data >= 15 && data < 22) color = '#fddbc7'
  else if (data >= 22 && data < 32) color = '#f7f7f7'
  else if (data >= 32 && data < 50) color ='#d1e5f0'
  else if (data >= 50 && data < 99) color ='#67a9cf'
  else if (data >= 99 && data < 1234) color ='#2166ac'
  else { color = '#b2182b'; }
  expression1.push(row['GEOID10'].toString(), color);
});
// Last value is the default, used where there is no data
expression1.push("rgba(0,0,0,0)");

// put not-default layers here
 // add map events here (click, mousemove, etc)
 let expression2 = ["match", ["get", "GEOID10"]]
 pevPA.forEach(function(row) {
     let data = row["FutPEV"],
     color
     if (data < 10) color = '#b2182b'
     else if (data >= 10 && data < 15) color = '#ef8a62'
     else if (data >= 15 && data < 22) color = '#fddbc7'
     else if (data >= 22 && data < 32) color = '#f7f7f7'
     else if (data >= 32 && data < 50) color ='#d1e5f0'
     else if (data >= 50 && data < 99) color ='#67a9cf'
     else if (data >= 99 && data < 1234) color ='#2166ac'
     else { color = '#b2182b'; }
   expression2.push(row['GEOID10'].toString(), color);
 });
// Last value is the default, used where there is no data
 expression2.push("rgba(0,0,0,0)");
// map.setPaintProperty('blocks-fill', 'fill-color', expression2)



const secondaryMapLayers = {
    'truck-v3': {
        'id': 'truck-v3',
        'type': 'circle',
        'source': 'freight-inrix',
        'source-layer': 'truck',
        'paint': {
            'circle-radius': 1.5,
            'circle-color': 'orange'
        },
        'filter': [
            '==',
            'v',
            3
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
              [{zoom: 8, value: 2}, 1.5],
              [{zoom: 8, value: 4}, 3],
              [{zoom: 8, value: 8}, 5],
              [{zoom: 8, value: 105}, 10],
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
            [{zoom: 8, value: 5}, 1.5],
            [{zoom: 8, value: 11}, 2],
            [{zoom: 8, value: 23}, 4],
            [{zoom: 8, value: 50}, 7],
            [{zoom: 8, value: 1500}, 10],
            [{zoom: 11, value: 5}, 2],
            [{zoom: 11, value: 11}, 3],
            [{zoom: 11, value: 23}, 6],
            [{zoom: 11, value: 50}, 9],
            [{zoom: 11, value: 1500}, 12],
            ]
            },
          'circle-color':'#3182D1',
          'circle-opacity':.85
      },
      "filter": ["all",
      ["==","MAPTYPE","DVRPC"],
      [">=","FutPEV",0.1]
      ]  
  },
    'DVRPC-FuturePEV': {
        'id': 'DVRPC-FuturePEV',
        'type': 'fill',
        'source': 'census',
        'source-layer': 'blocks',
        'layout': {},
        'paint': {
       'fill-color': expression1,
        'fill-opacity': 1
        }
      },
    'PA-FuturePEV': {
        'id': 'PA-FuturePEV',
        'type': 'fill',
        'source': 'census',
        'source-layer': 'blocks',
        'layout': {},
        'paint': {
          'fill-color': expression2,
          'fill-opacity': 1
        }
      },
      'BG': {
        'id': 'BG',
        'type': 'line',
        'source': 'census',
        'source-layer': 'blocks',
        'layout': {},
        'paint': {
          "line-width": .75,
          "line-color": "#637886",
        },
        "filter": ["all",
        ["==","DVRPC","Yes"]
        ]  
      },
}

export default secondaryMapLayers