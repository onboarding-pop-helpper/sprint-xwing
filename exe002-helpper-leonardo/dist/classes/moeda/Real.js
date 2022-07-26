"use strict";
class Real extends Moeda {
    constructor(valor) {
        super(valor);
    }
    toReal() {
        return this.valor;
    }
    toDolar() {
        return this.valor / 5.41;
    }
    toEuro() {
        return this.valor / 5.45;
    }
}
