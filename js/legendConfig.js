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
    iconType: "circle",
    label: "Charging Locations",
    color: "#c8ffaf",
  },
  "dvrpc-current": {
    iconType: "circle",
    label: "Current PEVs (Centroid)",
    color: "#EA563D",
  },
  "dvrpc-projected": {
    iconType: "circle",
    label: "Projected PEVs (Centroid)",
    color: "#3182D1",
  },
  "PA-FuturePEV": {
    label: "PA Future PEV"
  },
  "DVRPC-CurrentPEV-BG": {
    label: "Current PEVs (Block Group)",
    legendLable1:"0.98",
    legendLable2:"1.64",
    legendLable3:"2.66",
    legendLable4:"4.22",
    legendLable5:"6.47",
    legendLable6:"11.83",
    legendLable7:"105"
  },
  "DVRPC-CurrentPEV-Pop": {
    label: "Current PEVs per 100 People"
  },
  "DVRPC-CurrentPEV-HH": {
    label: "Current PEVs per Household"
  },
  "DVRPC-FuturePEV-BG": {
    label: "Future PEVs (Block Group)"
  },
  "DVRPC-FuturePEV-Pop": {
    label: "Future PEVs per 100 People"
  },
  "DVRPC-FuturePEV-HH": {
    label: "Future PEVs per Household"
  },
  "DVRPC-FC-KD-SM": {
    label: "DVRPC-FC-KD-SM"
  },
  "DVRPC-FC-KD-JB": {
    label: "DVRPC-FC-KD-JB"
  },
  // "DVRPC-BG": {
  //   iconType: "line",
  //   label: "Block Group",
  //   color: "red",
  // },
};

export default legendConfig;
