const handleBlockGroups = function (props,map) {
 
  let lookupState = {
    '34': "New Jersey",
    '42': "Pennsylvania"
  };

  let state = lookupState[props.statefp10];

  let lookupCounty = {
    '017': "Bucks",
    '029':"Chester",
    '045': "Delaware",
    '091': "Montgomery",
    '101': "Philadelphia",
    '005': "Burlington",
    '007': "Camden",
    '015': "Gloucester",
    '021': "Mercer"
  };

  let county = lookupCounty[props.countyfp10];

  var BGName = "<h3>Block Group ID:"+ props.GEOID10 +
  "</span></h3>"
  ;
  document.getElementById("BGName").innerHTML = BGName;

  var BGInfo = "<div><span class='data-info'>Municipality Containing This Block Group</span></span></div><div><span> " +
  props.MUN_NAME +
  "</span></div>" +
  "<div><i class='fa-solid fa-people'></i>Demographics Summary</div>"+
  "<div class='data-row'><span class='data-info'>Population</span><span class='data-value'> " +
  numeral(props.POP).format("(0,0)") +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  numeral(props.HOUSUNIT).format("(0,0)")+
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  numeral(props.JOBS).format("(0,0)") +
  "</span></div>" +
  "<div><i class='fa-solid fa-car'></i>Vehicular Summary</div>"+
  "<div class='data-row'><span class='data-info'>Passenger Vehicles</span><span class='data-value'> " +
  numeral(props.PASS_VEH).format("(0,0)")  +
  "</span></div>"+
  "<div>Plug-in Electric Vehicle Distribution</div>"+
  "<div><table class='dataTable'>" +
    "<tr>" +
    "<th scope='col'></th>" +
    "<th scope='col'>Current</th>" +
    "<th scope='col'>Projected</th>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of Plug-In Electric Vehicles (PEVs)</td>" +
    "<td class='data-value-left'>" +
    numeral(props.CurPEV).format("(0,0)") +
    "</td>" +
    "<td class='data-value-right'>" +
    numeral(props.FutPEV).format("(0,0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Percentage of Passenger Vehicles That Are PEVs</td>" +
    "<td class='data-value-left'>" +
    numeral(props.PerCuPEV).format("(0.00%)") +
    "</td>" +
    "<td class='data-value-right'>" +
    numeral(props.PerFuPEV).format("(0.00%)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of PEVs per 100 People</td>" +
    "<td class='data-value-left'>" +
    numeral(props.CuPEVPop).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value-right'>" +
    numeral(props.FuPEVPop).format("(0,0.0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of PEVs per 100 Housing Unit</td>" +
    "<td class='data-value-left'>" +
    numeral(props.CuPEV_HU).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value-right'>" +
    numeral(props.FuPEV_HU).format("(0,0.0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info2'>Number of PEVs per Sq. Mi.</td>" +
    "<td class='data-value2-left'>" +
     numeral(props.CuPEV_SM).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value2-right'>" +
     numeral(props.FUPEV_SM ).format("(0,0.0)")+
    "</td>" +
    "</tr>" +
    "</table></div>";
  ;
  document.getElementById("BGInfo").innerHTML = BGInfo;

  // var BGresults =
  // "<div><table class='dataTable'>" +
  //   "<tr>" +
  //   "<th scope='col'></th>" +
  //   "<th scope='col'>Current</th>" +
  //   "<th scope='col'>Projected</th>" +
  //   "</tr>" +
  //   "<tr class='dataTable-row'>" +
  //   "<td class='data-info'>Number of Plug-In Electric Vehicles (PEVs)</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.CurPEV).format("(0,0)") +
  //   "</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.FutPEV).format("(0,0)") +
  //   "</td>" +
  //   "</tr>" +
  //   "<tr class='dataTable-row'>" +
  //   "<td class='data-info'>Percentage of Passenger Vehicles That Are PEVs</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.PerCuPEV).format("(0.00%)") +
  //   "</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.PerFuPEV).format("(0.00%)") +
  //   "</td>" +
  //   "</tr>" +
  //   "<tr class='dataTable-row'>" +
  //   "<td class='data-info'>Number of PEVs per 100 People</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.CuPEVPop).format("(0,0.0)") +
  //   "</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.FuPEVPop).format("(0,0.0)") +
  //   "</td>" +
  //   "</tr>" +
  //   "<tr class='dataTable-row'>" +
  //   "<td class='data-info'>Number of PEVs per 100 Housing Unit</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.CuPEV_HU).format("(0,0.0)") +
  //   "</td>" +
  //   "<td class='data-value'>" +
  //   numeral(props.FuPEV_HU).format("(0,0.0)") +
  //   "</td>" +
  //   "</tr>" +
  //   "<tr class='dataTable-row'>" +
  //   "<td class='data-info2'>Number of PEVs per Sq. Mi.</td>" +
  //   "<td class='data-value2'>" +
  //    numeral(props.CuPEV_SM).format("(0,0.0)") +
  //   "</td>" +
  //   "<td class='data-value2'>" +
  //    numeral(props.FUPEV_SM ).format("(0,0.0)")+
  //   "</td>" +
  //   "</tr>" +
  //   "</table></div>";
  // document.getElementById("results").innerHTML = BGresults;

    // map.flyTo({
    //   // created a parameter that pulls the lat/long values from the geojson
    //   center: coordinates,
    //   pitch: 20,
    //   speed: 0.7,
    //   zoom: 15,
    // });
}

const handleMCD = function (props,map) {
 
  let lookupState = {
    '34': "New Jersey",
    '42': "Pennsylvania"
  };
  let state = lookupState[props.FIRST_MC_1.slice(0,2)];
  let lookupCounty = {
    '42017': "Bucks",
    '42029':"Chester",
    '42045': "Delaware",
    '42091': "Montgomery",
    '42101': "Philadelphia",
    '34005': "Burlington",
    '34007': "Camden",
    '34015': "Gloucester",
    '34021': "Mercer"
  };
  let county = lookupCounty[props.FIRST_MC_1.slice(0,5)];
  var mcdName = '<h3>'+ props.MUN_NAME +'<br><small><span> ' +
  county  +
  '</span><span></span> County, <span>' +
  state +
  "</span></small></h3>" 
  ;
  document.getElementById("mcdName").innerHTML = mcdName;

  var mcdAGGInfo = "<div>Demographic Summary</div><div class='data-row'><span class='data-info'>Population</span><span class='data-value'> " +
  numeral(props.POP).format("(0,0)") +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  numeral(props.HOUSUNIT).format("(0,0)")+
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  numeral(props.JOBS).format("(0,0)") +
  "</span></div>" +
  "<div>Vehicular Summary</div>"+
  "<div class='data-row'><span class='data-info'>Passenger Vehicles</span><span class='data-value'> " +
  numeral(props.PASS_VEH).format("(0,0)")  +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Number of Plug-In Electric Vehicles (PEVs)</span><span class='data-value'> " +
  numeral(props.CurPEV).format("(0,0)")  +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Projected Number of PEVs</span><span class='data-value'> " +
  numeral(props.FutPEV).format("(0,0)")  +
  "</span></div>" 
  ;
  document.getElementById("mcdAGG").innerHTML = mcdAGGInfo;
  

}
  
export {handleBlockGroups, handleMCD};