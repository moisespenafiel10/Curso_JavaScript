# Indice
- [Indice](#indice)
- [Estructura de datos](#estructura-de-datos)
  - [Lista o Array](#lista-o-array)
    - [Creacion](#creacion)
    - [Acceder a un elemnto del array](#acceder-a-un-elemnto-del-array)
    - [Metodos](#metodos)
    - [Tareas averiguar que otros metodos existejn para el trartamiento de listas en javascript](#tareas-averiguar-que-otros-metodos-existejn-para-el-trartamiento-de-listas-en-javascript)
  - [Objetos](#objetos)
    - [Creacion](#creacion-1)
    - [Acceder a un elemnto del objeto](#acceder-a-un-elemnto-del-objeto)
    - [Metodos](#metodos-1)
# Estructura de datos
A parte de los tipos de datos primitivos javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos, deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiendte o en conjunto.
Son los siguientes
## Lista o Array
en listas en javascript son un tipo de dato  estructurado que nos permite almacenar distintos tipos de datosprimitivos separados por comas , cada tipo de dato que se almacene en una lista se lee como elemento.
asi cada elemento estara separado por una coma .
### Creacion
primero debemos crear un enlace(una variable) y luego le asignamos la lista que se crea con `corchetes []` , los elemntos estarn dentro de los corchetes separados por comas.
```js
// estoy creando una lista de numeros
let miLista=[]
//creando una lista de numeros
let numeros=[1,2,6,5,4,7,7,8]ç
//creando una lista de nombres
let nombre=["edwin","jory","yerald"]
//crear una lista mixta
let mixto=["edwin",3,false,["hala","mundo"]]
```
### Acceder a un elemnto del array
para poder acceder a un elemnto del array debemos entender que javascript asignara por cada elemnto un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comenzaras de 0 mcon el primer elemento, el ultimo elemento sera la cantidad de elementos `-1`.
```js
let numeros=[3,6,7,23,67,8]
console.log(numeros)
```  
existeotra manera de acceder a los elementos de una lista, esto se logra recorriendo cada elemento de una llsta, esto se logra con un bucle `for`
```js
let nombres=["cristian","jory","orlando","edwin"]
for (let i = 0;<nombres.length;i++){
  console.log(nombres[i])4
}
```
### Metodos
los metodos son funciones que nos permiten crear,actualizar y eliminar los elementos de una lista, todas las variables que almacenen una lista nos permmiten acceder a sus metodos poninedo un punto despues del nombre de la variable
- metodo para recuperar la longitud de elemntos que tiene una lista
  ```js
  let numeros=[2,3,4,2,5,5]
  numeros.length
  ```
-  metodo para agregar un elemento al final de la lista 
  ```js
  let vocales=["a"]
  vocales.push("e")
  ```
- metodo para eliminar el ultimo elemnto de una lista
  ```js
  let vocales=["a","e"]
  vocales.pop()
  ``` 
### Tareas averiguar que otros metodos existejn para el trartamiento de listas en javascript 
1. Métodos de Iteración
   - **forEach()** Ejecuta una función para cada elemento del array
     ```js
     const numeros = [1, 2, 3, 4];
     numeros.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8
     ```
   - **map()**Crea un nuevo array aplicando una función a cada elemento del original.
      ```JS
      const numeros = [1, 2, 3];
      const cuadrados = numeros.map(num => num ** 2);
     console.log(cuadrados); // Output: [1, 4, 9]
      ```
   - **filter()** Crea un nuevo array con los elementos que cumplen una condición.
     ```js
     const numeros = [1, 2, 3, 4, 5];
     const pares = numeros.filter(num => num % 2 === 0);
     console.log(pares); // Output: [2, 4]
     ```
2. **Métodos de Transformación** 
   - **concat()** Combina dos o más arrays en uno nuevo.
     ```js
     const a = [1, 2];
     const b = [3, 4];
     const combinado = a.concat(b);
     console.log(combinado); // Output: [1, 2, 3, 4]
     ```
  - **splice()** Añade, elimina o reemplaza elementos en el array.
     ```js
     const numeros = [1, 2, 3, 4];
     numeros.splice(1, 2, 99); // Reemplaza 2 y 3 por 99
     console.log(numeros); // Output: [1, 99, 4]
     ```
  - **includes()** Verifica si un elemento está presente en el array.
     ```js
     const numeros = [1, 2, 3];
     console.log(numeros.includes(2)); // Output: true
     ```
3. **Métodos de Conversión**
  - **join()** Convierte el array en un string, separando los elementos con un delimitador.
    ```js
    const palabras = ["Hola", "mundo"];
    const frase = palabras.join(" ");
    console.log(frase); // Output: "Hola mundo"
    ```
  - **toString()** Convierte el array en un string, separando los elementos con comas.
    ```js
    const numeros = [1, 2, 3];
    console.log(numeros.toString()); // Output: "1,2,3"
    ```
  - **shift() / unshift()** Añade o elimina elementos al inicio del array.
    ```js 
    const numeros = [2, 3];
    numeros.unshift(1); // Añade 1 al inicio
    numeros.shift();    // Elimina el primer elemento
    console.log(numeros); // Output: [3]
    ```
  - **split()** en JavaScript divide una cadena en un array de substrings (subcadenas) utilizando un separador especificado. Es muy útil para manipular cadenas de texto.
    ```js
    const texto = "manzana,banana,pera";
    const frutas = texto.split(",");
    console.log(frutas); // Output: ["manzana", "banana", "pera"]
    ```

## Objetos
los objetos son tipos de datos estructurados similares a las listas, para acceder a un elemento de la ista javascript les asignabaindices, en este caso los objetos como unica diferencia de las lista nosotros podemos asignar el nombre del elemnto al cual deseamos acceder  a esto se le conoce como `clave:valor`
cada clave:valor es un elemento de un objeto si deseamos crear mas elementos tendremos que separarlo por comas
### Creacion
para crear un objeto debemos encerrar los elementos en `{}` cada elemento estara conformado por su clave valor `clave:valor` 
```js
let datosJory={nombre:"jory",apellido:"Rodriguez Camargo",edad:"20",ganado:["el primo","los chamos"],direccion:{tipoCalle:"pasaje",nombreCalle:"querobamba",numeroVivienda:222,numeroCuarto:5}}
```

### Acceder a un elemnto del objeto
### Metodos