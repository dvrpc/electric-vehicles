/* object with legend info

    @entries:
    // entry key corresponds to value on the toggle element
    'value': {
        iconType: '' // symbology. 'lines' and 'circles' included in styles. Can be customized
        label: '' // legend icon label
        color: '' // hex code, rgb value, valid name, etc
    }
*/
// @update: make similar fnc to in secondaryMapLayers


const legendConfig = {

  // General / Overlay
  "charging": {
    legendType:"circle",
    iconType: "circle",
    label: "Charging Locations",
    color: "#c8ffaf",
  },
  // @update what is? overlay layer?
  // "dvrpc-current": {
  //   legendType:"circle",
  //   iconType: "circle",
  //   label: "Current PEVs (Centroid)",
  //   color: "#EA563D",
  // },
  "dvrpc-projected": {
    legendType:"circle",
    iconType: "circle",
    label: "Projected PEVs (Centroid)",
    color: "#3182D1",
  },

  // DVRPC
  "DVRPC-CurrentPEV-BG": {
    label: "Current PEVs (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.98",
    legendLable2:"1.64",
    legendLable3:"2.66",
    legendLable4:"4.22",
    legendLable5:"6.47",
    legendLable6:"11.83",
    legendLable7:"105"
  },
  "DVRPC-CurrentPEV-Pop": {
    label: "Current PEVs per 100 People (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.08%",
    legendLable2:"0.13%",
    legendLable3:"0.2%",
    legendLable4:"0.3%",
    legendLable5:"0.45%",
    legendLable6:"0.71%",
    legendLable7:"3.74%"
  },
  "DVRPC-CurrentPEV-HH": {
    label: "Current PEVs per Household (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.23%",
    legendLable2:"0.35%",
    legendLable3:"0.54%",
    legendLable4:"0.77%",
    legendLable5:"1.16%",
    legendLable6:"1.89%",
    legendLable7:"11.02%"
  },
  "DVRPC-CurrentPEV-SM": {
    label: "Current PEVs per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"2.98",
    legendLable2:"5.25",
    legendLable3:"8.01",
    legendLable4:"11.9",
    legendLable5:"17.65",
    legendLable6:"33.71",
    legendLable7:"760.41"
  },
  "DVRPC-CurrentPEV-Veh": {
    label: "Percentage of Passengers that are PEVs (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.16%",
    legendLable2:"0.24%",
    legendLable3:"0.32%",
    legendLable4:"0.44%",
    legendLable5:"0.65%",
    legendLable6:"1.03%",
    legendLable7:"5.78%"
  },
  "DVRPC-FuturePEV-BG": {
    label: "Future PEVs (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"4.49",
    legendLable2:"7.87",
    legendLable3:"12.87",
    legendLable4:"21.39",
    legendLable5:"35.52",
    legendLable6:"72.51",
    legendLable7:"1,233.16"
  },
  "DVRPC-FuturePEV-Pop": {
    label: "Future PEVs per 100 People (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.44%",
    legendLable2:"0.72%",
    legendLable3:"1.13%",
    legendLable4:"1.69%",
    legendLable5:"2.54%",
    legendLable6:"4.75%",
    legendLable7:"56.12%"
  },
  "DVRPC-FuturePEV-HH": {
    label: "Future PEVs per Household (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"1.25%",
    legendLable2:"1.94%",
    legendLable3:"2.94%",
    legendLable4:"4.31%",
    legendLable5:"6.66%",
    legendLable6:"12.27%",
    legendLable7:"133.81%"
  },
  "DVRPC-FuturePEV-SM": {
    label: "Future PEVs per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"26.97",
    legendLable2:"45.94",
    legendLable3:"67.38",
    legendLable4:"92.56",
    legendLable5:"134.82",
    legendLable6:"238.44",
    legendLable7:"10,856.59"
  },
  "DVRPC-FuturePEV-Veh": {
    label: "Percentage of Passengers that are PEVs (DVRPC region)",
    legendType:"scale",
    class:"gb",
    legendLable1:"1.11%",
    legendLable2:"1.49%",
    legendLable3:"1.98%",
    legendLable4:"2.65%",
    legendLable5:"3.76%",
    legendLable6:"6.80%",
    legendLable7:"66.76%"
  },
  "DVRPC-FC-KD-SM": {
    label: "Free Charging - kWh of Demand per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"yor",
    legendLable1:"12.29",
    legendLable2:"28.98",
    legendLable3:"56.37",
    legendLable4:"100.15",
    legendLable5:"164.75",
    legendLable6:"321.26",
    legendLable7:"64,382.29",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-FC-KD-JB": {
    label: "Free Charging - kWh of Demand per Job (DVRPC region)",
    legendType:"scale",
    class:"brg",
    legendLable1:"0.05",
    legendLable2:"0.07",
    legendLable3:"0.09",
    legendLable4:"0.10",
    legendLable5:"0.12",
    legendLable6:"0.15",
    legendLable7:"0.71",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-FC-CE-SM": {
    label: "Free Charging - Charging Event per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"yor",
    legendLable1:"1.80",
    legendLable2:"4.22",
    legendLable3:"8.17",
    legendLable4:"14.14",
    legendLable5:"23.95",
    legendLable6:"44.31",
    legendLable7:"9,048.82",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-FC-CE-JB": {
    label: "Free Charging - Charging Event per Job (DVRPC region)",
    legendType:"scale",
    class:"brg",
    legendLable1:"0.008",
    legendLable2:"0.011",
    legendLable3:"0.013",
    legendLable4:"0.014",
    legendLable5:"0.016",
    legendLable6:"0.020",
    legendLable7:"0.111",
    note:"Number of Workplace Charging Events per Job"
  },
  "DVRPC-PC-KD-SM": {
    label: "Paid Charging - kWh of Demand per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"yor",
    legendLable1:"8.52",
    legendLable2:"20.03",
    legendLable3:"39.14",
    legendLable4:"69.46",
    legendLable5:"114.29",
    legendLable6:"222.67",
    legendLable7:"44,668.03",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-PC-KD-JB": {
    label: "Paid Charging - kWh of Demand per Job (DVRPC region)",
    legendType:"scale",
    class:"brg",
    legendLable1:"0.037",
    legendLable2:"0.051",
    legendLable3:"0.062",
    legendLable4:"0.072",
    legendLable5:"0.085",
    legendLable6:"0.105",
    legendLable7:"0.493",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-PC-CE-SM": {
    label: "Paid Charging - Charging Event per Sq. Mi. (DVRPC region)",
    legendType:"scale",
    class:"yor",
    legendLable1:"1.2",
    legendLable2:"2.83",
    legendLable3:"5.48",
    legendLable4:"9.5",
    legendLable5:"15.96",
    legendLable6:"29.68",
    legendLable7:"6,080.94",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-PC-CE-JB": {
    label: "Paid Charging - Charging Event per Job (DVRPC region)",
    legendType:"scale",
    class:"brg",
    legendLable1:"0.005",
    legendLable2:"0.007",
    legendLable3:"0.008",
    legendLable4:"0.010",
    legendLable5:"0.011",
    legendLable6:"0.014",
    legendLable7:"0.074",
    note:"Number of Workplace Charging Events per Job"
  },

  // New Jersey
  "NJ-CurrentPEV-BG": {
    label: "Current PEVs (New Jersey)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.98",
    legendLable2:"1.64",
    legendLable3:"2.66",
    legendLable4:"4.22",
    legendLable5:"6.47",
    legendLabel6:"11.83",
    legendLabel7:"104.9"
  },
  "NJ-CurrentPEV-Pop": {
    label: "Current PEVs per 100 People (New Jersey)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.086%",
    legendLable2:"0.138%",
    legendLable3:"0.2085%",
    legendLable4:"0.303%",
    legendLable5:"0.45%",
    legendLabel6:"0.71%",
    legendLabel7:"3.74%"
  },
  "NJ-CurrentPEV-HH": {
    label: "Current PEVs per Household (New Jersey)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.229%",
    legendLable2:"0.355%",
    legendLable3:"0.548%",
    legendLable4:"0.7783%",
    legendLable5:"1.16%",
    legendLable6:"1.89%",
    legendLable7:"11.019%"
  },
  "NJ-CurrentPEV-SM": {
    label: "Current PEVs per Sq. Mi. (New Jersey)",
    legendType:"scale",
    class:"gb",
    legendLable1:"2.98",
    legendLable2:"5.25",
    legendLable3:"8.01",
    legendLable4:"11.9",
    legendLable5:"17.65",
    legendLable6:"33.71",
    legendLable7:"760.41"
  },
  "NJ-CurrentPEV-Veh": {
    label: "Percentage of Passengers that are PEVs (New Jersey)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.0016%",
    legendLable2:"0.0024%",
    legendLable3:"0.0032%",
    legendLable4:"0.0044%",
    legendLable5:"0.006543%",
    legendLable6:"0.0103%",
    legendLable7:"0.057866%"
  },


  // Pennsylvannia
  "PA-CurrentPEV-BG": {
    label: "Current PEVs (Pennsylvannia) FAKE DATA - DVRPC JAWN STILL",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.98",
    legendLable2:"1.64",
    legendLable3:"2.66",
    legendLable4:"4.22",
    legendLable5:"6.47",
    legendLable6:"11.83",
    legendLable7:"105"
  },
  "PA-CurrentPEV-Pop": {
    label: "Current PEVs per 100 People (Pennsylvannia)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.07%",
    legendLable2:"0.1%",
    legendLable3:"0.14%",
    legendLable4:"0.19%",
    legendLable5:"0.28%",
    legendLable6:"0.71%",
    legendLable7:"3.74%"
  },
  "PA-CurrentPEV-HH": {
    label: "Current PEVs per Household (Pennsylvannia)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.183%",
    legendLable2:"0.253%",
    legendLable3:"0.347%",
    legendLable4:"0.48%",
    legendLable5:"0.69%",
    legendLable6:"1.15%",
    legendLable7:"9.78%"
  },
  "PA-CurrentPEV-SM": {
    label: "Current PEVs per Sq. Mi. (Pennsylvannia)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.21",
    legendLable2:"1.07",
    legendLable3:"2.91",
    legendLable4:"5.41",
    legendLable5:"9.62",
    legendLable6:"19.36",
    legendLable7:"760.41"
  },
  "PA-CurrentPEV-Veh": {
    label: "Percentage of Passengers that are PEVs (Pennsylvannia)",
    legendType:"scale",
    class:"gb",
    legendLable1:"0.01%",
    legendLable2:"0.015%",
    legendLable3:"0.02%",
    legendLable4:"0.028%",
    legendLable5:"0.038%",
    legendLable6:"0.066%",
    legendLable7:"0.43%"
  },
};

export default legendConfig;
