"use strict";
class Quilometro extends Distancia {
    toCentimetro() {
        return this.valor * 100000;
    }
    toMetro() {
        return this.valor * 1000;
    }
    toQuilometro() {
        return this.valor;
    }
}
