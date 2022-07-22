/**
 * Classe que representa a medida quilômetro.
 * Contém a implementação os métodos de conversão para as demais medidas de distância.
 */
class Quilometro extends Distancia {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de quilômetro para centímetro.
   * @returns {number} retorna o valor da conversão.
   */
  toCentimetro(): number {
    return this.valor * 100000;
  }

  /**
   * Método de conversão de quilômetro para metro.
   * @returns {number} retorna o valor da conversão.
   */
  toMetro(): number {
    return this.valor * 1000;
  }

  /**
   * Método de conversão de quilômetro para quilômetro.
   * @returns {number} retorna o valor da conversão.
   */
  toQuilometro(): number {
    return this.valor;
  }
}
