# VALORES, TIPOS Y OPERADORES
## indice
 - [Tipos de datos o valores](#valores)
 ## valores
 imaginan un mar de bits Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo` o `memoria principal` o `memoria volatil` o `ram`.
Ahora la memoria no volatil o memoria secundaria o memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.

cuando nostros programamos hacemos uso de la `memoruia de trabajo`.
para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits  , javascripts ordena los bits en pequeñas partes o piezas de informacion a esro se le conoce como `valores`, cada valor tiene una funcionalidad distinta puede ser numero un texto o una funcion.

cuando hablamos de tipo de datos en javascript nos referimos a su representacion binaria y al tipo de valor que usamos
### Datos primitivos

son aquellos datos que ya existen, no pueden ser creados,actullizados ni eliminados solo pueden ser llamados para el uso que deamos darle.

Los datos primitivos en javascript son :
#### - Numeros (number)
los valores de tipo numero como es de esperar son numeros y en javascript se hsce el llamado de este valor de la siguiente manera
```js
29

//esatmos usando un patron de bits para el numero 20 que existira dentro de la memoria de trabajo
```
- numero de punto flotante decimal fraccion 
  ```js
  2.7
  0.
  .0
  ```

- hnumeros notacion cientifica
  
    ```js
    2998e8
    // 2.998 * 10^8
    
    ```
> [!WARNING]
> Cuando javascript realiza operacion con numeros enteros el resultado simpre sera exacta, cuando realize operaciones con numeros decimalesel resultado perdera precision por que solo tiene 64 bits para almacenar el numero esto suele currir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimal con aproximaciones para evitar errores**. 
  >[!TIP]
  cuando javascript hace trabajo de memoria(cuando crea un patron de bit para almacenar) todos numero se almacena como decimal positivo.


- valores (datos)
- tipos (tipos de datos)
- operadores
