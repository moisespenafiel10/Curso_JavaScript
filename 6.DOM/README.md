# DOM-Document Oject Model
Modelo de documento de objeto

el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos XML Y HTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquico facilmente mnaipulables.

el DOM convierte todo el contenido del archivo HTML en un objeto de javascript

- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p class="parrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemnto</li>
        <li>tercer elemento</li>
    </ul>

</body>
```
- **mi archivo script.js**
```js
document:{
    Alemetn:body,
    Attr:null,
    Text:null,
    child:[
        {
            element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {element:,
            Attr:{class:"parrafo"},
            Text:"este es la descripcion de mi pagina",
            child:null
        },
        {
            element:ul,
            Attr:null,
            Text:null,
            child:[
                {element:li,
            Attr:null,
            Text:"primer elemento",
            child:null},
            {element:li,
            Attr:null,
            Text:"segundo elemento",
            child:null},
            {element:li,
            Attr:null,
            Text:"tercer elemento",
            child:null}
            ]
        },
        
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de `javascript`, nos ofrece una `API` (Aplication Programing Interfacez - Interfas de Programacion de Aplicaciones).

## Selectores - rerriendo el DOM
Los selectores no permiten obtener o capturar una etiqueta `html` la etiqueta capturada incluyendo sus atributos contenido e hijos si los tuviera .
los selectores que podemos utilizar son variadas podemos capturar etiquetas atravez de sus atributos como de el nombre de la etiqueta misma .
los selectores son funcines si hablasmos de poo entonces se puede decir que son `metodos`.
y son lo siguientes:
- **getElementById** - devuelve un elemento(etiqueta) que tengaun id especifico.
``` html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClass** - devuelve un elemento que tenga una clase especifica.
  ```html
  <h1 id="titulo">titulo</h1>
  <p class="parrafo">parrafo uno</p>
  <p id="parrafo_dos">parrafo dos</p>
  ```
  ```js
  let parrafo=document.getElementByClassName("parrafo")
  ```
- **querySelector** - devuelve el primer elemento que coincida con el selector ingresado puede ser un id,class,name o tag (etiqueta).
  ```html
  <h1 id="titulo">titulo</h1>
  <p class="parrafo">parrafo uno</p>
  <p id="parrafo_dos">parrafo dos</p>
  <p>subtitulo</p>
  ```
  ```js
  let titulo=document.querySelector("#titulo")
  let primerParrafo=document.querySelector(".parrafo")
  let segundoParrafo=document.querySelector("#parrafo_dos")
  let subTitulo=document.querySelector("h2")
  ```
  **Averiguar que otros mwtodos para recorrer el DOM tiene JavaScript**

  ## Manipulacion del DOM
  - **craeteElement** - este metodo crea un elemento HTML con el nombre que le pasemos por parametro
  ```js
  let titulo=document.createElement("h1")
  ```
  -**appendChild** - nos permite hacer hijo un elemento dentro de otro 
  ```js
  let titulo=document.createElement("h1")
  let body=querySelector("body")
  body.appendChild(titulo)
  ```
  ## Propiedades de los elementos DOM
  - **ClassName** - Permite setear o capturar el nombre de la clase que tenga un elemento
  - **id** - lo mismo que ClassName pero con el atributo id.
  - **innerHTML** - devuele o permite insertar codigo HTML (incluyendo tag y texto)
  - **innerText** - devueleve o permite insertar texto en un elemento.
  - **textContent** - nos permite agregar o modificar el contenido de un elemento
  - **value** - nos permite obtener o setear valores de un elemento `input`.
  
  ## Acciones con elementos en el DOM (averiguar)
  addEventListener
  

> [!NOTE]
> tecnologias para el procesamiento de texto atravez de maracado `markup`
(etiquetas- qee nos permite a traves de palabras reservadas darle un sestilo o significafdo a un texto al contenido de las etiquetas).la primera tecnologia fue `xml`  despues nae `html`, despues la ulyima generacion de tecnologias de markado de texto `markdown`. 