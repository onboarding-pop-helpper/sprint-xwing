/**
 * Classe abstrata que representa todas as medidas.
 */
abstract class Medida implements MedidasInterface {
  /**
   * Este atributo representa o valor da medida instânciada.
   * @readonly
   */
  readonly valor: number;

  /**
   * Construtor da classe.
   * @param valor - Valor da medida.
   */
  constructor(valor: number) {
    this.valor = valor;
  }
}