/**
 * Variável que representa o documento
 * @var {Document} dom
 */
const dom = window.document;

/**
 * Criando uma classe com todas as conversões
 * @class Conversao
 */
class Conversao {
  private inputMetro: HTMLInputElement;
  private outputCentimetro: HTMLLabelElement;
  private inputCentimetro: HTMLInputElement;
  private outputMetro: HTMLLabelElement;
  private inputFarenheit: HTMLInputElement;
  private outputCelcius: HTMLLabelElement;
  private inputCelcius: HTMLInputElement;
  private outputFarenheit: HTMLLabelElement;
  private inputReal: HTMLInputElement; 
  private outputDolar: HTMLLabelElement;
  private inputDolar: HTMLInputElement; 
  private outputReal: HTMLLabelElement;

  constructor(inputMetro_L: HTMLInputElement, 
    outputCentimetro_L: HTMLLabelElement, 
    inputCentimetro_L: HTMLInputElement, 
    outputMetro_L: HTMLLabelElement, 
    inputFarenheit_L: HTMLInputElement,
    outputCelcius_L: HTMLLabelElement,
    inputCelcius_L: HTMLInputElement,
    outputFarenheit_L: HTMLLabelElement,
    inputReal_L: HTMLInputElement,
    outputDolar_L: HTMLLabelElement,
    inputDolar_L: HTMLInputElement,
    outputReal_L: HTMLLabelElement ) {
    this.inputMetro = inputMetro_L;
    this.outputCentimetro = outputCentimetro_L;
    this.inputCentimetro = inputCentimetro_L;
    this.outputMetro = outputMetro_L;
    this.inputFarenheit = inputFarenheit_L;
    this.outputCelcius = outputCelcius_L;
    this.inputCelcius = inputCelcius_L;
    this.outputFarenheit = outputFarenheit_L;
    this.inputReal = inputReal_L;
    this.outputDolar = outputDolar_L;
    this.inputDolar = inputDolar_L;
    this.outputReal = outputReal_L;
  }

  /**
   * Métodos GET (Não usei SET nesse exercício, pois os dados são inseridos todos através do método construtor)
   */
  get getinputMetro(): number {
    return Number(this.inputMetro.value);
  }

  get getoutputCentimetro(): HTMLLabelElement {
    return this.outputCentimetro;
  }

  get getinputCentimetro(): number {
    return Number(this.inputCentimetro.value);
  }

  get getoutputMetro(): HTMLLabelElement {
    return this.outputMetro;
  }

  get getinputFarenheit(): number {
    return Number(this.inputFarenheit.value);
  }

  get getoutputCelcius(): HTMLLabelElement {
    return this.outputCelcius;
  }

  get getinputCelcius(): number {
    return Number(this.inputCelcius.value);
  }

  get getoutputFarenheit(): HTMLLabelElement {
    return this.outputFarenheit;
  }

  get getinputReal(): number {
    return Number(this.inputReal.value);
  }

  get getoutputDolar(): HTMLLabelElement {
    return this.outputDolar;
  }

  get getinputDolar(): number {
    return Number(this.inputDolar.value);
  }

  get getoutputReal(): HTMLLabelElement {
    return this.outputReal;
  }

  /**
  * Método que converte metro em centímetro
  */
  convertMetroCentimetro(): void {
    const numMetr: number = this.getinputMetro;
    const lblCent: HTMLLabelElement = this.getoutputCentimetro;
    const numCent: number = numMetr * 100;
    lblCent.innerHTML = (`<strong>${numCent.toFixed(3).replace('.', ',')}cm</strong>`)  
  }

  /**
 * Método que converte centímetro em metro
 */
  convertCentimetroMetro(): void {
  const numCent: number = this.getinputCentimetro;
  const lblMet: HTMLLabelElement = this.getoutputMetro;
  const numMet: number = numCent / 100
  lblMet.innerHTML = (`<strong>${numMet.toFixed(3).replace('.', ',')}m</strong>`)
  }

