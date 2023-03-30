const togglerPEV = (pevToggle, wpToggle) => {
    $('.distribution').show();
    $('.pev').show();
    $('.workplace').hide();
    $('.charge').hide();

    document.getElementById('type_select').selectedIndex=0;
    document.getElementById('layout_select').selectedIndex = document.getElementById('pevTop').index;

    wpToggle.classList.remove('toggle-btn-active');
    pevToggle.classList.add('toggle-btn-active');
};

// WorkPlace 
const togglerWP = (pevToggle, wpToggle) => {
    $('.workplace').show();
    $('.charge').show();
    $('.distribution').hide();
    $('.pev').hide();

    document.getElementById('type_select').selectedIndex=2;
    document.getElementById('layout_select').selectedIndex = document.getElementById('chargeTop').index;

    pevToggle.classList.remove('toggle-btn-active');
    wpToggle.classList.add('toggle-btn-active');
};

// update state, mapZoom & muni/county boundaries on geobtns click

// @UPDATE: remove
const togglerNJ = (map, njToggle, paToggle, dvrpcToggle) => {
  map.flyTo({center: [-74.52, 40.24], speed: 0.7, zoom: 7})

  dvrpcToggle.classList.remove('toggle-btn-active')
  paToggle.classList.remove('toggle-btn-active')
  
  njToggle.classList.add('toggle-btn-active')
}

// @UPDATE: remove
const togglerPA = (map, njToggle, paToggle, dvrpcToggle) => {
  map.flyTo({center: [-77.76,40.92], speed: 0.7, zoom: 6.25})

  dvrpcToggle.classList.remove('toggle-btn-active')
  njToggle.classList.remove('toggle-btn-active')

  paToggle.classList.add('toggle-btn-active')
}

const togglerDVRPC = (map, njToggle, paToggle, dvrpcToggle) => {
  map.fitBounds([
    [-76.09405517578125, 39.49211914385648],
    [-74.32525634765625, 40.614734298694216]
  ])

  njToggle.classList.remove('toggle-btn-active')
  paToggle.classList.remove('toggle-btn-active')

  dvrpcToggle.classList.add('toggle-btn-active')
}

export {togglerPEV, togglerWP, togglerDVRPC, togglerPA, togglerNJ };
