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
  "dvrpc-pev": {
    iconType: "circle",
    label: "dvrpc-pev",
    color: "green",
  },
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
  "truck-v3": {
    iconType: "circle",
    label: "truck v3",
    color: "orange",
  },
  "PA-FuturePEV": {
    iconType: "line",
    label: "PA Future PEV",
    color: "red",
  },
};

export default legendConfig;
