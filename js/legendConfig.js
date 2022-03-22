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
  "dvrpc-current": {
    iconType: "circle",
    label: "Current PEV",
    color: "#EA563D",
  },
  "dvrpc-projected": {
    iconType: "circle",
    label: "Projected PEV",
    color: "#3182D1",
  },
  "PA-FuturePEV": {
    iconType: "line",
    label: "PA Future PEV",
    color: "red",
  },
  "DVRPC-CurrentPEV": {
    iconType: "line",
    label: "DVRPC Current PEV",
    color: "red",
  },
  "DVRPC-FuturePEV": {
    iconType: "line",
    label: "DVRPC Future PEV",
    color: "red",
  },
  // "BG": {
  //   iconType: "line",
  //   label: "Block Group",
  //   color: "red",
  // },
};

export default legendConfig;
