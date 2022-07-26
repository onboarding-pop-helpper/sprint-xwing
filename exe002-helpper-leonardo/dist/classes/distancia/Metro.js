"use strict";
class Metro extends Distancia {
    constructor(valor) {
        super(valor);
    }
    toCentimetro() {
        return this.valor * 100;
    }
    toMetro() {
        return this.valor;
    }
    toQuilometro() {
        return this.valor / 1000;
    }
}
