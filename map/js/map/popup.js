const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, e, popup) => {
    const html = makePopupHTML(e.features[0].properties)

    popup
    .setLngLat(e.lngLat)
    .setHTML(html)
    .addTo(map)
}

// only one hover popup for this project so keep it simple for now
const makePopupHTML = props => {
    let chargeType;

    if(props.ev_dc_fast_num) chargeType = 'Fast Charging'
    else if(props.ev_level1_evse_num) chargeType = 'Level 1'
    else if(props.ev_level2_evse_num) chargeType = 'Level 2'
    else chargeType = 'no info available'

    let connector;
    
    if(props.ev_connector_types) connector = props.ev_connector_types.slice(1, -1)
    else connector = 'no info available'
    
    return `
        <span class="popup-span">
            <h3 class="popup-h3">${props.station_name}</h3><br />
            ${props.street_address}<br />
            ${props.city}, ${props.state}, ${props.zip}
            <hr class="popup-hr"/>
            <strong>Type: </strong>${chargeType}<br />
            <strong>EVSE Ports: </strong>${props.ev_dc_fast_num || 0 + props.ev_level1_evse_num || 0 + props.ev_level2_evse_num || 0}<br />
            <strong>Connector(s): </strong>${connector}<br />
            <strong>Charge Network: </strong>${props.ev_network || 'no info available'}<br />
            <strong>Access Info: </strong>${props.access_days_time || 'no info available'}<br />
            <em>Station details are subject to change</em>
        </span>
    `
}

export { makePopup, makePopupContent }