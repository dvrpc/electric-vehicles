const handleBlockGroups = function (props,map) {

  var mcdInfo = '<h1>'+ props.MUN_NAME +'<br><small><span> ' +
  props.countyfp10  +
  '</span><span></span> County, <span>' +
  props.statefp10 +
  '</span></small></h1>' ;
  document.getElementById("mcdName").innerHTML = mcdInfo;

    // map.flyTo({
    //   // created a parameter that pulls the lat/long values from the geojson
    //   center: coordinates,
    //   pitch: 20,
    //   speed: 0.7,
    //   zoom: 15,
    // });
}
  
export {handleBlockGroups};