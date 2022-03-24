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

  var mcdInfo = '<h1>'+ props.MUN_NAME +'<br><small><span> ' +
  county  +
  '</span><span></span> County, <span>' +
  state +
  "</span></small></h1><div class='data-row' style='marging-top:9px'><span class='data-info'>Population</span><span class='data-value'> " +
  props.POP +
  "</span></div>" +
  "<br><div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  props.HOUSUNIT+
  "</span></div>" +
  "<br><div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  props.JOBS +
  "</span></div>" +
  "<br><div class='data-row-last'><span class='data-info'>Passenger Vehicles</span><span class='data-value'> " +
  props.PASS_VEH  +
  "</span></div>" 
  ;
  document.getElementById("mcdName").innerHTML = mcdInfo;

  var BGresults =
  "<div><table class='dataTable'>" +
    "<tr>" +
    "<th scope='col'></th>" +
    "<th scope='col'>Current</th>" +
    "<th scope='col'>Projected</th>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of Plug-In Electric Vehicles (PEVs)</td>" +
    "<td class='data-value'>" +
    numeral(props.CurPEV).format("(0,0)") +
    "</td>" +
    "<td class='data-value'>" +
    numeral(props.FutPEV).format("(0,0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Percentage of Passenger Vehicles That Are PEVs</td>" +
    "<td class='data-value'>" +
    numeral(props.PerCuPEV).format("(0.00%)") +
    "</td>" +
    "<td class='data-value'>" +
    numeral(props.PerFuPEV).format("(0.00%)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of PEVs per 100 People</td>" +
    "<td class='data-value'>" +
    numeral(props.CuPEVPop).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value'>" +
    numeral(props.FuPEVPop).format("(0,0.0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info'>Number of PEVs per 100 Housing Unit</td>" +
    "<td class='data-value'>" +
    numeral(props.CuPEV_HU).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value'>" +
    numeral(props.FuPEV_HU).format("(0,0.0)") +
    "</td>" +
    "</tr>" +
    "<tr class='dataTable-row'>" +
    "<td class='data-info2'>Number of PEVs per Sq. Mi.</td>" +
    "<td class='data-value2'>" +
     numeral(props.CuPEV_SM).format("(0,0.0)") +
    "</td>" +
    "<td class='data-value2'>" +
     numeral(props.FUPEV_SM ).format("(0,0.0)")+
    "</td>" +
    "</tr>" +
    "</table></div>";

  // var BGresults = "<div class='data-row' style='marging-top:9px'><span class='data-info'>Number of Plug-In Electric Vehicles (PEVs)</span><span class='data-value'> " +
  // props.MUN_NAME +
  // "</span></div>" +
  // "<br><div class='data-row'><span class='data-info'>Projected Number of PEVs</span><span class='data-value'> " +
  // props.MUN_NAME+
  // "</span></div>" +
  // "<br><div class='data-row'><span class='data-info'>Current - PEVs per Sq. Mi. </span><span class='data-value'> " +
  // props.MUN_NAME +
  // "</span></div>" +
  // "<br><div class='data-row-last'><span class='data-info'>Projected - PEVs per Sq. Mi.</span><span class='data-value'> " +
  // props.MUN_NAME  +
  // "</span></div>" 
  // ;
  document.getElementById("results").innerHTML = BGresults;

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

  var mcdAGGInfo = '<h1>'+ props.MUN_NAME +'<br><small><span> ' +
  county  +
  '</span><span></span> County, <span>' +
  state +
  "</span></small></h1><div class='data-row' style='marging-top:9px'><span class='data-info'>Population</span><span class='data-value'> " +
  props.POP +
  "</span></div>" +
  "<br><div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  props.HOUSUNIT+
  "</span></div>" +
  "<br><div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  props.JOBS +
  "</span></div>" +
  "<br><div class='data-row-last'><span class='data-info'>Passenger Vehicles</span><span class='data-value'> " +
  props.PASS_VEH  +
  "</span></div>" 
  ;
  document.getElementById("mcdAGG").innerHTML = mcdAGGInfo;
}
  
export {handleBlockGroups, handleMCD};