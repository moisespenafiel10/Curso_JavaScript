// let parrafoDos = document.getElementById("dos")
// let texto = prompt("ingresa un texto")
// parrafoDos.textContent = texto

let newElement = document.createElement("div")
newElement.id = "miId"
newElement.className = ""
let respuesta = prompt("escribe el color azul o rojo")
if (respuesta == "rojo") {
    newElement.className = "cuadro_rojo"
} else {
    newElement.className = "cuadro_azul"
}
// newElement.style = "background:red; width:200px; height:200px"
let body = document.querySelector("body")
body.appendChild(newElement)