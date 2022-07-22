"use strict";
/**
 * Classe que representa a medida dólar.
 * Contém a implementação os métodos de conversão para as demais medidas de moeda.
 */
class Dolar extends Moeda {
    /**
     * Construtor da classe.
     * @param valor - Valor da medida.
     */
    constructor(valor) {
        super(valor);
    }
    /**
     * Método de conversão de dólar para real.
     * @returns {number} retorna o valor da conversão.
     */
    toReal() {
        return this.valor * 5.41;
    }
    /**
     * Método de conversão de dólar para dólar.
     * @returns {number} retorna o valor da conversão.
     */
    toDolar() {
        return this.valor;
    }
    /**
     * Método de conversão de dólar para euro.
     * @returns {number} retorna o valor da conversão.
     */
    toEuro() {
        return this.valor * 1.01;
    }
}
