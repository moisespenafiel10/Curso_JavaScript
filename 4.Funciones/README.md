# FUNCIONESA

 las funciones en javascript en javascript son `bloques de codigo ejecutable`, a los que podemospasar parametros y operar con ellos.
 Nos sirve para modular 8 (modularizar) nuestro programa y estructurar en bloquesque `realizen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible .
 Las funciones normalmente , ala acabar su ejecucion `devuelve un valor`, que conseguimos con el parametro `return`.
 ## estructura de una funcion (como se crea una funcion)

 para crear una funcion debemos realizar los siguientes pasos
 1. hacer uso del keyword `function`
 2. darle un nombre a la funvion 
 3. crear los parametros que recibira entre parentesis `()`
 4. por ultimo crear el cuerpo con la funcion `{}`
    ```js
    function miFuncion(){
        console.log("esta es mi funcion")
    }
    // funcion con parametros
    function miFuncionParametros(a){
        console.log("tu parametro es",a)
    }
    // funcion con varios parametros
    function variosParametros(a,b){
        console.log(a+b)
        }
    // ejecutamos la funcion
    saludo()

    function saludo2(texto) {

    }
    ```
> [!NOTE]
> ** Reglas para poner el nombre auna funcion**
> los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo ` representa la entidad
    
```js
function crearUsuario(){

}
function enviarCorreo(){

}
```

## Tipos de argumentos y parametros
es la manera como se reemplaza los argumentos con los parametros 
### Argumentos y Parametros Posicionales
se le llama porque los argumentos tomara los parametros en el orden que se le pase a lafuncion segun la posicion entre argumento y parametro
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales 
let respuesta = sumaNumeros(2,3,4,5)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
se les conoce a los argumentos que en su vreaciion se asocia en un parametro en especifico 
```js

function registroAlumno(npmbre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}` 
    return respuesta
}
//nominal
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicion
registroAlumno("jory","rodrigues","todos los dias")
```

>[!INFO]
>Posiciones en orden y nominales especificar el parametro y su valor 


