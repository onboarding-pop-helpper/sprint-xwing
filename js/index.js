/**
 * Variável que representa o document
 * @var {Document} dom
 */
var dom = window.document

/**
 * Variáveis que representam os inputs medida atual e medida alvo
 * @var {HTMLElement | null} inputMedidaAtual
 * @var {HTMLElement | null} inputMedidaAlvo
 */
var inputMedidaAtual = dom.getElementById('input_medida_atual')
var inputMedidaAlvo  = dom.getElementById('input_medida_alvo')

/**
 * Variáveis que representam os selects tipo medida, medida atual e medida alvo
 * @var {HTMLElement | null} selectTipoMedida
 * @var {HTMLElement | null} selectMedidaAtual
 * @var {HTMLElement | null} selectMedidaAlvo
 */
var selectTipoMedida  = dom.getElementById('tipo_medida')
var selectMedidaAtual = dom.getElementById('select_medida_atual')
var selectMedidaAlvo  = dom.getElementById('select_medida_alvo')

/**
 * Variáveis que representam os valores selecionados nos selects, os valores são atribuidos nos métodos de conversão
 * @var {string} medidaAtual
 * @var {string} medidaAlvo
 */
var medidaAtual, medidaAlvo

/**
 * Variáveis que representam o valor final e o valor inicial das conversões
 * @var {number} valorFinal
 * @var {number} valorInicial
 */
var valorFinal, valorInicial

/** 
 * Função executada quando a página é carregada, inicializando o select de tipos de medidas.
*/
function load() {
    selectMedidaAtual.innerHTML  = '<option value="centimetro">Centímetro</option>'
    selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>'
    selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>'
            
    selectMedidaAlvo.innerHTML   = '<option value="centimetro">Centímetro</option>'
    selectMedidaAlvo.innerHTML  += '<option value="metro">Metro</option>'
    selectMedidaAlvo.innerHTML  += '<option value="quilometro">Quilometro</option>'
}

/**
 * Função executada quando ocorre uma mudança no select de tipos de medidas, atualizando os 
 * selects de medida atual e medida alvo.
 */
function onChange() {
    switch(selectTipoMedida.value) {
        case 'distancia':
            selectMedidaAtual.innerHTML  = '<option value="centimetro">Centímetro</option>'
            selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>'
            selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>'

            selectMedidaAlvo.innerHTML   = '<option value="centimetro">Centímetro</option>'
            selectMedidaAlvo.innerHTML  += '<option value="metro">Metro</option>'
            selectMedidaAlvo.innerHTML  += '<option value="quilometro">Quilometro</option>'

            break;
        case 'temperatura':
            selectMedidaAtual.innerHTML  = '<option value="celcius">Celcius</option>'
            selectMedidaAtual.innerHTML += '<option value="kelvin">Kelvin</option>'
            selectMedidaAtual.innerHTML += '<option value="fahrenheit">Fahrenheit</option>'

            selectMedidaAlvo.innerHTML   = '<option value="celcius">Celcius</option>'
            selectMedidaAlvo.innerHTML  += '<option value="kelvin">Kelvin</option>'
            selectMedidaAlvo.innerHTML  += '<option value="fahrenheit">Fahrenheit</option>'

            break;
        case 'moeda':
            selectMedidaAtual.innerHTML  = '<option value="real">Real</option>'
            selectMedidaAtual.innerHTML += '<option value="dolar">Dólar</option>'
            selectMedidaAtual.innerHTML += '<option value="euro">Euro</option>'

            selectMedidaAlvo.innerHTML   = '<option value="real">Real</option>'
            selectMedidaAlvo.innerHTML  += '<option value="dolar">Dólar</option>'
            selectMedidaAlvo.innerHTML  += '<option value="euro">Euro</option>'
            break;
    }
    inputMedidaAtual.value = ''
    inputMedidaAlvo.value  = ''
}

/**
 * Função executada no onClick do botão converte. 
 * Verifica se o campo input medida atual tem um valor válido. Se o valor for válido, executa 
 * a função de conversão correspondente ao tipo de medida selecionado, senão exibe um alerta.
 */
function converter() {
    medidaAtual = selectMedidaAtual.value
    medidaAlvo = selectMedidaAlvo.value

    if(inputMedidaAtual.value.length || inputMedidaAtual.value){
        var tipoMedida = selectTipoMedida.value
        valorInicial = inputMedidaAtual.value

        if(tipoMedida === 'distancia'){
            inputMedidaAlvo.value = converterDistancia()
        } else if(tipoMedida === 'temperatura'){
            inputMedidaAlvo.value = converterTemperatura()
        } else if(tipoMedida === 'moeda') {
            inputMedidaAlvo.value = converterMoeda()
        }
    } else {
        window.alert('Informe o valor antes de realizar a conversão!')
        inputMedidaAtual.value = ''
        inputMedidaAlvo.value  = ''
    }
}

/**
 * Função executada quando tipo de medida selecionado é distância.
 * Verifica as medidas selecionadas para a conversão e chama a função responsável por aquela conversão.
 * @returns {number} Valor final da conversão selecionada.
 */
