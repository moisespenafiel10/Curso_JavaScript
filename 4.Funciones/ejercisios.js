// haciendo uso de las funciones de tipo closure 

//ejercisio1
// Función que pide el nombre y la edad del usuario y devuelve una función closure
// pedir al usuario su nombre y su edad . verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario

function pedirDatosUsuario() {
    
    let nombre = prompt("¿Cuál es tu nombre?")
    let años = parseInt(prompt("¿Cuántos años tienes?"))
    
    
    return function() {
      if (años > 18) {
        console.log("Bienvenido, " + nombre)
      } else {
        console.log("ahun estas peque ")
      }
    }
  }
  
  
  let verificarUsuario = pedirDatosUsuario();
  
  verificarUsuario();