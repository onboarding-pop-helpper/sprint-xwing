class Fahrenheit extends Temperatura {
  constructor(valor: number) {
    super(valor);
  }

  toCelcius(): number {
    return (this.valor - 32) / 1.8;
  }
  toFahrenheit(): number {
    return this.valor;
  }
  toKelvin(): number {
    return (this.valor - 32) / 1.8 + 273.15;
  }
}