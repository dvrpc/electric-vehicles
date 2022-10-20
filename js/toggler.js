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
    map.flyTo({center: [-74.52, 40.24], speed: 0.7, zoom: 7})

    $('#DVRPC-toggle').removeClass('toggle-btn-active')
    $('#PA-toggle').removeClass('toggle-btn-active')
    $(this).addClass('toggle-btn-active')
  }
)}

const togglerPA = map => {
  document.getElementById("PA-toggle").addEventListener("click", function () {
    map.flyTo({center: [-77.76,40.92], speed: 0.7, zoom: 6.25})

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

export {togglerPEV, togglerWP, togglerDVRPC, togglerPA, togglerNJ, filterCurrent };
