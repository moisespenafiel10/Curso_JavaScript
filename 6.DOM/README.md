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

## Selectores 
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
 

> [!NOTE]
> tecnologias para el procesamiento de texto atravez de maracado `markup`
(etiquetas- qee nos permite a traves de palabras reservadas darle un sestilo o significafdo a un texto al contenido de las etiquetas).la primera tecnologia fue `xml`  despues nae `html`, despues la ulyima generacion de tecnologias de markado de texto `markdown`. 