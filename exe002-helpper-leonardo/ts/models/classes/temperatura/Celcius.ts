/**
 * Classe que representa a medida celcius.
 * Contém a implementação os métodos de conversão para as demais medidas de temperatura.
 */
class Celcius extends Temperatura {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de celcius para celcius.
   * @returns {number} retorna o valor da conversão.
   */
  toCelcius(): number {
    return this.valor;
  }

  /**
   * Método de conversão de celcius para fahrenheit.
   * @returns {number} retorna o valor da conversão.
   */
  toFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }

  /**
   * Método de conversão de celcius para kelvin.
   * @returns {number} retorna o valor da conversão.
   */
  toKelvin(): number {
    return this.valor + 273.15;
  }
}
