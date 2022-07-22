abstract class Temperatura extends Medida implements ConverteTemperatura {
  abstract toCelcius(): number;
  abstract toFahrenheit(): number;
  abstract toKelvin(): number;
}