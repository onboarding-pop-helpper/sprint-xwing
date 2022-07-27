"use strict";
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
    constructor(inputMetro_L, outputCentimetro_L, inputCentimetro_L, outputMetro_L, inputFarenheit_L, outputCelcius_L, inputCelcius_L, outputFarenheit_L, inputReal_L, outputDolar_L, inputDolar_L, outputReal_L) {
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
    get getinputMetro() {
        return Number(this.inputMetro.value);
    }
    get getoutputCentimetro() {
        return this.outputCentimetro;
    }
    get getinputCentimetro() {
        return Number(this.inputCentimetro.value);
    }
    get getoutputMetro() {
        return this.outputMetro;
    }
    get getinputFarenheit() {
        return Number(this.inputFarenheit.value);
    }
    get getoutputCelcius() {
        return this.outputCelcius;
    }
    get getinputCelcius() {
        return Number(this.inputCelcius.value);
    }
    get getoutputFarenheit() {
        return this.outputFarenheit;
    }
    get getinputReal() {
        return Number(this.inputReal.value);
    }
    get getoutputDolar() {
        return this.outputDolar;
    }
    get getinputDolar() {
        return Number(this.inputDolar.value);
    }
    get getoutputReal() {
        return this.outputReal;
    }
    /**
    * Método que converte metro em centímetro
    */
    convertMetroCentimetro() {
        const numMetr = this.getinputMetro;
        const lblCent = this.getoutputCentimetro;
        const numCent = numMetr * 100;
        lblCent.innerHTML = (`<strong>${numCent.toFixed(3).replace('.', ',')}cm</strong>`);
    }
    /**
   * Método que converte centímetro em metro
   */
    convertCentimetroMetro() {
        const numCent = this.getinputCentimetro;
        const lblMet = this.getoutputMetro;
        const numMet = numCent / 100;
        lblMet.innerHTML = (`<strong>${numMet.toFixed(3).replace('.', ',')}m</strong>`);
    }
    /**
   * Método que converte graus farenheit em graus celcius
   */
    convertFarenheitCelcius() {
        const numFar = this.getinputFarenheit;
        const lblCel = this.getoutputCelcius;
        const numCel = ((numFar - 32) / 1.8);
        lblCel.innerHTML = (`<strong>${numCel.toFixed(3).replace('.', ',')}°C</strong>`);
    }
    /**
    * Método que converte graus celcius em graus farenheit
    */
    convertCelciusFarenheit() {
        const numCel = this.getinputCelcius;
        const lblFar = this.getoutputFarenheit;
        const numFar = (1.8 * numCel) + 32;
        lblFar.innerHTML = (`<strong>${numFar.toFixed(3).replace('.', ',')}°F</strong>`);
    }
    /**
    * Método que converte reais em dólares
    */
    convertRealDolar() {
        const numReal = this.getinputReal;
        const lblDol = this.getoutputDolar;
        const numDol = numReal / 5.5;
        lblDol.innerHTML = (`<strong>US$${numDol.toFixed(2)}</strong>`);
    }
    /**
    * Método que converte dólares em reais
    */
    convertDolarReal() {
        const numDol = this.getinputDolar;
        const lblReal = this.getoutputReal;
        const numReal = numDol * 5.5;
        lblReal.innerHTML = (`<strong>R$${numReal.toFixed(2).replace('.', ',')}</strong>`);
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
const inputMetro = dom.getElementById('inputMetro');
const outputCentimetro = dom.getElementById('lblCent');
/**
* Variáveis do método convertCentimetroMetro()
* @const {HTMLInputElement} inputCentimetro;
* @const {HTMLLabelElement} outputMetro;
*/
const inputCentimetro = dom.getElementById('inputCent');
const outputMetro = dom.getElementById('lblMet');
/**
* Variáveis do método convertFarenheitCelcius()
* @const {HTMLInputElement} inputFarenheit;
* @const {HTMLLabelElement} outputCelcius;
*/
const inputFarenheit = dom.getElementById('inputFaren');
const outputCelcius = dom.getElementById('lblCel');
/**
* Variáveis do método convertCelciusFarenheit()
* @const {HTMLInputElement} inputCelcius
* @const {HTMLLabelElement} outputFarenheit
*/
const inputCelcius = dom.getElementById('inputCelcius');
const outputFarenheit = dom.getElementById('lblFar');
/**
* Variáveis do método convertRealDolar()
* @const {HTMLInputElement} inputReal
* @const {HTMLLabelElement} outputDolar
*/
const inputReal = dom.getElementById('inputReal');
const outputDolar = dom.getElementById('lblDol');
/**
* Variáveis do método convertDolarReal()
* @const {HTMLInputElement} inputDolar
* @const {HTMLLabelElement} outputReal
*/
const inputDolar = dom.getElementById('inputDolar');
const outputReal = dom.getElementById('lblReal');
/**
* Instanciando objeto do tipo Conversao
* e passando todos os elementos HTML através do método construtor
* @object exercicio02
*/
const exercicio02 = new Conversao(inputMetro, outputCentimetro, inputCentimetro, outputMetro, inputFarenheit, outputCelcius, inputCelcius, outputFarenheit, inputReal, outputDolar, inputDolar, outputReal);
