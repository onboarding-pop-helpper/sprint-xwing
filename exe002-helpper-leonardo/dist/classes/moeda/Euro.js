"use strict";
class Euro extends Moeda {
    constructor(valor) {
        super(valor);
    }
    toReal() {
        return this.valor * 5.45;
    }
    toDolar() {
        return this.valor * 1.01;
    }
    toEuro() {
        return this.valor;
    }
}
