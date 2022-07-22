/**
 * Interface com a declaração dos métodos implementados pelas classes de temperatura.
 */
interface ConverteTemperatura {
  /**
   * Método de conversão para celcius.
   * @returns {number} retorna o valor da conversão.
   */
  toCelcius(): number;

  /**
   * Método de conversão para fahrenheit.
   * @returns {number} retorna o valor da conversão.
   */
  toFahrenheit(): number;

  /**
   * Método de conversão para kelvin.
   * @returns {number} retorna o valor da conversão.
   */
  toKelvin(): number;
}
