const arreglo = [1, 2, 3, 4, 5, 6, 11, 23, 1, 989, 0, 1, 111, 645, 50, 45];


let menor_valor = Infinity;
for (let i = 0; i < arreglo.length; i++) {
    menor_valor = menor_valor > arreglo[i] ? arreglo[i]: menor_valor;
}
console.log("El menor valor del arreglo es: " + menor_valor);


const suma = arreglo.reduce((acum, actual) => acum + actual, 0);
console.log("El valor de la suma es: "+suma);


const double_arr = arreglo.map(numero => numero*2);
console.log("Arreglo original: " + arreglo);
console.log("Arreglo donde cada valor es el doble del original: " + double_arr);


const ge_ten = arreglo.filter(numero => numero >= 10);
console.log("Arreglo con los elementos mayores a 10: " + ge_ten);


const indice = arreglo.findIndex( numero => numero > 10);
if (indice != -1) {
    console.log("El indice del primer elemento mayor a 10 es: " + indice);
}
else {
    console.log("No hay ningún elemento mayor a 10 dentro del arreglo.");
}