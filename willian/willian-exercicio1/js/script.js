/** 
 *  WILLIAN MARTINS
 * Conversão de valores em diferentes unidades de medidas.
 */

/**
 * Função que converte metro em centímetro
 */
function convertMetroCentimetro() {
    const numMetr = document.getElementById('inputMetro')
    const lblCent = document.getElementById('lblCent')
    const numCent = Number(numMetr.value) * 100
    lblCent.innerHTML = (`<strong>${numCent.toFixed(3).replace('.', ',')}cm</strong>`)
}

/**
 * Função que converte centímetro em metro
 */
function convertCentimetroMetro() {
    const numCent = document.getElementById('inputCent')
    const lblMet = document.getElementById('lblMet')
    const numMet= Number(numCent.value) / 100
    lblMet.innerHTML = (`<strong>${numMet.toFixed(3).replace('.', ',')}m</strong>`)
}

/**
 * Função que converte graus farenheit em graus celcius
 */
function convertFarenheitCelcius() {
    const numFar = document.getElementById('inputFaren')
    const lblCel = document.getElementById('lblCel')
    const numCel= (Number(numFar.value) - 32) / 1.8
    lblCel.innerHTML = (`<strong>${numCel.toFixed(3).replace('.', ',')}°C</strong>`)
} 

/**
 * Função que converte graus celcius em graus farenheit
 */
function convertCelciusFarenheit() {
    const numCel = document.getElementById('inputCelcius')
    const lblFar = document.getElementById('lblFar')
    const numFar= (1.8 * Number(numCel.value)) + 32 
    lblFar.innerHTML = (`<strong>${numFar.toFixed(3).replace('.', ',')}°F</strong>`)
}

/**
 * Função que converte reais em dólares
 */
function convertRealDolar() {
    const numReal = document.getElementById('inputReal')
    const lblDol = document.getElementById('lblDol')
    const numDol=  Number(numReal.value) / 5.5
    lblDol.innerHTML = (`<strong>US$${numDol.toFixed(2)}</strong>`)
}

/**
 * Função que converte dólares em reais
 */
function convertDolarReal() {
    const numDol = document.getElementById('inputDolar')
    const lblReal = document.getElementById('lblReal')
    const numReal=  Number(numDol.value) * 5.5
    lblReal.innerHTML = (`<strong>R$${numReal.toFixed(2).replace('.', ',')}</strong>`)
}

