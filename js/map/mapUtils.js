import { makePopupContent } from "./popup.js"

const handleCharginPopup = (id, map, popup) => {
    map.on('mousemove', id, e => {
        map.getCanvas().style.cursor = "pointer"
        makePopupContent(map, e, popup)
    })

    map.on('mouseleave', id, () => {
        map.getCanvas().style.cursor = ""
    })   
}

export { handleCharginPopup }