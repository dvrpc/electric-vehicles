// Access Score CheckBox toggle

const togglerDVRPC = (map) => {
  document.getElementById("DVRPC").addEventListener("click", function () {
    map.flyTo({
      // created a parameter that pulls the lat/long values from the geojson
      center: [-75.2273, 40.071],
      speed: 0.7,
      zoom: 8.4,
    });
  $('#PA-FuturePEV').hide();
  $('.DVRPC-PEV').show();
  document.getElementById('layout_select').selectedIndex=0;
  $('#PA').children().eq(1).removeClass();  
  $('#PA').children().eq(1).addClass('dull');  
  $('#NJ').children().eq(1).removeClass();  
  $('#NJ').children().eq(1).addClass('dull');  
  $(this).children().eq(1).removeClass();   
  $(this).children().eq(1).addClass('active');  

  map.setFilter('county-outline', ['==', 'DVRPC', 'Yes']);
  map.setFilter('municipality-outline', ['==', 'DVRPC', 'Yes']);
  map.setFilter('dvrpc-current', ["all",["==","MAPTYPE","DVRPC"],[">=","CurPEV",0.1]]);
  map.setFilter('dvrpc-projected', ["all",["==","MAPTYPE","DVRPC"],[">=","FutPEV",0.1]]);
  map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "visible");
  });
};
// Bike Score CheckBox toggle
const togglerPA = (map) => {
  document.getElementById("PA").addEventListener("click", function () {
    map.flyTo({
      // created a parameter that pulls the lat/long values from the geojson
      center: [-77.76,40.92],
      speed: 0.7,
      zoom: 7,
    });
    $('#PA-FuturePEV').show();
    $('.DVRPC-PEV').hide();
    document.getElementById('layout_select').selectedIndex=4;
    $('#DVRPC').children().eq(1).removeClass();  
    $('#DVRPC').children().eq(1).addClass('dull'); 
    $('#NJ').children().eq(1).removeClass();  
    $('#NJ').children().eq(1).addClass('dull');   
    $(this).children().eq(1).removeClass();   
    $(this).children().eq(1).addClass('active');  

    map.setFilter('county-outline', ['==', 'STATE', 'PA']);
    map.setFilter('municipality-outline', ['==', 'STATE', 'PA']);
    map.setFilter('dvrpc-current', ["all",["==","MAPTYPE","PA"],[">=","CurPEV",0.1]]);
    map.setFilter('dvrpc-projected', ["all",["==","MAPTYPE","PA"],[">=","FutPEV",0.1]]);
    map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "none");
  });
};
// Walk Score CheckBox toggle
const togglerNJ = (map) => {
  document.getElementById("NJ").addEventListener("click", function () {
    map.flyTo({
      // created a parameter that pulls the lat/long values from the geojson
      center: [ -74.52, 40.24],
      speed: 0.7,
      zoom: 7,
    });

  $('#PA-FuturePEV').hide();
  $('#DVRPC').children().eq(1).removeClass();  
  $('#DVRPC').children().eq(1).addClass('dull'); 
  $('#PA').children().eq(1).removeClass();  
  $('#PA').children().eq(1).addClass('dull');   
  $(this).children().eq(1).removeClass();   
  $(this).children().eq(1).addClass('active');  


  map.setFilter('county-outline', ['==', 'STATE', 'NJ']);
  map.setFilter('municipality-outline', ['==', 'STATE', 'NJ']);
  map.setFilter('dvrpc-current', ["all",["==","MAPTYPE","NJ"],[">=","CurPEV",0.1]]);
  map.setFilter('dvrpc-projected', ["all",["==","MAPTYPE","NJ"],[">=","FutPEV",0.1]]);
  });
};
// Bike Score CheckBox toggle
const togglerPEV = (map) => {
};
// Walk Score CheckBox toggle
const togglerWP = (map) => {
};

// Home Page and Map interaction
//toggle Home and Map pages
// const togglerHome = () => {
//   document.getElementById("homeLink").addEventListener("click", function () {
//     document.getElementById("homeLink").style.display = "none";
//     document.getElementById("stationSearchFormMap").style.display = "none";
//     document.getElementById("main").style.display = "flex";
//     document.getElementById("sidebar").style.display = "none";
//     document.getElementById("map").style.display = "none";
//     document.getElementById("stationSearchForm").style.display = "block";
//   });
// };

// const togglerEAS = (map) => {
//   document
//     .getElementById("exploreTheMap")
//     .addEventListener("click", function () {
//       document.getElementById("stationSearchFormMap").style.display = "block";
//       document.getElementById("homeLink").style.display = "block";
//       document.getElementById("main").style.display = "none";
//       document.getElementById("map").style.display = "block";
//       document.getElementById("sidebar").style.display = "block";
//       document.getElementById("stationSearchForm").style.display = "none";
//       map.resize();
//     });
// };

export { togglerDVRPC, togglerPA, togglerNJ, togglerPEV, togglerWP };
