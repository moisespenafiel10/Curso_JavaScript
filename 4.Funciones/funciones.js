// // crear una funcion que me de un saludo de bienvenida
// function saludo(){
//     console.log("bienvenido")
// }

// binding en javascript loo que hace es vubir las funciones declarativas a la cabexza de mi archivo 
// console.log(depedida())

// // en el axso de funciones como vaor o funciones flecha  el binfing solo eleca al princio¡pio dela rchivo la declaracion del enlace o varible mas no el valor  por eso en etos casos debemos ejecutar las funcines despues  de haberlo creado 


// let saludo()=>{return "hola primo"}
// console.log(saludo())
// // en el caso de la funcion declarada al binding eleva toda la funcion al principio del archivo  por eso podemos ejevutar las funciones desde cualquier parte del archivo incluso antes de que sea creada

// function depedida(){
//     return "adios"
// }

// ejersicio cear una funcion que tenga o almacene una variable contador y podamos con funciones realisar la suma mas uno de esta variable y la resta mas uno de la misma variable a demas de poder tener una funcion que me permita acceder al valor actuada y poder mostrarlo 

function contador(){
    let contador = 0;
    
    function incremento(){
        return contador++
    }
    function decremento(){
        return contador--
    }
    function valorContador(){
        console.log(contador)
    }
    return {
        valorContador,
        incremento,
        decremento,
    }
}

let count1 = contador()
for (let i = 0; i < 5; i++){
    count1.incremento()
}
count1.valorContador()

let count2 = contador()
for (let i = 0; i < 5; i++){
    count2.decremento()
}
count2.valorContador()

//let contador=0
//function invremento
//return contador ++
//funcion decremento
//return contador--
//function valorContador
//return contador