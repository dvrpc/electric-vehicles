const handleBlockGroups = function (props) {
  const geoid = props.GEOID10 || props.geoid10

  var BGName = "<h2>Block Group ID: "+ geoid +
  "</span></h2>"+"<div><span>Municipality Containing This Block Group: </span></span></div><div><span class='block-name'> " +
  props.MUN_NAME +
  "</span></div>" 
  ;

  document.getElementById("BGName").innerHTML = BGName;

  var BGInfo = "<div class='data-subtitle'><i class='fa fa-users' aria-hidden='true'></i>&nbsp Block Group Demographics Summary</div>"+
  "<div class='data-row'><span class='data-info'>Population</span><span class='data-value'> " +
  numeral(props.POP).format("(0,0)") +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  numeral(props.HOUSUNIT).format("(0,0)")+
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  numeral(props.JOBS).format("(0,0)") +
  "</span></div>" +
  "<div class='data-subtitle'><i class='fa-solid fa-car'></i>&nbsp Block Group Vehicular Summary</div>"+
  "<div class='data-row'><span class='data-info'>Passenger Vehicles</span><span class='data-value'> " +
  numeral(props.PASS_VEH).format("(0,0)")  +
  "</span></div>"+
  "<div class='data-subtitle'><i class='fa-solid fa-car-battery'></i>&nbsp Plug-in Electric Vehicle Distribution</div>"+
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
    "<td class='data-info'>% of Passenger Vehicles That Are PEVs</td>" +
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
    "</table></div>"+
    "<div class='data-subtitle'><i class='fa-solid fa-charging-station'></i>&nbsp Workplace Charging Demand</div>"+
    "<div><table class='dataTable'>" +
      "<tr>" +
      "<th scope='col'></th>" +
      "<th scope='col'>Free</th>" +
      "<th scope='col'>Paid</th>" +
      "</tr>" +
      "<tr class='dataTable-row'>" +
      "<td class='data-info'>kWh of Demand per Sq. Mi.</td>" +
      "<td class='data-value-left'>" +
      numeral(props.FC_KD_SM).format("(0,0.00)") +
      "</td>" +
      "<td class='data-value-right'>" +
      numeral(props.PC_KD_SM).format("(0,0.00)") +
      "</td>" +
      "</tr>" +
      "<tr class='dataTable-row'>" +
      "<td class='data-info'>Charing Events per Sq. Mi.</td>" +
      "<td class='data-value-left'>" +
      numeral(props.FC_CE_SM).format("(0,0.00)") +
      "</td>" +
      "<td class='data-value-right'>" +
      numeral(props.PC_CE_SM).format("(0,0.00)") +
      "</td>" +
      "</tr>" +
      "<tr class='dataTable-row'>" +
      "<td class='data-info'>kWh of Demand per Job</td>" +
      "<td class='data-value-left'>" +
      numeral(props.FC_KD_JB).format("(0,0.000)") +
      "</td>" +
      "<td class='data-value-right'>" +
      numeral(props.PC_KD_JB).format("(0,0.000)") +
      "</td>" +
      "</tr>" +
      "<tr class='dataTable-row'>" +
      "<td class='data-info'>Charing Events per Job</td>" +
      "<td class='data-value-left'>" +
      numeral(props.FC_CE_JB).format("(0.000)") +
      "</td>" +
      "<td class='data-value-right'>" +
      numeral(props.FC_CE_JB).format("(0.000)") +
      "</td>" +
      "</tr>" +
      "</table></div>";
  ;
  
  document.getElementById("BGInfo").innerHTML = BGInfo;
}

const handleMCD = function (props,map) {
  
  // @UPDATE: keep state for context
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

  var mcdAGGInfo = "<div class='data-subtitle'><i class='fa fa-users' aria-hidden='true'></i> Municipal Demographic Summary</div><div class='data-row'><span class='data-info'>Population</span><span class='data-value'> " +
  numeral(props.POP).format("(0,0)") +
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Households</span><span class='data-value'> " +
  numeral(props.HOUSUNIT).format("(0,0)")+
  "</span></div>" +
  "<div class='data-row'><span class='data-info'>Jobs </span><span class='data-value'> " +
  numeral(props.JOBS).format("(0,0)") +
  "</span></div>" +
  "<div class='data-subtitle'><i class='fa-solid fa-car'></i>&nbsp Municipal Vehicular Summary</div>"+
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