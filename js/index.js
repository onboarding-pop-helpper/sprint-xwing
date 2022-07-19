var dom = window.document

var inputMedidaAtual = dom.getElementById('input_medida_atual')
var inputMedidaAlvo  = dom.getElementById('input_medida_alvo')

var selectTipoMedida  = dom.getElementById('tipo_medida')
var selectMedidaAtual = dom.getElementById('select_medida_atual')
var selectMedidaAlvo  = dom.getElementById('select_medida_alvo')

var valorInicial, medidaAtual, medidaAlvo

var valorFinal

function load() {
    
    selectMedidaAtual.innerHTML  = '<option value="centimetro">Centímetro</option>'
    selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>'
    selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>'
            
    selectMedidaAlvo.innerHTML   = '<option value="centimetro">Centímetro</option>'
    selectMedidaAlvo.innerHTML  += '<option value="metro">Metro</option>'
    selectMedidaAlvo.innerHTML  += '<option value="quilometro">Quilometro</option>'
}

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

function converter() {

    valorInicial = inputMedidaAtual.value

    medidaAtual = selectMedidaAtual.value
    medidaAlvo = selectMedidaAlvo.value

    if(inputMedidaAtual.value.length == 0 || inputMedidaAtual.value == null){
        window.alert('Informe o valor antes de realizar a conversão!')
    } else {
        var tipoMedida = selectTipoMedida.value

        if(tipoMedida == 'distancia'){
            inputMedidaAlvo.value = converterDistancia()
        } else if(tipoMedida == 'temperatura'){
            inputMedidaAlvo.value = converterTemperatura()
        } else if(tipoMedida == 'moeda') {
            inputMedidaAlvo.value = converterMoeda()
        }
    }
}

// Funções para conversão de distância
function converterDistancia () {
    if(medidaAtual == 'centimetro') {
        if(medidaAlvo == 'metro'){
            valorFinal = Number(centimetro(valorInicial, 'metro'))
        } else if(medidaAlvo == 'quilometro'){
            valorFinal = Number(centimetro(valorInicial, 'quilometro'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'metro') {
        if(medidaAlvo == 'centimetro'){
            valorFinal = Number(metro(valorInicial, 'centimetro'))
        } else if(medidaAlvo == 'quilometro'){
            valorFinal = Number(metro(valorInicial, 'quilometro'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'quilometro') {
        if(medidaAlvo == 'centimetro'){
            valorFinal = Number(quilometro(valorInicial, 'centimetro'))
        } else if(medidaAlvo == 'metro'){
            valorFinal = Number(quilometro(valorInicial, 'metro'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

function centimetro(medida, alvo) {
    if(alvo == 'metro'){
        return medida / 100
    } else if(alvo == 'quilometro'){
        return medida / 100000
    }
}

function metro(medida, alvo) {
    if(alvo == 'centimetro'){
        return medida * 100
    }else if(alvo == 'quilometro'){
        return medida / 1000
    }
}

function quilometro(medida, alvo) {
    if(alvo == 'centimetro'){
        return medida * 100000
    }else if(alvo == 'metro'){
        return medida * 1000
    }
}

// Funções para conversão de temperatura
function converterTemperatura () {
    if(medidaAtual == 'celcius') {
        if(medidaAlvo == 'kelvin'){
            valorFinal = Number(celcius(valorInicial, 'kelvin'))
        } else if(medidaAlvo == 'fahrenheit'){
            valorFinal = Number(celcius(valorInicial, 'fahrenheit'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'kelvin') {
        if(medidaAlvo == 'celcius'){
            valorFinal = Number(kelvin(valorInicial, 'celcius'))
        } else if(medidaAlvo == 'fahrenheit'){
            valorFinal = Number(kelvin(valorInicial, 'fahrenheit'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'fahrenheit') {
        if(medidaAlvo == 'celcius'){
            valorFinal = Number(fahrenheit(valorInicial, 'celcius'))
        } else if(medidaAlvo == 'kelvin'){
            valorFinal = Number(fahrenheit(valorInicial, 'kelvin'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

function celcius(medida, alvo) {
    if(alvo == 'kelvin'){
        return medida * 1 + 273.15
    } else if(alvo == 'fahrenheit'){
        return medida * 1.8 + 32
    }
}
function kelvin(medida, alvo) {
    if(alvo == 'celcius'){
        return medida - 273.15
    }else if(alvo == 'fahrenheit'){
        return (medida - 273.15) * 1.8 + 32
    }
}
function fahrenheit(medida, alvo) {
    if(alvo == 'celcius'){
        return (medida-32)/1.8
    }else if(alvo == 'kelvin'){
        return (medida - 32)/1.8 + 273.15
    }
}

// Funções para conversão de moeda
function converterMoeda () {
    if(medidaAtual == 'real') {
        if(medidaAlvo == 'dolar'){
            valorFinal = Number(real(valorInicial, 'dolar'))
        } else if(medidaAlvo == 'euro'){
            valorFinal = Number(real(valorInicial, 'euro'))
        } else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'dolar') {
        if(medidaAlvo == 'real'){
            valorFinal = Number(dolar(valorInicial, 'real'))
        } else if(medidaAlvo == 'euro'){
            valorFinal = Number(dolar(valorInicial, 'euro'))
        }else {
            valorFinal = valorInicial
        }
    } else if(medidaAtual == 'euro') {
        if(medidaAlvo == 'real'){
            valorFinal = Number(euro(valorInicial, 'real'))
        } else if(medidaAlvo == 'dolar'){
            valorFinal = Number(euro(valorInicial, 'dolar'))
        }else {
            valorFinal = valorInicial
        }
    }
    return valorFinal
}

function real(medida, alvo) {
    if(alvo == 'dolar'){
        return medida * 5.41
    } else if(alvo == 'euro'){
        return medida * 5.45
    }
}
function dolar(medida, alvo) {
    if(alvo == 'real'){
        return medida * 5.41
    }else if(alvo == 'euro'){
        return medida / 1.01
    }
}
function euro(medida, alvo) {
    if(alvo == 'real'){
        return medida * 5.45
    }else if(alvo == 'dolar'){
        return medida * 1.01
    }
}