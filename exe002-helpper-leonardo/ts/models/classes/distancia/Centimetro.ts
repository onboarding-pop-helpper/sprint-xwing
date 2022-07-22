class Centimetro extends Distancia {
  toCentimetro(): number {
    return this.valor;
  }

  toMetro(): number {
    return this.valor / 100;
  }

  toQuilometro(): number {
    return this.valor / 100000;
  }
}
