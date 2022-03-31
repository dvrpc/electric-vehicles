import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
  if (legendDetails.label === "PA Future PEV" ) {
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
  else if (legendDetails.label === "Current PEVs (Block Group)"||legendDetails.label === "Future PEVs (Block Group)"||legendDetails.label === "Current PEVs per 100 People"||legendDetails.label === "Future PEVs per 100 People"||legendDetails.label === "Current PEVs per Household"||legendDetails.label === "Future PEVs per Household") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <div id='legend'>
        <strong>${legendDetails.label}</strong>
        <div class='legend clearfix'>
          <span class='gb-1'></span>
          <span class='gb-2'></span>
          <span class='gb-3'></span>
          <span class='gb-4'></span>
          <span class='gb-5'></span>
          <span class='gb-6'></span>
          <span class='gb-7'></span>
          <label>${legendDetails.legendLable1}</label>
          <label>${legendDetails.legendLable2}</label>
          <label>${legendDetails.legendLable3}</label>
          <label>${legendDetails.legendLable4}</label>
          <label>${legendDetails.legendLable5}</label>
          <label>${legendDetails.legendLable6}</label>
          <label>${legendDetails.legendLable7}</label>
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
