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
    },
    pa: {
        center: [-77.76,40.92],
        zoom: window.innerWidth <= 420 ? 5.13 : 6.25
    },
    nj: {
        center: [-74.52, 40.24],
        zoom: window.innerWidth <= 420 ? 5.88 : 7
    }
}

export { handleChargingPopup, extents }