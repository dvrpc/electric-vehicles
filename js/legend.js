import legendConfig from "./legendConfig.js";
import { stops } from './map/mapPaint.js'

const createLegendItem = (val, geo) => {
  const legendDetails = legendConfig[val];

  if (legendDetails.legendType === "scale") {
      const paintArr = stops[geo][legendDetails.paintType]

      return `
        <div class="flex-row flex-align-center legend-item">
        <div id="legend-box2">
        <div id='legend'>
          <strong>${legendDetails.label}</strong>
          <div class='legend clearfix'>
            ${paintArr.map((val, index) => `<span class='${legendDetails.class}-${index++}'></span>`).join('')}
            ${paintArr.map(paintVal => `<label>${legendDetails.perc ? numeral(paintVal * 100).format('(0,0.000)') : numeral(paintVal).format('(0,0.000)')}</label>`).join('')}
            ${legendDetails.note ? `<div class="legend-note">${legendDetails.note}</div>` : ''}
          </div>
      </div>
      `;
  }
  return `
    <div class="flex-row flex-align-center legend-item">
      <span class="legend-icon-${legendDetails.iconType}" style="background-color:${legendDetails.color};"></span>
      <span class="legend-text">${legendDetails.label}</span>
    </div>
  `;
};

const handleLegend = (vals, container, geo) => {
  let legendItems = "";
  legendItems += vals.map((val) => createLegendItem(val, geo)).join("");

  // wholesale clear and replace
  while (container.firstChild) container.removeChild(container.firstChild);
  container.insertAdjacentHTML("afterbegin", legendItems);
};

export default handleLegend;
