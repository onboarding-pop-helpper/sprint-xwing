/**
 * Classe que representa a medida real.
 * Contém a implementação os métodos de conversão para as demais medidas de moeda.
 */
class Real extends Moeda {
  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    super(valor);
  }

  /**
   * Método de conversão de real para real.
   * @returns {number} retorna o valor da conversão.
   */
  toReal(): number {
    return this.valor;
  }

  /**
   * Método de conversão de real para dólar.
   * @returns {number} retorna o valor da conversão.
   */
  toDolar(): number {
    return this.valor / 5.41;
  }

  /**
   * Método de conversão de real para euro.
   * @returns {number} retorna o valor da conversão.
   */
  toEuro(): number {
    return this.valor / 5.45;
  }
}
