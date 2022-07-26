/**
 * Classe que representa a medida centímetro.
 * Contém a implementação os métodos de conversão para as demais medidas de distância.
 */
class Centimetro extends Distancia {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de centímetro para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  toCentimetro(): number {
    return this.valor;
  }

  /**
   * Método de conversão de centímetro para metro.
   * @returns {number} retorna o valor da conversão.
   */
  toMetro(): number {
    return this.valor / 100;
  }

  /**
   * Método de conversão de centímetro para quilômetro.
   * @returns {number} retorna o valor da conversão.
   */
  toQuilometro(): number {
    return this.valor / 100000;
  }
}
