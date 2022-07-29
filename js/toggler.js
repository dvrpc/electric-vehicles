// Access Score CheckBox toggle

// const togglerDVRPC = (map) => {
//   document.getElementById("DVRPC").addEventListener("click", function () {
//     map.flyTo({
//       // created a parameter that pulls the lat/long values from the geojson
//       center: [-75.2273, 40.071],
//       speed: 0.7,
//       zoom: 8.4,
//     });
//   $('#pa-future').hide();
//   $('.dvrpc').show();
//   document.getElementById('layout_select').selectedIndex=0;
//   $('#PA').children().eq(1).removeClass();  
//   $('#PA').children().eq(1).addClass('dull');  
//   $('#NJ').children().eq(1).removeClass();  
//   $('#NJ').children().eq(1).addClass('dull');  
//   $(this).children().eq(1).removeClass();   
//   $(this).children().eq(1).addClass('active');  

//   map.setFilter('county-outline', ['==', 'DVRPC', 'Yes']);
//   map.setFilter('municipality-outline', ['==', 'DVRPC', 'Yes']);
//   map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "visible");
//   });
// };
// // Bike Score CheckBox toggle
// const togglerPA = (map) => {
//   document.getElementById("PA").addEventListener("click", function () {
//     map.flyTo({
//       center: [-77.76,40.92],
//       speed: 0.7,
//       zoom: 7,
//     });
//     $('#pa-future').show();
//     $('.dvrpc').hide();
//     document.getElementById('layout_select').selectedIndex=4;
//     $('#DVRPC').children().eq(1).removeClass();  
//     $('#DVRPC').children().eq(1).addClass('dull'); 
//     $('#NJ').children().eq(1).removeClass();  
//     $('#NJ').children().eq(1).addClass('dull');   
//     $(this).children().eq(1).removeClass();   
//     $(this).children().eq(1).addClass('active');  

//     map.setFilter('county-outline', ['==', 'STATE', 'PA']);
//     map.setFilter('municipality-outline', ['==', 'STATE', 'PA']);
//     map.setLayoutProperty("dvrpcPEVBG-line", "visibility", "none");
//   });
// };
// // Walk Score CheckBox toggle
// const togglerNJ = (map) => {
//   document.getElementById("NJ").addEventListener("click", function () {
//     map.flyTo({
//       center: [ -74.52, 40.24],
//       speed: 0.7,
//       zoom: 7,
//     });

//   $('#pa-future').hide();
//   $('#DVRPC').children().eq(1).removeClass();  
//   $('#DVRPC').children().eq(1).addClass('dull'); 
//   $('#PA').children().eq(1).removeClass();  
//   $('#PA').children().eq(1).addClass('dull');   
//   $(this).children().eq(1).removeClass();   
//   $(this).children().eq(1).addClass('active');  


//   map.setFilter('county-outline', ['==', 'STATE', 'NJ']);
//   map.setFilter('municipality-outline', ['==', 'STATE', 'NJ']);
//   });
// };
// PEV Distrubtion

// cosmetic changes to select
const togglerPEV = () => {
  document.getElementById("PEV").addEventListener("click", function () {
    $('.distribution').show();
    $('.pev').show();
    $('.workplace').hide();
    $('.charge').hide();

    document.getElementById('type_select').selectedIndex=0;
    document.getElementById('layout_select').selectedIndex = document.getElementById('pevTop').index;

    $('#WP').removeClass('toggle-btn-active');
    $(this).addClass('toggle-btn-active');
  });
};
// WorkPlace 
const togglerWP = () => {
  document.getElementById("WP").addEventListener("click", function () {
    $('.workplace').show();
    $('.charge').show();
    $('.distribution').hide();
    $('.pev').hide();

    document.getElementById('type_select').selectedIndex=2;
    document.getElementById('layout_select').selectedIndex = document.getElementById('chargeTop').index;

    $('#PEV').removeClass('toggle-btn-active');
    $(this).addClass('toggle-btn-active');
  });
};

// update state, mapZoom & muni/county boundaries on geobtns click
const togglerNJ = map => {
  document.getElementById("NJ-toggle").addEventListener("click", function () {
    map.fitBounds([
      [-75.559614, 38.928519],
      [-73.893979, 41.357423]
    ])

    $('#DVRPC-toggle').removeClass('toggle-btn-active')
    $('#PA-toggle').removeClass('toggle-btn-active')
    $(this).addClass('toggle-btn-active')
  }
)}

const togglerPA = map => {
  document.getElementById("PA-toggle").addEventListener("click", function () {
    map.fitBounds([
      [-80.519891, 39.7198],
      [-74.689516, 42.26986]
    ])

    $('#DVRPC-toggle').removeClass('toggle-btn-active')
    $('#NJ-toggle').removeClass('toggle-btn-active')
    $(this).addClass('toggle-btn-active')
  }
)}

const togglerDVRPC = map => {
  document.getElementById("DVRPC-toggle").addEventListener("click", function () {
    map.fitBounds([
      [-76.09405517578125, 39.49211914385648],
      [-74.32525634765625, 40.614734298694216]
    ])

    $('#NJ-toggle').removeClass('toggle-btn-active')
    $('#PA-toggle').removeClass('toggle-btn-active')
    $(this).addClass('toggle-btn-active')
  }
)}


// Show/hide select options
const filterCurrent = () => {
  document.getElementById("type_select").addEventListener("change", function (value) {
    const layerGroup = value.target.dataset.type;

    if (layerGroup == "time" ) {
      $('.charge').hide();
      $('.pev').show();

    } else if (layerGroup == "charge" ) {
      $('.pev').hide();
      $('.charge').show();
    }
  });
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

// export { togglerDVRPC, togglerPA, togglerNJ, togglerPEV, togglerWP, filterCurrent };
export {togglerPEV, togglerWP, togglerDVRPC, togglerPA, togglerNJ, filterCurrent };
