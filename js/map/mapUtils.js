import { makePopupContent } from "./popup.js"

const handleChargingPopup = (id, map, popup) => {
    map.on('mouseenter', id, e => {
        makePopupContent(map, e, popup)
        map.setFeatureState(
            {
                source: 'charging',
                sourceLayer: id,
                id: e.features[0].id
            },
            {
                hover: true
            }
        )
    })

    map.on('mouseleave', id, e => {
        popup.remove()
        map.setFeatureState(
            {
                source: 'charging',
                sourceLayer: id,
                id: e.features[0].id
            },
            {
                hover: false
            }
        )
    })   
}

export { handleChargingPopup }