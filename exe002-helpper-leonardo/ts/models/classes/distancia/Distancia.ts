/**
 * Classe abstrata que representa as medidas de distância.
 * Contém os métodos de conversão de distância.
 */
abstract class Distancia extends Medida implements ConverteDistancia {
  /**
   * Método de conversão para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toCentimetro(): number;

  /**
   * Método de conversão para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toMetro(): number;

  /**
   * Método de conversão para quilômetro.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toQuilometro(): number;
}
