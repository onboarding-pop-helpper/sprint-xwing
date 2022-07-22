/** WILLIAN MARTINS
 *  Decidi fazer uma função separada para cada conversão, mais ou menos do meio para o fim do projeto eu notei que não era uma ideia boa
 * 
 */

function convertMetroCentimetro() {
    let numMetr = document.getElementById('inputMetro')
    let lblCent = document.getElementById('lblCent')
    let numCent = Number(numMetr.value) * 100
    lblCent.innerHTML = (`<strong>${numCent.toFixed(3).replace('.', ',')}cm</strong>`)
}

function convertCentimetroMetro() {
    let numCent = document.getElementById('inputCent')
    let lblMet = document.getElementById('lblMet')
    let numMet= Number(numCent.value) / 100
    lblMet.innerHTML = (`<strong>${numMet.toFixed(3).replace('.', ',')}m</strong>`)
}

function convertFarenheitCelcius() {
    let numFar = document.getElementById('inputFaren')
    let lblCel = document.getElementById('lblCel')
    let numCel= (Number(numFar.value) - 32) / 1.8
    lblCel.innerHTML = (`<strong>${numCel.toFixed(3).replace('.', ',')}°C</strong>`)
} 


function convertCelciusFarenheit() {
    let numCel = document.getElementById('inputCelcius')
    let lblFar = document.getElementById('lblFar')
    let numFar= (1.8 * Number(numCel.value)) + 32 
    lblFar.innerHTML = (`<strong>${numFar.toFixed(3).replace('.', ',')}°F</strong>`)
}

function convertRealDolar() {
    let numReal = document.getElementById('inputReal')
    let lblDol = document.getElementById('lblDol')
    let numDol=  Number(numReal.value) / 5.5
    lblDol.innerHTML = (`<strong>US$${numDol.toFixed(2)}</strong>`)
}

function convertDolarReal() {
    let numDol = document.getElementById('inputDolar')
    let lblReal = document.getElementById('lblReal')
    let numReal=  Number(numDol.value) * 5.5
    lblReal.innerHTML = (`<strong>R$${numReal.toFixed(2).replace('.', ',')}</strong>`)
}

