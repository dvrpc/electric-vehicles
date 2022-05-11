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
    label: "EV Charging Station Location",
    color: "#ae017e",
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
    // note:"note",
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
    label: "Current - PEVs per 100 People",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"0.08%",
    legendLable3:"0.13%",
    legendLable4:"0.2%",
    legendLable5:"0.3%",
    legendLable6:"0.45%",
    legendLable7:"0.71%"
    // legendLable7:"3.74%"
  },
  "DVRPC-CurrentPEV-HH": {
    label: "Current - PEVs per Household",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"0.23%",
    legendLable3:"0.35%",
    legendLable4:"0.54%",
    legendLable5:"0.77%",
    legendLable6:"1.16%",
    legendLable7:"1.89%"
    // legendLable7:"11.02%"
  },
  "DVRPC-CurrentPEV-SM": {
    label: "Current - PEVs per Sq. Mi.",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0.0",
    legendLable2:"2.98",
    legendLable3:"5.25",
    legendLable4:"8.01",
    legendLable5:"11.9",
    legendLable6:"17.65",
    legendLable7:"33.71"
    // legendLable7:"760.41"
  },
  "DVRPC-CurrentPEV-Veh": {
    label: "Current - Percentage of Passenger Vehicles that are PEVs",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"0.16%",
    legendLable3:"0.24%",
    legendLable4:"0.32%",
    legendLable5:"0.44%",
    legendLable6:"0.65%",
    legendLable7:"1.03%",
    legendLable8:"5.78%"
  },
  "DVRPC-FuturePEV-BG": {
    label: "Future PEVs",
    legendType:"scale",
    // note:"note",
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
    label: "Projected - PEVs per 100 People",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"0.44%",
    legendLable3:"0.72%",
    legendLable4:"1.13%",
    legendLable5:"1.69%",
    legendLable6:"2.54%",
    legendLable7:"4.75%"
    // legendLable7:"56.12%"
  },
  "DVRPC-FuturePEV-HH": {
    label: "Projected  - PEVs per Household",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"1.25%",
    legendLable3:"1.94%",
    legendLable4:"2.94%",
    legendLable5:"4.31%",
    legendLable6:"6.66%",
    legendLable7:"12.27%"
    // legendLable7:"133.81%"
  },
  "DVRPC-FuturePEV-SM": {
    label: "Projected - PEVs per Sq. Mi.",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0.0",
    legendLable2:"26.97",
    legendLable3:"45.94",
    legendLable4:"67.38",
    legendLable5:"92.56",
    legendLable6:"134.82",
    legendLable7:"238.44"
    // legendLable7:"10,856.59"
  },
  "DVRPC-FuturePEV-Veh": {
    label: "Projected - Percentage of Passenger Vehicles that are PEVs",
    legendType:"scale",
    // note:"note",
    class:"gb",
    legendLable1:"0%",
    legendLable2:"1.11%",
    legendLable3:"1.49%",
    legendLable4:"1.98%",
    legendLable5:"2.65%",
    legendLable6:"3.76%",
    legendLable7:"6.80%"
    // legendLable7:"66.76%"
  },
  "DVRPC-FC-KD-SM": {
    label: "Free Charging - kWh of Workplace Charging Demand per Square Mile",
    legendType:"scale",
    class:"yor",
    legendLable1:"0.00",
    legendLable2:"12.29",
    legendLable3:"28.98",
    legendLable4:"56.37",
    legendLable5:"100.15",
    legendLable6:"164.75",
    legendLable7:"321.26",
    // legendLable7:"64,382.29",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-FC-KD-JB": {
    label: "Free Charging - kWh of Workplace Charging Demand per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.00",
    legendLable2:"0.05",
    legendLable3:"0.07",
    legendLable4:"0.09",
    legendLable5:"0.10",
    legendLable6:"0.12",
    legendLable7:"0.15",
    // legendLable7:"0.71",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-FC-CE-SM": {
    label: "Free Charging - Number of Workplace Charging Events per Square Mile",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"0.00",
    legendLable2:"1.80",
    legendLable3:"4.22",
    legendLable4:"8.17",
    legendLable5:"14.14",
    legendLable6:"23.95",
    legendLable7:"44.31",
    // legendLable7:"9,048.82",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-FC-CE-JB": {
    label: "Free Charging - Number of Workplace Charging Events per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.000",
    legendLable2:"0.008",
    legendLable3:"0.011",
    legendLable4:"0.013",
    legendLable5:"0.014",
    legendLable6:"0.016",
    legendLable7:"0.020",
    // legendLable7:"0.111",
    note:"Number of Workplace Charging Events per Job"
  },

  "DVRPC-PC-KD-SM": {
    label: "Paid Charging - kWh of Workplace Charging Demand per Square Mile",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"0.00",
    legendLable2:"8.52",
    legendLable3:"20.03",
    legendLable4:"39.14",
    legendLable5:"69.46",
    legendLable6:"114.29",
    legendLable7:"222.67",
    // legendLable7:"44,668.03",
    note:"kWh of Workplace Charging Demand per Square Mile"
  },
  "DVRPC-PC-KD-JB": {
    label: "Paid Charging - kWh of Workplace Charging Demand per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.000",
    legendLable2:"0.037",
    legendLable3:"0.051",
    legendLable4:"0.062",
    legendLable5:"0.072",
    legendLable6:"0.085",
    legendLable7:"0.105",
    // legendLable7:"0.493",
    note:"kWh of Workplace Charging Demand per Job"
  },
  "DVRPC-PC-CE-SM": {
    label: "Paid Charging - Number of Workplace Charging Events per Square Mile",
    legendType:"scale",
    note:"note",
    class:"yor",
    legendLable1:"0.0",
    legendLable2:"1.2",
    legendLable3:"2.83",
    legendLable4:"5.48",
    legendLable5:"9.5",
    legendLable6:"15.96",
    legendLable7:"29.68",
    // legendLable7:"6,080.94",
    note:"Number of Workplace Charging Events per Square Mile"
  },
  "DVRPC-PC-CE-JB": {
    label: "Paid Charging - Number of Workplace Charging Events per Job",
    legendType:"scale",
    note:"note",
    class:"brg",
    legendLable1:"0.000",
    legendLable2:"0.005",
    legendLable3:"0.007",
    legendLable4:"0.008",
    legendLable5:"0.010",
    legendLable6:"0.011",
    legendLable7:"0.014",
    // legendLable7:"0.074",
    note:"Number of Workplace Charging Events per Job"
  }
};

export default legendConfig;