function converterDistancia () {
    if(medidaAtual === 'centimetro') {
        if(medidaAlvo === 'metro'){
            valorFinal = Number(centimetro(valorInicial, 'metro'))
        } else if(medidaAlvo === 'quilometro'){
            valorFinal = Number(centimetro(valorInicial, 'quilometro'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'metro') {
        if(medidaAlvo === 'centimetro'){
            valorFinal = Number(metro(valorInicial, 'centimetro'))
        } else if(medidaAlvo === 'quilometro'){
            valorFinal = Number(metro(valorInicial, 'quilometro'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'quilometro') {
        if(medidaAlvo === 'centimetro'){
            valorFinal = Number(quilometro(valorInicial, 'centimetro'))
        } else if(medidaAlvo === 'metro'){
            valorFinal = Number(quilometro(valorInicial, 'metro'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

/**
 * Função executada quando a medida inicial selecionada é o centímetro, verificando a medida alvo para realizar a conversão
 * @param {number} medida - Valor a ser convertido
 * @param {string} alvo - Medida alvo da conversão
 * @returns {number} Valor final da conversão de centímetro para a medida alvo
 */
function centimetro(medida, alvo) {
    if(alvo === 'metro'){
        return medida / 100
    } else if(alvo === 'quilometro'){
        return medida / 100000
    }
}

/**
 * Função executada quando a medida inicial selecionada é o metro, verificando a medida alvo para realizar a conversão
 * @param {number} medida - Valor a ser convertido
 * @param {string} alvo - Medida alvo da conversão
 * @returns {number} Valor final da conversão de metro para a medida alvo
 */
function metro(medida, alvo) {
    if(alvo === 'centimetro'){
        return medida * 100
    }else if(alvo === 'quilometro'){
        return medida / 1000
    }
}

/**
 * Função executada quando a medida inicial selecionada é o quilômetro, verificando a medida alvo para realizar a conversão
 * @param {number} medida - Valor a ser convertido
 * @param {string} alvo - Medida alvo da conversão
 * @returns {number} Valor final da conversão de quilômetro para a medida alvo
 */
function quilometro(medida, alvo) {
    if(alvo === 'centimetro'){
        return medida * 100000
    }else if(alvo === 'metro'){
        return medida * 1000
    }
}

/**
 * Função executada quando tipo de medida selecionado é temperatura.
 * Verifica as medidas selecionadas para a conversão e chama a função responsável por aquela conversão.
 * @returns {number} Valor final da conversão selecionada.
 */
function converterTemperatura () {
    if(medidaAtual === 'celcius') {
        if(medidaAlvo === 'kelvin'){
            valorFinal = Number(celcius(valorInicial, 'kelvin'))
        } else if(medidaAlvo === 'fahrenheit'){
            valorFinal = Number(celcius(valorInicial, 'fahrenheit'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'kelvin') {
        if(medidaAlvo === 'celcius'){
            valorFinal = Number(kelvin(valorInicial, 'celcius'))
        } else if(medidaAlvo === 'fahrenheit'){
            valorFinal = Number(kelvin(valorInicial, 'fahrenheit'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'fahrenheit') {
        if(medidaAlvo === 'celcius'){
            valorFinal = Number(fahrenheit(valorInicial, 'celcius'))
        } else if(medidaAlvo === 'kelvin'){
            valorFinal = Number(fahrenheit(valorInicial, 'kelvin'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

/**
 * Função executada quando a medida inicial selecionada é celcius, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de celcius para a temperatura selecionada.
 */
function celcius(medida, alvo) {
    if(alvo === 'kelvin'){
        return medida * 1 + 273.15
    } else if(alvo === 'fahrenheit'){
        return medida * 1.8 + 32
    }
}
/**
 * Função executada quando a medida inicial selecionada é kelvin, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de kelvin para a temperatura selecionada.
 */
function kelvin(medida, alvo) {
    if(alvo === 'celcius'){
        return medida - 273.15
    }else if(alvo === 'fahrenheit'){
        return (medida - 273.15) * 1.8 + 32
    }
}

/**
 * Função executada quando a medida inicial selecionada é fahrenheit, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de fahrenheit para a temperatura selecionada.
 */
function fahrenheit(medida, alvo) {
    if(alvo === 'celcius'){
        return (medida-32)/1.8
    }else if(alvo === 'kelvin'){
        return (medida - 32)/1.8 + 273.15
    }
}

/**
 * Função executada quando tipo de medida selecionado é moeda.
 * Verifica as medidas selecionadas para a conversão e chama a função responsável por aquela conversão.
 * @returns {number} Valor final da conversão selecionada.
 */
function converterMoeda () {
    if(medidaAtual === 'real') {
        if(medidaAlvo === 'dolar'){
            valorFinal = Number(real(valorInicial, 'dolar'))
        } else if(medidaAlvo === 'euro'){
            valorFinal = Number(real(valorInicial, 'euro'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'dolar') {
        if(medidaAlvo === 'real'){
            valorFinal = Number(dolar(valorInicial, 'real'))
        } else if(medidaAlvo === 'euro'){
            valorFinal = Number(dolar(valorInicial, 'euro'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual === 'euro') {
        if(medidaAlvo === 'real'){
            valorFinal = Number(euro(valorInicial, 'real'))
        } else if(medidaAlvo === 'dolar'){
            valorFinal = Number(euro(valorInicial, 'dolar'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

/**
 * Função executada quando a medida inicial selecionada é real, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de real para a moeda selecionada.
 */
function real(medida, alvo) {
    if(alvo === 'dolar'){
        return medida * 5.41
    } else if(alvo === 'euro'){
        return medida * 5.45
    }
}

/**
 * Função executada quando a medida inicial selecionada é dólar, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de dólar para a moeda selecionada.
 */
function dolar(medida, alvo) {
    if(alvo === 'real'){
        return medida * 5.41
    }else if(alvo === 'euro'){
        return medida / 1.01
    }
}

/**
 * Função executada quando a medida inicial selecionada é euro, verificando a medida alvo para realizar a conversão.
 * @param {number} medida - Valor a ser convertido.
 * @param {string} alvo - Medida alvo da conversão.
 * @returns {number} Valor final da conversão de euro para a moeda selecionada.
 */
function euro(medida, alvo) {
    if(alvo === 'real'){
        return medida * 5.45
    }else if(alvo === 'dolar'){
        return medida * 1.01
    }
}