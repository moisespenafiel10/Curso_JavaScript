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
  - [CLOSURE o Funciones de cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [tipo clases](#tipo-clases)
  - [prototype (tarea \>averiguar y sus eejemplos)](#prototype-tarea-averiguar-y-sus-eejemplos)
  - [RECURSION EN FUNCIONES (Tareas)](#recursion-en-funciones-tareas)
  - [FUNCIONES CALLBACKS (Tareas)](#funciones-callbacks-tareas)
- [CLASES](#clases)
    - [Estructura de una clase en javascript](#estructura-de-una-clase-en-javascript)

>>>>>>> 4b3f8ff7ac320fb60691c9a40b006a3c26fd8fe9
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
```
## CLOSURE o Funciones de cierre (Funciones que retorna funciones)

Un CLOSURE es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que eran populares en otros lenguajes pero que javascript aun no lo implementaba.

```js
//una funcion que retorna otra funcion, por lo general es una funcion anonima
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando funcion clasica
retornaValor(10)

//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
<<<<<<< HEAD
} 
//llamando a la funcion closure 
retornaValor(10)()
```

> [!NOTE]
> Las funciones `closure` son usadas porque pueden mantener el valor de sus enlaces o variables locales en todo el proceso de ejecucion de su funcion padre por cada llamada que realiza.
```js
//llamando funcion closure
retornaValor(10)()
```

>[!NOTE]
>Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realice.

### tipo clases

son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama conmo `instancia` en javascript tenemos funciones clousure que se oueden instanciar nal igual que una clase la diferencia con las funciones closure clasicas es que em esta hacemos uso de la palabra resrnada ´keyword´ llama ´this´

```js
function  contador (){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.decrefunction(){
        this.contador--
    }
}
```

>[!NOTE]
>Las funciones `closure` de tipo clase no hace uso de return en sus funciones al hacer uso de `this` cada funcion o variable estara enlazado al objeto que se cree

>[!WARNING]
>EL PROBLEMA DE ESTE TIPO DE FUNCION, ES CUANDO creamos un nuevo objeto a partir de la funcion tipo clase, reservara espancion en memoria para toda la clase y su valor creado , eso quiere decir variable y funciones ,cada vez que llamamos a una funcion este se replica en memoria

## prototype (tarea >averiguar y sus eejemplos)

para crear un prototype tendremos que crear primero nuetra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajamos.
Luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nuestras variables locales.
```js
function Contador(nombre){
    this.count=0
    this.nombre=nombre
}
Contador:prototype={
    incremento:function(){this.count++},
    decremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count}, 
    ${this.nombre}`}
}
```
> [!NOTE]
> Es una convencion usar como nombre nuestra  funcion principal, 1. que debe ser singular, 2. que es PalcalCase
>
## RECURSION EN FUNCIONES (Tareas)
## FUNCIONES CALLBACKS (Tareas)

# CLASES 
las clases en javaascript llegan en la version `ECMAscript 6`, javascript no tenia al igual que otros lenguajes de programacio orientada a objetos las `clases` ya qu js se enfocaba en la `programacion funcional` sin embargo con la llegada con `ES6` javascript adopta ser un lenguage de programacion multiparadigma, entre ellos la `programacion orientada a objetos` con la llegada de las `clases`
### Estructura de una clase en javascript 
una clase esta separada en tres grandes secciones 
1. el nombre de la clase que debera ser en singular y debera estar escritosen pascalCaase
1. deberan tener atributos estos deberan ser sustantivosy estar escritos en camelCase (valore,variables)
2. debera tener metodos (acciones,funciones) estos debera ser verbos y estar escritos en camelCase
   
```js
class computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase=(tower)
    }
}
//metodos
encender(){
    return "estoy encendiendo..."
}

apagar(){
    return "estoy cerrando secion y guardando informacion antes del apgado"
}
escribir(){
    return "escribiendo informe"
}
jugar(){
    return "jugando dota"
}

// instanciar

let miPc=new computador("gigabyte")
miPc.encender()
```


