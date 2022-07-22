/**
 * Classe abstrata que representa as medidas de distância.
 * Contém os métodos de conversão de temperatura.
 */
abstract class Moeda extends Medida implements ConverteMoeda {
  /**
   * Método de conversão para real.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toReal(): number;

  /**
   * Método de conversão para dólar.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toDolar(): number;

  /**
   * Método de conversão para euro.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toEuro(): number;
}
