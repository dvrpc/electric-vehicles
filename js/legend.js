import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
  // console.log(legendConfig["truck-v3"]);
  if (legendDetails.label === "PA Future PEV") {
    // alert("PA Future");
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
  return `
  <div class="flex-row flex-align-center legend-item">
              <span class="legend-icon-${legendDetails.iconType}" style="background-color:${legendDetails.color};"></span>
               <span class="legend-text">${legendDetails.label}</span>
 </div>
`;
  // `
  //         <div class="flex-row flex-align-center legend-item">
  //             <span class="legend-icon-${legendDetails.iconType}" style="background-color:${legendDetails.color};"></span>
  //             <span class="legend-text">${legendDetails.label}</span>
  //         </div>
  //     `;
};

const handleLegend = (vals, container) => {
  let legendItems = "";
  legendItems += vals.map((val) => createLegendItem(val)).join("");

  // wholesale clear and replace
  while (container.firstChild) container.removeChild(container.firstChild);
  container.insertAdjacentHTML("afterbegin", legendItems);
};

export default handleLegend;
