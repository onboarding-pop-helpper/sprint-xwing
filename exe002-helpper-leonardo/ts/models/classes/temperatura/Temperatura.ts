/**
 * Classe abstrata que representa as medidas de distância.
 * Contém os métodos de conversão de temperatura.
 */
abstract class Temperatura extends Medida implements ConverteTemperatura {
  /**
   * Método de conversão para celcius.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toCelcius(): number;

  /**
   * Método de conversão para fahrenheit.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toFahrenheit(): number;

  /**
   * Método de conversão para kelvin.
   * @returns {number} retorna o valor da conversão.
   */
  abstract toKelvin(): number;
}
