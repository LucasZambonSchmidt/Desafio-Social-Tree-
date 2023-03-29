const colors = {
    "--background": "white",
}
const colors2 = {
    "--background": "black",
}
let dark = false
const changeColor = () => {
    dark = !dark
    if (dark) {
        Object.entries(colors2).forEach(setColor)
    }
    else { Object.entries(colors).forEach(setColor) }
}
const setColor = (item) => {
    document.body.style.setProperty(item[0], item[1])
}

document.getElementById("botao").addEventListener("click", changeColor)