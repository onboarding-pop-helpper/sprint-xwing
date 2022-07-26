"use strict";
class Kelvin extends Temperatura {
    constructor(valor) {
        super(valor);
    }
    toCelcius() {
        return this.valor - 273.15;
    }
    toFahrenheit() {
        return (this.valor - 273.15) * 1.8 + 32;
    }
    toKelvin() {
        return this.valor;
    }
}
