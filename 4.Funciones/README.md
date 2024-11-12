# INDICE
- [INDICE](#indice)
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
    - [bingding](#bingding)
  - [la pila de llamadas (call stack)](#la-pila-de-llamadas-call-stack)
  - [CLOUSURE o funciones de cierre (funciones que retorna funciones)](#clousure-o-funciones-de-cierre-funciones-que-retorna-funciones)
# FUNCIONES
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) nuestro programa y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## Estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos:
1. hacer uso del keyword `function`.
2. darle normbre a la funcion
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros, lleva parentesis igual
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es", a)
}
//funcion con varios parametros
function funcionVariosParametros(a,b,c){
    console.log(a + b + c)
}
```
**¿como ejecutamos una funcion**
Para ejecutar una funcion debemos ahcer el llaamdo de la misma, haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//crear funcion
function saludo(){
    console.log("hola")
}
//ejecutar funcion
saludo()
// o
dunction salu2(texto){
    console.log("hola: ", texto)
}
//ejecutar
salu2("jory")
```
> [!NOTE]
> ** Reglas para poner el nombre a una funcion** -
Los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){
}
function enviarCorreo(){
}
```
## Tipos de Argumentos y Parametros
Es la manera como se remplaza los argumentos con los parametros
### Argumentos y parametros posicionales
Se les llama posicionales por que los argumentos tomara los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(1,2,3,4)
console.log(respuesta)
//a toma el valor de 1 y asi sucesivamente en el orden que corresponda
```
### Argumentos y parametros Nominales
Se les llama nominales se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
//nominal
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicional
registroAlumno("jory", "rodriguez", "todos los dias")
```
> [!INFO]
> Posicionales en orden y Nominales especificar el parametro y su valor.
## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea  una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
En este caso el nombre de la funcion sera el nombre que le  pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
Al igual que una funcion clasica podemos tambien pasarle parametros.
### Funcion como declaracion
Se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){

}
console.log(saludo())
```
### Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la funcion de ecma script 5 `es5`.
Se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript
>[!NOTE]
>`verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado extenso o redunante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura:
el parametro seguido del simbolo flecha `=>` y el cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())
// de flecha, no tiene cuerpo a menos que el codigo sea muy extenso
let saludo=()=>("hola mundo")
console.log(saludo())
//mensaje
let mensaje=texto=>console.log("hola, ",texto)
console.log(mensaje("el primo"))
// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registoUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencias
las diferencias que tenemos al momento de crer una funcion declarativa, funcion como valor y flecha es el bingding 
### bingding

 ees una tecnica que guarda la funciones y variables (enlaces) sube al principio la declaracion no el valor a la cabexera del archivo javascript. 
 ```js
 despedida()
 function saludo(){
    return "hola primo"
 }
 function despedida(){
    return "adios primo"
 }
 ``` 

 ```js
 saludo()
 despedida()
 ```

 ## la pila de llamadas (call stack)
 es una tecnica que se usa par controlar de manera correcta la ejecuciond de una funcion 
 **averiguar sobre LIFO**
 ```js
 // programa que haga una ensalada 
 function cortarTomate() {
    console.log("cortatando tomate")
}
function cortarLechuga() {
    console.log("cortatando lechuga")
}
function cortarPepino() {
    console.log("cortatando pepino para el primo")
}
function cortarLimon() {
    console.log("cortatando Limon")
}
function prepararEnsalada(){
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mesclando verduras")
}
function comer() {
    prepararEnsalada()
    console.log("tragando la ensalada")
}
comer()
 ```
## CLOUSURE o funciones de cierre (funciones que retorna funciones)
Un `closure`  es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles  si son devueltas con el keyword `return`
antes de que aparezca la version `ecma 6` los `closure` era un patron ceacional que nos permitia modularizar nuestro codigo en logar de usar las `clases` que era poupulares en otros lenguages pero que javascript aun no lo implemntaba 
```js
// una funcion que retorna otra funcion  (por lo general es una funcion anonima)
function retornaValor (n){
    return n+1
}
//llamando a la funcion clasica
retornaValor(10)

//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
} 
//llamando a la funcion closure 
retornaValor(10)()
```

> [!NOTE]
> Las funciones `closure` son usadas porque pueden mantener el valor de sus enlaces o variables locales en todo el proceso de ejecucion de su funcion padre por cada llamada que realiza.