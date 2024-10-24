function ejemploVar() {
    console.log("------------------------------ Ejemplo con VAR ------------------------------");
    var saludo = "Hola Mundo";
    console.log("Un problema con las variables de tipo VAR es el hoisting. Veamos el valor de la variable BAR definida casi al final: " + bar)
    console.log(saludo)
    if (saludo) {
        var saludo = "Cuando se crea una variable con var, es posible redeclarar";
        var alcance = "El alcance de una variable declarada con var es la función en la que fue declarada";
        console.log(saludo);
    }
    var_global = "Una variable declarada sin especificar su tipo, se vuelve una variable var global";
    console.log(alcance);
    var bar;
    bar = "Ahora no provoca ningun error."; // Al declarar una variable var, esta es elavada al principio al momento de ejecutar el programa
    console.log("Veamos el valor  de la variable bar luego de la asignación: " + bar);
    //El problema es que solo la declaración de la variable es elevada, pero no su valor. Esa es la razon del undefined
}

function ejemploLet() {
    console.log("------------------------------ Ejemplo con LET ------------------------------");
    let alcance = "El alcance de una variable let se encuentra restringido al bloque en el que se declara así tambien como los bloques internos";
    let saludo = "Hola Mundo con let";
    if (alcance) {
        let alcance = "Ahora la variable tiene otro alcance";
        console.log(alcance);
        console.log(saludo);  // Si la variable no vuelve a ser declarada, entonces sigue manteniendo el valor asignado
        let var_bloque = "El alcance de esta variable es el bloque del condicional if";
    }
    //let saludo; Esto provocaria un SyntaxError, la variable ya se encuentra declarada
    //console.log(var_bloque); Esto provocaria un ReferenceError, la variable no fue declarada en este bloque
    console.log(alcance);
}

function ejemploConst() {
    console.log("------------------------------ Ejemplo con CONST ------------------------------");
    const mensaje = "El alcance de una variable const es de bloque, como en el caso de let";
    if (mensaje) {
        const mensaje = "otro mensaje";
        console.log(mensaje);
    }
    console.log(mensaje);
    const otro_mensaje = "Sin embargo, no es posible redeclarar o reasignar un valor a una variable const";
    console.log(otro_mensaje);
    //const mensaje; esto provocaria un SyntaxError, ya que la variable ya fue declarada
    //mensaje = "algo"; esto provocaria un TypeError,, ya que no se puede reasignar un valor a una variable declarada con const
}

ejemploVar();
console.log(var_global); //Variable declarada sin let, var, const
ejemploLet();
ejemploConst();


