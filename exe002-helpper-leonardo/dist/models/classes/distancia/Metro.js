"use strict";
/**
 * Classe que representa a medida metro.
 * Contém a implementação os métodos de conversão para as demais medidas de distância.
 */
class Metro extends Distancia {
    /**
     * Construtor da classe.
     * @param valor - Valor da medida.
     */
    constructor(valor) {
        super(valor);
    }
    /**
     * Método de conversão de metro para centímetro.
     * @returns {number} retorna o valor da conversão.
     */
    toCentimetro() {
        return this.valor * 100;
    }
    /**
     * Método de conversão de metro para metro.
     * @returns {number} retorna o valor da conversão.
     */
    toMetro() {
        return this.valor;
    }
    /**
     * Método de conversão de metro para quilômetro.
     * @returns {number} retorna o valor da conversão.
     */
    toQuilometro() {
        return this.valor / 1000;
    }
}
