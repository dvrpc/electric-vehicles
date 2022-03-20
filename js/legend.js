import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
  if (legendDetails.label === "PA Future PEV") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <span>PA Future PEV</span>
  <div id="legend-box-Item" class="circle bl-1">
    <span>1-2 Low</span>
  </div>
  <div id="legend-box-Item" class="circle bl-2"><span>3</span></div>
  <div id="legend-box-Item" class="circle bl-3"><span>4</span></div>
  <div id="legend-box-Item" class="circle bl-4"><span>5</span></div>
  <div id="legend-box-Item" class="circle bl-5"><span>6</span></div>
</div>
 </div>
`;
  }
  else if (legendDetails.label === "DVRPC Current PEV") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <div id='legend'>
        <strong>Current PEV</strong>
        <div class='legend clearfix'>
          <span style='background:#b2182b;'></span>
          <span style='background:#ef8a62;'></span>
          <span style='background:#fddbc7;'></span>
          <span style='background:#f7f7f7;'></span>
          <span style='background:#d1e5f0;'></span>
          <span style='background:#67a9cf;'></span>
          <span style='background:#2166ac;'></span>
          <label>10</label>
          <label>16</label>
          <label>23</label>
          <label>32</label>
          <label>50</label>
          <label>100</label>
          <label>1234</label>
          <!-- <small>Source: <a href="#link to source">Name of source</a></small> -->
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
