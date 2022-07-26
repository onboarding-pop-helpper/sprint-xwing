/**
 * Interface com a declaração dos métodos implementados pelas classes de distância.
 */
interface ConverteDistancia {
  /**
   * Método de conversão para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  toCentimetro(): number;

  /**
   * Método de conversão para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  toMetro(): number;

  /**
   * Método de conversão para quilômetro.
   * @returns {number} retorna o valor da conversão.
   */
  toQuilometro(): number;
}