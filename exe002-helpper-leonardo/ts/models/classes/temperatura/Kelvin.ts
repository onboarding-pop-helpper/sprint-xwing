class Kelvin extends Temperatura {
    constructor(valor: number) {
        super(valor)
    }

    toCelcius(): number {
        return this.valor - 273.15
    }
    toFahrenheit(): number {
        return (this.valor - 273.15) * 1.8 + 32
    }
    toKelvin(): number {
        return this.valor
    }
}