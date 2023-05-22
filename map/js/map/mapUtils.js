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

export { handleChargingPopup }