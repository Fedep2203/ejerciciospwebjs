//Declaracion de Función
console.log("<------------------------------ Función declarada con palabra reservada function ------------------------------>");
function saludar(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar("Juan"));

//Expresión de una función / función anónima
console.log("<------------------------------ Expresión de una función / Función anónima ------------------------------>");
const saludo = function(nombre) {
    return `Hola ${nombre}`;
};
console.log(saludo("Juan"));

//Arrow Function
console.log("<------------------------------ Arrow Function ------------------------------>");
const arrow_saludar = (nombre) => {
    return `Hola ${nombre}`;
};
const arrow_saludar2 = nombre => `Hola ${nombre}`; //forma simplificada
console.log(arrow_saludar("Juan"));
console.log(arrow_saludar2("Juan"));

//Método de un objeto
console.log("<------------------------------ Método de un objeto ------------------------------>");
const alguien = {
    nombre: "Juan",
    saludar: function() {
        return `Hola ${this.nombre}`;
    }
}
console.log(alguien.saludar());

//Función constructora
console.log("<------------------------------ Función constructora ------------------------------>");
function Persona(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        return `Hola, soy ${this.nombre}`;
    };
}
const unapersona = new Persona('Juan');
console.log(unapersona.saludar());

//Función Asincrona
console.log("<------------------------------ Función asincrona ------------------------------>");
async function dar_saludo(nombre) {
    return `Hola, ${nombre}`;
}

dar_saludo("Juan").then(console.log);


