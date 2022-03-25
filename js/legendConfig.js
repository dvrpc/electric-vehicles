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
    color: "#EA563D",
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
    iconType: "line",
    label: "PA Future PEV",
    color: "red",
  },
  "DVRPC-CurrentPEV-BG": {
    iconType: "line",
    label: "Current PEVs (Block Group)",
    color: "red",
  },
  "DVRPC-FuturePEV-BG": {
    iconType: "line",
    label: "Future PEVs (Block Group)",
    color: "red",
  },
  "DVRPC-BG": {
    iconType: "line",
    label: "Block Group",
    color: "red",
  },
};

export default legendConfig;
