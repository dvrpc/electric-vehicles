const sources = {  
    'boundaries': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/dvrpc-municipal.json'
    }
    // add more sources here,
    ,
    'freight-inrix': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/freight-inrix.json'
    },
    'access-score': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/access-score.json'
    },
    'pev': {
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/pev.json'
    },
    'census':{
        type: 'vector',
        url: 'https://tiles.dvrpc.org/data/census_boundaries.json'
    }
}

export default sources