
const layers = {
    countyOutline: {
        "id": "county-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "county",
        "paint": {
            'line-width': 2.5,
            'line-color': '#505a5e'
        },
        "filter": [
            "==",
            "dvrpc",
            "Yes"
        ]
    },
    muniOutline: {
        "id": "municipality-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "municipalities",
        "paint": {
            'line-width': 0.5,
            'line-color': '#4a5c64'
        }
    }
    // add default layers here
    ,
    'dvrpc-pev': {
        'id': 'dvrpc-pev',
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
            'projected',
            '#3182D1',
            /* other */ '#ccc'
            ]
            },
        'filter': [
            "==",
            "REGION",
            "DVRPC"
        ]
    }
}

export default layers