"use strict";
class Fahrenheit extends Temperatura {
    constructor(valor) {
        super(valor);
    }
    toCelcius() {
        return (this.valor - 32) / 1.8;
    }
    toFahrenheit() {
        return this.valor;
    }
    toKelvin() {
        return (this.valor - 32) / 1.8 + 273.15;
    }
}
