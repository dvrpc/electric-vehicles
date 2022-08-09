// store expressions as arrays of colors
const stops = {
    dvrpc: {
        // Current
        cur: [.98,1.64,2.66,4.22,6.47,11.83,105],
        curPop: [.086,.138,.2085,.303,.45, .71,3.74],
        curHH: [.229,.355,.548,.7783,1.16,1.89,11.019],
        curSM: [2.98,5.25,8.01,11.9,17.65,33.71,760.41],
        curVeh: [.0016,.0024,.0032,.0044,.0065,.0103,.057866],
        
        // Future
        fut: [4.49,7.87,12.87,21.39,35.52,72.51,1233.16],
        futPop: [.44,.72,1.13,1.69,2.54,4.75,56.12],
        futHH: [1.25,1.94,2.94,4.31,6.66,12.27,133.81],
        futSM: [26.97,45.94,67.38,92.56,134.82,238.44,10856.59],
        futVeh: [.0111,.0149,.01983,.02648,.03766,.06804,.66757],
        
        // Free Charging
        FC_KD_SM: [12.29,28.98,56.37,100.15,164.75,321.26,64382.29],
        FC_KD_JB: [.054,.074,.0898,.1046,.1228,.1517,.7153],
        FC_CE_SM: [1.802,4.2266,8.1766,14.1452,23.9576,44.3198,9048.83],
        FC_CE_JB: [.0083,.0108,.0128,.0145,.0169,.0209,.111],
        
        // Paid Charging
        PC_KD_SM: [8.52,20.03,39.14,69.46,114.29,222.67,44668.03],
        PC_KD_JB: [.0378,.0512,.0623,.0724,.0853,.1052,.4934],
        PC_CE_SM: [1.2,2.83,5.48,9.5,15.96,29.68,6080.94],
        PC_CE_JB: [.0056,.0072,.0085,.0097,.0113,.014,.074]
    },
    pa: {
        // Current
        cur: [],
        curPop: [0.07,0.1,0.14,0.19,0.28,0.71,3.74],
        curHH: [0.183,0.253,0.347,0.48,0.69,1.15,9.78],
        curSM: [0.21,1.07,2.91,5.41,9.62,19.36,760.41],
        curVeh: [0.001,0.0015,0.002,0.0028,0.0038,0.0066,0.043],
        
        // Future
        fut: [],
        futPop: [0.73,1.12,1.53,2.06,2.93,5.2,63.02],
        futHH: [1.87,2.78,3.72,5.02,7.16,12.91,154.95],
        futSM: [2.63,13.94,37.71,69.56,120.07,231.87,16415.22],
        futVeh: [0.0135,0.0177,0.0225,0.0291,0.0409,0.0716,0.6944],
        
        // Free Charging
        FC_KD_SM: [2.62,14.45,43.47,102.32,212.88,465.19,171093.4],
        FC_KD_JB: [0.094,0.12,0.144,0.171,0.205,0.257,1.537],
        FC_CE_SM: [0.27,1.65,4.99,11.38,24.26,52.32,18884.27],
        FC_CE_JB: [0.011,0.012,0.015,0.017,0.021,0.029,0.177],
        
        // Paid Charging
        PC_KD_SM: [1.82,10.02,30.33,71.21,148.16,324.38,119129.63],
        PC_KD_JB: [0.065,0.083,0.101,0.119,0.143,0.18,1.081],
        PC_CE_SM: [0.188,1.1,3.36,7.64,16.3,35.15,12739.76],
        PC_CE_JB: [0.0071,0.0085,0.0102,0.0119,0.0146,0.0196,0.1179]
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
        FC_KD_SM: [16.58,44.92,97.28,180.8,335.44,671.86,65409.92],
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