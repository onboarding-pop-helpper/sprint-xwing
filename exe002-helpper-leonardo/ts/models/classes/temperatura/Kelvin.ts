/**
 * Classe que representa a medida kelvin.
 * Contém a implementação os métodos de conversão para as demais medidas de temperatura.
 */
class Kelvin extends Temperatura {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de kelvin para celcius.
   * @returns {number} retorna o valor da conversão.
   */
  toCelcius(): number {
    return this.valor - 273.15;
  }

  /**
   * Método de conversão de kelvin para fahrenheit.
   * @returns {number} retorna o valor da conversão.
   */
  toFahrenheit(): number {
    return (this.valor - 273.15) * 1.8 + 32;
  }

  /**
   * Método de conversão de kelvin para kelvin.
   * @returns {number} retorna o valor da conversão.
   */
  toKelvin(): number {
    return this.valor;
  }
}
