

const handleCharginPopup = (id, map) => {
    map.on('mousemove', id, e => {
        map.getCanvas().style.cursor = "pointer"

    })

    map.on('mouseleave', id, () => {
        map.getCanvas().style.cursor = ""
    })   
}

export { handleCharginPopup }