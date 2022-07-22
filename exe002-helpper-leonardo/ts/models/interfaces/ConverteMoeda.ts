/**
 * Interface com a declaração dos métodos implementados pelas classes de moeda.
 */
interface ConverteMoeda {
  /**
   * Método de conversão para real.
   * @returns {number} retorna o valor da conversão.
   */
  toReal(): number;

  /**
   * Método de conversão para dólar.
   * @returns {number} retorna o valor da conversão.
   */
  toDolar(): number;

  /**
   * Método de conversão para euro.
   * @returns {number} retorna o valor da conversão.
   */
  toEuro(): number;
}