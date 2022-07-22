class Dolar extends Moeda {
  constructor(valor: number) {
    super(valor);
  }
  
  toReal(): number {
    return this.valor * 5.41;
  }
  toDolar(): number {
    return this.valor;
  }
  toEuro(): number {
    return this.valor * 1.01;
  }
}