/* object with legend info

    @entries:
    // entry key corresponds to value on the toggle element
    'value': {
        iconType: '' // symbology. 'lines' and 'circles' included in styles. Can be customized
        label: '' // legend icon label
        color: '' // hex code, rgb value, valid name, etc
    }

*/
const legendConfig = {
  "charging": {
    legendType:"circle",
    iconType: "circle",
    label: "Charging Locations",
    color: "#c8ffaf",
  },
  "dvrpc-current": {
    legendType:"circle",
    iconType: "circle",
    label: "Current PEVs (Centroid)",
    color: "#EA563D",
  },
  "dvrpc-projected": {
    legendType:"circle",
    iconType: "circle",
    label: "Projected PEVs (Centroid)",
    color: "#3182D1",
  },
  "DVRPC-CurrentPEV-BG": {
    label: "Current PEVs",
    legendType:"scale",
    note:"note",
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
    label: "Current PEVs per 100 People",
    legendType:"scale",
    note:"note",
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
    label: "Current PEVs per Household",
    legendType:"scale",
    note:"note",
    class:"gb",
    legendLable1:"0.229%",
    legendLable2:"0.355%",
    legendLable3:"0.548%",
    legendLable4:"0.7783%",
    legendLable5:"1.16%",
    legendLable6:"1.89%",
    legendLable7:"11.019%"
  },
  "DVRPC-CurrentPEV-SM": {
    label: "Current PEVs per Sq. Mi.",
    legendType:"scale",
    note:"note",
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
    label: "Percentage of Passengers that are PEVs",
    legendType:"scale",
    note:"note",
    class:"gb",
    legendLable1:"0.16%",
    legendLable2:"0.24%",
    legendLable3:"0.32%",
    legendLable4:"0.44%",
    legendLable5:"0.6543%",
    legendLable6:"1.03%",
    legendLable7:"5.7866%"
  },
  "DVRPC-FuturePEV-BG": {
    label: "Future PEVs",
    legendType:"scale",
    note:"note",
    class:"gb",
    legendLable1:"4.49",
    legendLable2:"7.87",
    legendLable3:"12.87",
    legendLable4:"21.39",
    legendLable5:"35.52",
    legendLable6:"72.51",
    legendLable7:"1233.16"
  },
  "DVRPC-FuturePEV-Pop": {
    label: "Future PEVs per 100 People",
    legendType:"scale",
    note:"note",
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
    label: "Future PEVs per Household",
    legendType:"scale",
    note:"note",
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
    label: "Future PEVs per Sq. Mi.",
    legendType:"scale",
    note:"note",
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
    label: "Percentage of Passengers that are PEVs",
    legendType:"scale",
    note:"note",
    class:"gb",
    legendLable1:"1.11%",
    legendLable2:"1.49%",
    legendLable3:"1.983%",
    legendLable4:"2.648%",
    legendLable5:"3.766%",
    legendLable6:"6.804%",
    legendLable7:"66.757%"
  },
  "DVRPC-FC-KD-SM": {
    label: "Free Charging - kWh of Demand per Sq. Mi.",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"12.29",
    legendLable2:"28.98",
    legendLable3:"56.37",
    legendLable4:"100.15",
    legendLable5:"164.75",
    legendLable6:"321.26",
    legendLable7:"64382.29",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-FC-KD-JB": {
    label: "Free Charging - kWh of Demand per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.0546",
    legendLable2:"0.074",
    legendLable3:"0.0898",
    legendLable4:"0.1046",
    legendLable5:"0.1228",
    legendLable6:"0.1517",
    legendLable7:"0.7153",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-FC-CE-SM": {
    label: "Free Charging - Charging Event per Sq. Mi.",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"1.802",
    legendLable2:"4.2266",
    legendLable3:"8.1766",
    legendLable4:"14.1452",
    legendLable5:"23.9576",
    legendLable6:"44.3198",
    legendLable7:"9048.8279",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-FC-CE-JB": {
    label: "Free Charging - Charging Event per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.0083",
    legendLable2:"0.0108",
    legendLable3:"0.0128",
    legendLable4:"0.0145",
    legendLable5:"0.0169",
    legendLable6:"0.0209",
    legendLable7:"0.111",
    note:"Number of Workplace Charging Events per Job"
  },

  "DVRPC-PC-KD-SM": {
    label: "Paid Charging - kWh of Demand per Sq. Mi.",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"8.52",
    legendLable2:"20.03",
    legendLable3:"39.14",
    legendLable4:"69.46",
    legendLable5:"114.29",
    legendLable6:"222.67",
    legendLable7:"44668.03",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-PC-KD-JB": {
    label: "Paid Charging - kWh of Demand per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.0378",
    legendLable2:"0.0512",
    legendLable3:"0.0623",
    legendLable4:"0.0724",
    legendLable5:"0.0853",
    legendLable6:"0.1052",
    legendLable7:"0.4934",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-PC-CE-SM": {
    label: "Paid Charging - Charging Event per Sq. Mi.",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"1.2",
    legendLable2:"2.83",
    legendLable3:"5.48",
    legendLable4:"9.5",
    legendLable5:"15.96",
    legendLable6:"29.68",
    legendLable7:"6080.94",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-PC-CE-JB": {
    label: "Paid Charging - Charging Event per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.0056",
    legendLable2:"0.0072",
    legendLable3:"0.0085",
    legendLable4:"0.0097",
    legendLable5:"0.0113",
    legendLable6:"0.014",
    legendLable7:"0.074",
    note:"Number of Workplace Charging Events per Job"
  },

  "PA-FuturePEV": {
    label: "PA Future PEV",
    legendType:"scale",
    note:"note"
  },
  // "DVRPC-BG": {
  //   iconType: "line",
  //   label: "Block Group",
  //   color: "red",
  // },
};

export default legendConfig;
