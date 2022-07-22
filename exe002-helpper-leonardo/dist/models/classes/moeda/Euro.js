"use strict";
/**
 * Classe que representa a medida euro.
 * Contém os métodos de conversão para as demais medidas de moeda.
 */
class Euro extends Moeda {
    /**
     * Classe que representa a medida euro.
     * Contém a implementação os métodos de conversão para as demais medidas de moeda.
     * @public
     */
    constructor(valor) {
        super(valor);
    }
    /**
     * Método de conversão de euro para real.
     * @returns {number} retorna o valor da conversão.
     */
    toReal() {
        return this.valor * 5.45;
    }
    /**
     * Método de conversão de euro para dólar.
     * @returns {number} retorna o valor da conversão.
     */
    toDolar() {
        return this.valor * 1.01;
    }
    /**
     * Método de conversão de euro para euro.
     * @returns {number} retorna o valor da conversão.
     */
    toEuro() {
        return this.valor;
    }
}
