class Quilometro extends Distancia {
  constructor(valor: number) {
    super(valor);
  }
  
  toCentimetro(): number {
    return this.valor * 100000;
  }

  toMetro(): number {
    return this.valor * 1000;
  }

  toQuilometro(): number {
    return this.valor;
  }
}