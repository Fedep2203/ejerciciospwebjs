class Automovil {
    constructor(ruedas, puertas, color){
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.color = color;
        this.velocidad = 0;
    }

    acelerar(velocidad) {
        if (velocidad > this.velocidad) {
            this.velocidad += velocidad;
        }
        else{
            console.log("Error, no es posible disminuir la velocidad");
        }
    }

}

auto = new Automovil(4, 4, "rojo")
auto.acelerar(60);
console.log("La velocidad actual del auto es de " + auto.velocidad + "km/h");