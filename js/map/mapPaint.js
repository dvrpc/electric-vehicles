// store expressions as arrays of colors
const stops = {
    dvrpc: {
        // Current
        cur: [.98,1.64,2.66,4.22,6.47,11.83,105],
        curPop: [.086,.138,.2085,.303,.45, .71,3.74],
        curHH: [.229,.355,.548,.7783,1.16,1.89,11.019],
        curSM: [2.98,5.25,8.01,11.9,17.65,33.71,760.41],
        curVeh: [.0016,.0024,.0032,.0044,.0065,.0103,],
        
        // Future
        fut: [4.49,7.87,12.87,21.39,35.52,72.51,],
        futPop: [.44,.72,1.13,1.69,2.54,4.75,],
        futHH: [1.25,1.94,2.94,4.31,6.66,12.27,],
        futSM: [26.97,45.94,67.38,92.56,134.82,238.44,],
        futVeh: [.0111,.0149,.01983,.02648,.03766,.06804,],
        
        // Free Charging
        FC_KD_SM: [12.29,28.98,56.37,100.15,164.75,321.26],
        FC_KD_JB: [.054,.074,.0898,.1046,.1228,.1517],
        FC_CE_SM: [1.802,4.2266,8.1766,14.1452,23.9576,44.3198],
        FC_CE_JB: [.0083,.0108,.0128,.0145,.0169,.0209],
        
        // Paid Charging
        PC_KD_SM: [8.52,20.03,39.14,69.46,114.29,222.67,],
        PC_KD_JB: [.0378,.0512,.0623,.0724,.0853,.1052,],
        PC_CE_SM: [1.2,2.83,5.48,9.5,15.96,29.68,],
        PC_CE_JB: [.0056,.0072,.0085,.0097,.0113,.014]
    },
    pa: {
        // Current
        cur: [],
        curPop: [],
        curHH: [],
        curSM: [],
        curVeh: [],
        
        // Future
        fut: [],
        futPop: [],
        futHH: [],
        futSM: [],
        futVeh: [],
        
        // Free Charging
        FC_KD_SM: [],
        FC_KD_JB: [],
        FC_CE_SM: [],
        FC_CE_JB: [],
        
        // Paid Charging
        PC_KD_SM: [],
        PC_KD_JB: [],
        PC_CE_SM: [],
        PC_CE_JB: []
    },
    nj: {
        // Current
        cur: [],
        curPop: [],
        curHH: [],
        curSM: [],
        curVeh: [],
        
        // Future
        fut: [],
        futPop: [],
        futHH: [],
        futSM: [],
        futVeh: [],
        
        // Free Charging
        FC_KD_SM: [],
        FC_KD_JB: [],
        FC_CE_SM: [],
        FC_CE_JB: [],
        
        // Paid Charging
        PC_KD_SM: [],
        PC_KD_JB: [],
        PC_CE_SM: [],
        PC_CE_JB: []
    }
}

const colors = {
    pev: [
    '#f0f9e8',
    '#ccebc5',
    '#a8ddb5',
    '#7bccc4',
    '#4eb3d3',
    '#2b8cbe',
    '#08589e'
    ],
    wp: [
    '#ffffd4',
    '#fed976',
    '#feb24c',
    '#fd8d3c',
    '#fc4e2a',
    '#e31a1c',
    '#b10026'
    ],
    wpJob: [
    '#8c510a',
    '#d8b365',
    '#f6e8c3',
    '#f5f5f5',
    '#c7eae5',
    '#5ab4ac',
    '#01665e'
    ]
}

export { stops, colors }