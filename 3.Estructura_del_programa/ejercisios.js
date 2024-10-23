// ejercisio de condiciones
// crear un programa que me pida un numero y me muestre por consola si es un numero par o impar
// let numero = prompt(" ingrese numero")
// if (+numero%2 == 0) {
//     console.log ("es par")
// }else{console.log("es impar")}
//2

let edad = prompt("Ingrese su edad");

if (edad >= 4 && edad <= 8) {
    console.log("Te ganarás un chupetín");
} else if (edad >= 9 && edad <= 13) {
    console.log("Te ganarás una pelota firmada por Cuto");
} else if (edad >= 14 && edad <= 17) {
    console.log("Te ganarás un celular Nokia 6101");
} else if (edad >= 18) {
    console.log("Te ganarás al primo lo hace leña");
} else {
    console.log("Edad no válida");
}

