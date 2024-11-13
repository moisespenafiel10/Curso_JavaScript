// 1. crear una funcion que devuelva el numero menor pasado por argumento
// function numeroMenor(a, b) {
//     if (a < b) {
//         return a;  
//     } else {
//         return b;  
//     }
// }
// console.log(numeroMenor(10, 5));  
// console.log(numeroMenor(3, 7));   
// console.log(numeroMenor(15, 12)); 

// 2. haciendo uso de la recursion crear una funcion que me muestre los primeros 20 numeros de la serie fibonacci:

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function mostrarFibonacci(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(fibonacci(i));
    }
}

mostrarFibonacci(5);  
