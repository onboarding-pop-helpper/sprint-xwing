class Celcius extends Temperatura {
  constructor(valor: number) {
    super(valor);
  }

  toCelcius(): number {
    return this.valor;
  }
  toFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }
  toKelvin(): number {
    return this.valor + 273.15;
  }
}