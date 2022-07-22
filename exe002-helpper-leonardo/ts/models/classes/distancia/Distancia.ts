abstract class Distancia extends Medida implements ConverteDistancia {
  abstract toCentimetro(): number;
  abstract toMetro(): number;
  abstract toQuilometro(): number;
}