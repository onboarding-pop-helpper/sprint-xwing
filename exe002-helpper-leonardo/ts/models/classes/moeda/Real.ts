class Real extends Moeda {
  constructor(valor: number) {
    super(valor);
  }
  
  toReal(): number {
    return this.valor;
  }
  toDolar(): number {
    return this.valor / 5.41;
  }
  toEuro(): number {
    return this.valor / 5.45;
  }
}