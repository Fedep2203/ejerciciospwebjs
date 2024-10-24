//Ejemplo de hoisting con funciones
saludar("Juan"); //el resultado de esta ejecución es ""

function saludar(nombre) {
    console.log(`Hola ${nombre}, ten un buen día!!!`);

}

//Ejemplo de hoisting con variables
console.log(variable); //el resultado de esta ejecución es "undefined"
var variable;
console.log("Esperando...");
variable = "Hola mundo";
console.log(variable); //el resultado de esta ejecución es "Hola mundo"