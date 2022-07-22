class Euro extends Moeda {
  constructor(valor: number) {
    super(valor);
  }
  
  toReal(): number {
    return this.valor * 5.45;
  }
  toDolar(): number {
    return this.valor * 1.01;
  }
  toEuro(): number {
    return this.valor;
  }
}