"use strict";
class Celcius extends Temperatura {
    constructor(valor) {
        super(valor);
    }
    toCelcius() {
        return this.valor;
    }
    toFahrenheit() {
        return this.valor * 1.8 + 32;
    }
    toKelvin() {
        return this.valor + 273.15;
    }
}
