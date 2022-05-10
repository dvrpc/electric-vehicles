import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
if (legendDetails.legendType === "scale") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <div id='legend'>
        <strong>${legendDetails.label}</strong>
        <div class='legend clearfix'>
          <span class='${legendDetails.class}-1'></span>
          <span class='${legendDetails.class}-2'></span>
          <span class='${legendDetails.class}-3'></span>
          <span class='${legendDetails.class}-4'></span>
          <span class='${legendDetails.class}-5'></span>
          <span class='${legendDetails.class}-6'></span>
          <span class='${legendDetails.class}-7'></span>
          <div class="vertical-line"></div>
          <div class="vertical-line"></div>
          <div class="vertical-line"></div>
          <div class="vertical-line"></div>
          <div class="vertical-line"></div>
          <div class="vertical-line"></div>
          <div class="vertical-line-blank"></div>
          <label>${legendDetails.legendLable1}</label>
          <label>${legendDetails.legendLable2}</label>
          <label>${legendDetails.legendLable3}</label>
          <label>${legendDetails.legendLable4}</label>
          <label>${legendDetails.legendLable5}</label>
          <label>${legendDetails.legendLable6}</label>
          <label>${legendDetails.legendLable7}</label>
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

const handleLegend = (vals, container) => {
  let legendItems = "";
  legendItems += vals.map((val) => createLegendItem(val)).join("");

  // wholesale clear and replace
  while (container.firstChild) container.removeChild(container.firstChild);
  container.insertAdjacentHTML("afterbegin", legendItems);
};

export default handleLegend;
