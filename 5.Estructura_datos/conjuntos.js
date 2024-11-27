// // crear una lista que almacene las 5 vocales y luego los muestre por consola
// let vocales = ["a", "e", "i", "o", "u"]

// console.log(vocales)

// // acceder a la vocal "o"

// console.log(vocales[3])

// // accediendo a los elementos con for

// for (let i = 0; i < 5; i++) {
//     console.log(vocales[i])
// }

// tengo una lista de 7 frutas 
// crear un programa que identifique si en mi lista existe naranja, de existir me mostrara su indice, de no existir me mostrara un mensaje de error


function buscarFruta(frutas, frutaBuscada) {

    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] === frutaBuscada)
            console.log(`La fruta "${frutaBuscada}" está en el índice ${i}.`)
        return
    }
}

console.log(`Error: La fruta "${frutaBuscada}" no está en la lista.`)


const frutas = ["manzana", "platano", "uva", "pera", "fresa", "mango", "piña"]
buscarFruta(frutas, "uva");

// crear dos funciones que reciban por parametros una lista de numeros , una funcion encontrara el numnero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. ojo no usar los metodos de min y max


function encontrarMenor(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }
    return menor
}

function encontrarMayor(lista) {
    let mayor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]
        }
    }
    return mayor
}
const numeros = [3, 5, 7, 2, 8, -1, 4, 10, 6]

console.log("Número menor:", encontrarMenor(numeros))
console.log("Número mayor:", encontrarMayor(numeros))


//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista 

function contarVocalA(lista) {
    let contador = 0
    for (let elemento of lista) {
        if (elemento === "a" || elemento === "A") {
            contador++
        }
    }
    return contador
}

const lista = ["a", "b", "c", "a", "A", "d", "a"]
console.log("Cantidad de vocales 'a':", contarVocalA(lista))
