// ejercisio con clase
// diseñar una clase para mi entidad celular
// tendra comoa tributos numero,marca,modelo,capacidad de bateria.bateria
// tendra como metodos encender,apagar,llamar,colgar,enviar mnesaje,

class Celular {
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadBateria = capacidadBateria;
    }

    // Métodos
    encender() {
        return "El celular está encendido.";
    }

    apagar() {
        return "El celular está apagado.";
    }

    llamar() {
        return "Llamando...";
    }

    colgar() {
        return "Llamada terminada.";
    }

    enviarMensaje() {
        return "Mensaje enviado.";
    }

    revisarBateria() {
        return `La capacidad total de la batería es ${this.capacidadBateria} mAh.`;
    }
}

// instanciar
let miCelular = new Celular("123-456-7890", "Samsung", "Galaxy S21", 4000);

// Llamadas a los métodos
console.log(miCelular.encender());
console.log(miCelular.llamar());
console.log(miCelular.enviarMensaje());
console.log(miCelular.colgar());
console.log(miCelular.apagar());
console.log(miCelular.revisarBateria());
