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
    class:"gb"
  },
  "DVRPC-FuturePEV-BG": {
    label: "Future PEVs",
    legendType:"scale",
    class:"gb"
  },
  "DVRPC-FuturePEV-Pop": {
    label: "Future PEVs per 100 People",
    legendType:"scale",
    class:"gb"
  },
  "DVRPC-FuturePEV-HH": {
    label: "Future PEVs per Household",
    legendType:"scale",
    class:"gb"
  },
  "DVRPC-FC-KD-SM": {
    label: "Free Charging - kWh of Demand per sq. mi.",
    legendType:"scale",
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
  "PA-FuturePEV": {
    label: "PA Future PEV",
    legendType:"scale"
  },
  // "DVRPC-BG": {
  //   iconType: "line",
  //   label: "Block Group",
  //   color: "red",
  // },
};

export default legendConfig;
