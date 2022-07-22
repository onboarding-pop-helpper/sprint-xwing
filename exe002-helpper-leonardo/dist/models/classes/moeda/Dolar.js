"use strict";
class Dolar extends Moeda {
    constructor(valor) {
        super(valor);
    }
    toReal() {
        return this.valor * 5.41;
    }
    toDolar() {
        return this.valor;
    }
    toEuro() {
        return this.valor * 1.01;
    }
}
