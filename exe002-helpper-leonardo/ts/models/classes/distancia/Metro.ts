class Metro extends Distancia {
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