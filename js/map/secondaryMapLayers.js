// put not-default layers here
 // add map events here (click, mousemove, etc)
 let expression2 = ["match", ["get", "GEOID10"]]
 pevPA.forEach(function(row) {
     let data = row["FutPEV"],
     color
   if (data < 10) color = '#eff3ff'
   else if (data >= 10 && data < 20) color = '#bdd7e7'
   else if (data >=20 && data < 40) color = '#6baed6'
   else if (data >= 40 && data < 80) color = '#3182bd'
   else if (data >= 80 && data < 150) color ='#08519c'
   else { color = '#08519c'; }
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
        'source-layer': 'pev',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
            'base': 1.75,
            'stops': [[5, .75],[11, 2], [22, 180]]
            },
            'circle-color': [
            'match',
            ['get', 'TYPE'],
            'current',
            '#EA563D',
            /* other */ '#ccc'
            ]
            },
            "filter": ["all",
            ["==","REGION","DVRPC"],
            ["==", "TYPE", "current"]
            ]   
    },
    'dvrpc-projected': {
        'id': 'dvrpc-projected',
        'type': 'circle',
        'source': 'pev',
        'source-layer': 'pev',
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
            'base': 1.75,
            'stops': [[5, .75],[11, 2], [22, 180]]
            },
            'circle-color': [
            'match',
            ['get', 'TYPE'],
            'projected',
            '#3182D1',
            /* other */ '#ccc'
            ]
        },
        "filter": ["all",
        ["==","REGION","DVRPC"],
        ["==", "TYPE", "projected"]
        ]  
    },
    'walk-buffer': {
        'id': 'walk-buffer',
        'type': 'line',
        'source': 'access-score',
        'source-layer': 'walk_buffer',
        'paint': {
            'line-width': 0.5,
            'line-color': 'purple'
        }
    },
    'cycle-buffer': {
        'id': 'cycle-buffer',
        'type': 'line',
        'source': 'access-score',
        'source-layer': 'cycle_buffer',
        'paint': {
            'line-width': 0.5,
            'line-color': 'red'
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
}

export default secondaryMapLayers