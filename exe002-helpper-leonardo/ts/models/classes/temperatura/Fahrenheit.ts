/**
 * Classe que representa a medida fahrenheirt.
 * Contém a implementação a implementação os métodos de conversão para as demais medidas de temperatura.
 */
class Fahrenheit extends Temperatura {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de fahrenheirt para celcius.
   * @returns {number} retorna o valor da conversão.
   */
  toCelcius(): number {
    return (this.valor - 32) / 1.8;
  }

  /**
   * Método de conversão de fahrenheirt para fahrenheit.
   * @returns {number} retorna o valor da conversão.
   */
  toFahrenheit(): number {
    return this.valor;
  }

  /**
   * Método de conversão de fahrenheirt para kelvin.
   * @returns {number} retorna o valor da conversão.
   */
  toKelvin(): number {
    return (this.valor - 32) / 1.8 + 273.15;
  }
}
