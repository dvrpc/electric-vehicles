const sources = {  
    'boundaries': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/dvrpc-municipal.json'
    },
    'pev': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
    },
    'census':{
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/census_boundaries.json'
    },
    'charging':{
        type:'geojson',
        data:'https://developer.nrel.gov/api/alt-fuel-stations/v1.geojson?fuel_type=E85,ELEC&state=PA,NJ&api_key=taN3m0ZboD1V8ZGxQL8uAA75Ho3ANLeIPewzT9gq',
        generateId: true,
    }
}

export default sources