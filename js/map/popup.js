const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, target, popup) => {
    const html = makePopupHTML(target.props)

    popup
    .setLngLat(target.lngLat)
    .setHTML(html)
    .addTo(map)
}

const makePopupHTML = props => {
    return `
        <span class="popup-span">
            ${props.namelsad10}
        </span>
    `
}

export { makePopup, makePopupContent }