  /**
 * Método que converte graus farenheit em graus celcius
 */
  convertFarenheitCelcius():void {
  const numFar: number = this.getinputFarenheit;
  const lblCel: HTMLLabelElement = this.getoutputCelcius;
  const numCel: number = ((numFar - 32) / 1.8)
  lblCel.innerHTML = (`<strong>${numCel.toFixed(3).replace('.', ',')}°C</strong>`)
  } 

  /**
  * Método que converte graus celcius em graus farenheit
  */
  convertCelciusFarenheit(): void {
  const numCel: number = this.getinputCelcius;
  const lblFar: HTMLLabelElement = this.getoutputFarenheit;
  const numFar= (1.8 * numCel) + 32 
  lblFar.innerHTML = (`<strong>${numFar.toFixed(3).replace('.', ',')}°F</strong>`)
  }

  /**
  * Método que converte reais em dólares
  */
  convertRealDolar(): void {
  const numReal: number = this.getinputReal;
  const lblDol: HTMLLabelElement = this.getoutputDolar;
  const numDol: number =  numReal / 5.5
  lblDol.innerHTML = (`<strong>US$${numDol.toFixed(2)}</strong>`)
  }

  /**
  * Método que converte dólares em reais
  */
  convertDolarReal(): void {
  const numDol: number = this.getinputDolar;
  const lblReal: HTMLLabelElement = this.getoutputReal;
  const numReal: number =  numDol * 5.5
  lblReal.innerHTML = (`<strong>R$${numReal.toFixed(2).replace('.', ',')}</strong>`)
  }
} 


/**
* Variáveis que representam os elementos HTML da página
*/

/**
* Variáveis do método convertMetroCentimetro()
* @const {HTMLInputElement} inputMetro;
* @const {HTMLLabelElement} outputCentimetro;
*/
const inputMetro = dom.getElementById('inputMetro') as HTMLInputElement;
const outputCentimetro = dom.getElementById('lblCent') as HTMLLabelElement;

/**
* Variáveis do método convertCentimetroMetro()
* @const {HTMLInputElement} inputCentimetro;
* @const {HTMLLabelElement} outputMetro;
*/
const inputCentimetro = dom.getElementById('inputCent') as HTMLInputElement;
const outputMetro = dom.getElementById('lblMet') as HTMLLabelElement;

/**
* Variáveis do método convertFarenheitCelcius()
* @const {HTMLInputElement} inputFarenheit;
* @const {HTMLLabelElement} outputCelcius;
*/
const inputFarenheit = dom.getElementById('inputFaren') as HTMLInputElement;
const outputCelcius = dom.getElementById('lblCel') as HTMLLabelElement;

/**
* Variáveis do método convertCelciusFarenheit()
* @const {HTMLInputElement} inputCelcius
* @const {HTMLLabelElement} outputFarenheit
*/
const inputCelcius = dom.getElementById('inputCelcius') as HTMLInputElement;
const outputFarenheit = dom.getElementById('lblFar') as HTMLLabelElement;

/**
* Variáveis do método convertRealDolar()
* @const {HTMLInputElement} inputReal
* @const {HTMLLabelElement} outputDolar
*/
const inputReal = dom.getElementById('inputReal') as HTMLInputElement;
const outputDolar = dom.getElementById('lblDol') as HTMLLabelElement;

/**
* Variáveis do método convertDolarReal()
* @const {HTMLInputElement} inputDolar
* @const {HTMLLabelElement} outputReal
*/
const inputDolar = dom.getElementById('inputDolar') as HTMLInputElement;
const outputReal = dom.getElementById('lblReal') as HTMLLabelElement;

/**
* Instanciando objeto do tipo Conversao
* e passando todos os elementos HTML através do método construtor
* @object exercicio02
*/
const exercicio02 = new Conversao( 
  inputMetro,
  outputCentimetro, 
  inputCentimetro, 
  outputMetro, 
  inputFarenheit, 
  outputCelcius,
  inputCelcius, 
  outputFarenheit,
  inputReal, 
  outputDolar,
  inputDolar, 
  outputReal
);