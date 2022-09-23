const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, target, popup) => {
    const html = makePopupHTML(target.props)

    popup
    .setLngLat(target.lngLat)
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
    return `
        <span class="popup-span">
            ${props.namelsad10}
        </span>
    `
}

export { makePopup, makePopupContent }