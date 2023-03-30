import { makePopupContent } from "./popup.js"

const handleChargingPopup = (id, map, popup) => {
    let featureId = ''

    map.on('mouseenter', id, e => {
        featureId = e.features[0].id

        makePopupContent(map, e, popup)
        map.setFeatureState(
            {
                source: 'charging',
                id: featureId
            },
            {
                hover: true
            }
        )
    })

    map.on('mouseleave', id, () => {
        popup.remove()
        map.setFeatureState(
            {
                source: 'charging',
                id: featureId
            },
            {
                hover: false
            }
        )
    })   
}

const extents = {
    dvrpc: {
        center: [-75.2273, 40.071],
        zoom: window.innerWidth <= 420 ? 7.3 : 8.42
    }
}

export { handleChargingPopup, extents }