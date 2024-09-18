# INTRODUCCION
- [INTRODUCCION](#introduccion)
  - [Comentarios](#comentarios)
  - [Tipos de Comentarios](#tipos-de-comentarios)
  - [La\_consola](#la_consola)
    - [Tipos de mensajes por consola](#tipos-de-mensajes-por-consola)
      - [1. Notificadores](#1-notificadores)
      - [2. Gestion de timepo](#2-gestion-de-timepo)
      - [3. Tablas](#3-tablas)
  
## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlo para silenciar temporalmente partes del codigo *(comentar codigo)*.

## Tipos de Comentarios
1. **Una sola Linea**
   ```
   //comentario de una sola linea
   ```
2. **Multiples Lineas**
   ```
   /*comentario de multilinea*/
   ```
3. **JsDoc**
   ```
   /**
   *esta es una linea
   *esta es otra linea
   *
   ```
   Este tipo de comentario es muy usado para documentar el codigo, usado generalmente para la explicacion de funciones y clases en `Js`.

## La_consola
la herramienta de javascript mas usada, dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo
> [!TIP]
> ##### depuracion, es la tecnica que nos permite mostrar al codigo en las distantas fases del desarrollo, y verificar que el mensaje mostrado sea el correcto, y verificando que el codigo no tenga errores de sintaxis de logica o de precaucion.


### Tipos de mensajes por consola 
#### 1. Notificadores
mostrar un mesaje  por consola 
```js
console.log("hola mundo")
```
mostrar un mensaje de estilo informativo
```js
console.info("mensaje informativo")
```
mostra un mensaje de estilo alerta
```js
console.war("mensaje de tipo alerta")
```
mostrar un mensaje de estilo o tipo error
```js
console.error("mesaje de error")
```
#### 2. Gestion de timepo
este tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo y poder optimizar para hacer uso de esta herramienta tenemos que iniciar la consola con un `time()`. luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
```js
edad = 18
if (edad >=18){
   console.log("eres mayor de edad")
}else{
   console.war("eres pulpin")
}
```
#### 3. Tablas
este tipo de mensaje por consola nos muestra la informacion en una tablas solo formateara a los datos `array` y `objetos`
```js
lenguages=[
   (nombre:"javascript",extencion:".js");
   (nombre:"python",extencion:".py");
   (nombre:"php",extencion:".php")
]
```