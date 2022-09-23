const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, e, popup) => {
    const html = makePopupHTML(e.properties)

    popup
    .setLngLat(e.geometry.coordinates)
    .setHTML(html)
    .addTo(map)
}

// only one hover popup for this project so keep it simple for now
const makePopupHTML = props => {
    /* fields:
        // charging station name
        // address,
        // <hr />
        // type: <type>
        // EVSE Ports: <ports>
        // Connector(s): <connector>
        // Charge Network: <network>
        // Access Info: <access>
        // <em>Station details are subject to change</em>
    */
    let chargeType;
    if(props.ev_dc_fast_num) chargeType = 'Fast Charging'
    else if(props.ev_level1_evse_num) chargeType = 'Level 1'
    else if(props.ev_level2_evse_num) chargeType = 'Level 2'
    else chargeType = 'no info available'

    return `
        <span class="popup-span">
            ${props.station_name}<br />
            ${props.street_address}<br />
            ${props.city}, ${props.state}, ${props.zip}
            <hr />
            <strong>Type: </strong>${chargeType}<br />
            <strong>EVSE Ports: </strong>${props.ev_dc_fast_num + props.ev_level1_evse_num + props.ev_level2_evse_num}<br />
            <strong>Connector(s): </strong>${props.ev_connector_types[0] || 'no info available'}<br />
            <strong>Charge Network: </strong>${props.ev_network || 'no info available'}<br />
            <strong>Access Info: </strong>${props.access_days_time || 'no info available'}<br />
            <em>Station details are subject to change</em>
        </span>
    `
}

export { makePopup, makePopupContent }