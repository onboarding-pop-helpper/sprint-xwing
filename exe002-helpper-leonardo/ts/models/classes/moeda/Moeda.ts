abstract class Moeda extends Medida implements ConverteMoeda{
    abstract toReal(): number
    abstract toDolar(): number
    abstract toEuro(): number 
}