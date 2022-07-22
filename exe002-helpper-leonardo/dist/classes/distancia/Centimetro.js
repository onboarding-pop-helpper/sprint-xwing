"use strict";
class Centimetro extends Distancia {
    constructor(valor) {
        super(valor);
    }
    toCentimetro() {
        return this.valor;
    }
    toMetro() {
        return this.valor / 100;
    }
    toQuilometro() {
        return this.valor / 100000;
    }
}
