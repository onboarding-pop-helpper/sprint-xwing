class Metro extends Distancia {
  constructor(valor: number) {
    super(valor);
  }
  
  toCentimetro(): number {
    return this.valor * 100;
  }

  toMetro(): number {
    return this.valor;
  }

  toQuilometro(): number {
    return this.valor / 1000;
  }
}