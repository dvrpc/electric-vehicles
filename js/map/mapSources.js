const sources = {  
    'boundaries': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/dvrpc-municipal.json'
    },
    // https://afdc.energy.gov/fuels/electricity_locations.html#/find/nearest?fuel=ELEC
    'charging':{
        type:'geojson',
        data:'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/DVRPC_PEV/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson',
        generateId: true, //
    },
    'pev': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
    },
    'census':{
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/census_boundaries.json'
    },
}

export default sources