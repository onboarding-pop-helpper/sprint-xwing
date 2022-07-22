"use strict";
const dom = window.document;
const buttonConverte = dom.getElementById("botao_converte");
const selectTipoMedida = dom.getElementById("tipo_medida");
const selectMedidaAtual = dom.getElementById("select_medida_atual");
const selectMedidaAlvo = dom.getElementById("select_medida_alvo");
const inputMedidaAtual = dom.getElementById("input_medida_atual");
const inputMedidaAlvo = dom.getElementById("input_medida_alvo");
let valorInicial;
let medidaAtual;
let medidaAlvo;
let valorFinal;
dom.body.onload = () => {
    selectMedidaAtual.innerHTML = '<option value="centimetro">Centímetro</option>';
    selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>';
    selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>';
    selectMedidaAlvo.innerHTML = '<option value="centimetro">Centímetro</option>';
    selectMedidaAlvo.innerHTML += '<option value="metro">Metro</option>';
    selectMedidaAlvo.innerHTML += '<option value="quilometro">Quilometro</option>';
};
selectTipoMedida.onchange = () => {
    switch (selectTipoMedida.value) {
        case "distancia":
            selectMedidaAtual.innerHTML = '<option value="centimetro">Centímetro</option>';
            selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>';
            selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>';
            selectMedidaAlvo.innerHTML = '<option value="centimetro">Centímetro</option>';
            selectMedidaAlvo.innerHTML += '<option value="metro">Metro</option>';
            selectMedidaAlvo.innerHTML += '<option value="quilometro">Quilometro</option>';
            break;
        case "temperatura":
            selectMedidaAtual.innerHTML = '<option value="celcius">Celcius</option>';
            selectMedidaAtual.innerHTML += '<option value="kelvin">Kelvin</option>';
            selectMedidaAtual.innerHTML += '<option value="fahrenheit">Fahrenheit</option>';
            selectMedidaAlvo.innerHTML = '<option value="celcius">Celcius</option>';
            selectMedidaAlvo.innerHTML += '<option value="kelvin">Kelvin</option>';
            selectMedidaAlvo.innerHTML += '<option value="fahrenheit">Fahrenheit</option>';
            break;
        case "moeda":
            selectMedidaAtual.innerHTML = '<option value="real">Real</option>';
            selectMedidaAtual.innerHTML += '<option value="dolar">Dólar</option>';
            selectMedidaAtual.innerHTML += '<option value="euro">Euro</option>';
            selectMedidaAlvo.innerHTML = '<option value="real">Real</option>';
            selectMedidaAlvo.innerHTML += '<option value="dolar">Dólar</option>';
            selectMedidaAlvo.innerHTML += '<option value="euro">Euro</option>';
            break;
    }
    inputMedidaAtual.value = "";
    inputMedidaAlvo.value = "";
};
buttonConverte.onclick = () => {
    valorInicial = Number(inputMedidaAtual.value);
    medidaAtual = selectMedidaAtual.value;
    medidaAlvo = selectMedidaAlvo.value;
    if (inputMedidaAtual.value.length == 0 || inputMedidaAtual.value == null) {
        window.alert("Informe o valor antes de realizar a conversão!");
    }
    else {
        let tipoMedida = selectTipoMedida.value;
        if (tipoMedida == "distancia") {
            inputMedidaAlvo.value = converterDistancia().toString();
        }
        else if (tipoMedida == "temperatura") {
            inputMedidaAlvo.value = converterTemperatura().toString();
        }
        else if (tipoMedida == "moeda") {
            inputMedidaAlvo.value = converterMoeda().toString();
        }
    }
};
// Funções para conversão de distância
function converterDistancia() {
    if (medidaAtual == "centimetro") {
        let centimetro = new Centimetro(valorInicial);
        if (medidaAlvo == "metro") {
            valorFinal = centimetro.toMetro();
        }
        else if (medidaAlvo == "quilometro") {
            valorFinal = centimetro.toQuilometro();
        }
        else {
            valorFinal = centimetro.toCentimetro();
        }
    }
    else if (medidaAtual == "metro") {
        let metro = new Metro(valorInicial);
        if (medidaAlvo == "centimetro") {
            valorFinal = metro.toCentimetro();
        }
        else if (medidaAlvo == "quilometro") {
            valorFinal = metro.toQuilometro();
        }
        else {
            valorFinal = metro.toMetro();
        }
    }
    else if (medidaAtual == "quilometro") {
        let quilometro = new Quilometro(valorInicial);
        if (medidaAlvo == "centimetro") {
            valorFinal = quilometro.toCentimetro();
        }
        else if (medidaAlvo == "metro") {
            valorFinal = quilometro.toMetro();
        }
        else {
            valorFinal = quilometro.toQuilometro();
        }
    }
    return valorFinal;
}
// Funções para conversão de temperatura
function converterTemperatura() {
    if (medidaAtual == "celcius") {
        let celcius = new Celcius(valorInicial);
        if (medidaAlvo == "kelvin") {
            valorFinal = celcius.toKelvin();
        }
        else if (medidaAlvo == "fahrenheit") {
            valorFinal = celcius.toFahrenheit();
        }
        else {
            valorFinal = celcius.toCelcius();
        }
    }
    else if (medidaAtual == "kelvin") {
        let kelvin = new Kelvin(valorInicial);
        if (medidaAlvo == "celcius") {
            valorFinal = kelvin.toCelcius();
        }
        else if (medidaAlvo == "fahrenheit") {
            valorFinal = kelvin.toFahrenheit();
        }
        else {
            valorFinal = kelvin.toKelvin();
        }
    }
    else if (medidaAtual == "fahrenheit") {
        let fahrenheit = new Fahrenheit(valorInicial);
        if (medidaAlvo == "celcius") {
            valorFinal = fahrenheit.toCelcius();
        }
        else if (medidaAlvo == "kelvin") {
            valorFinal = fahrenheit.toKelvin();
        }
        else {
            valorFinal = fahrenheit.toFahrenheit();
        }
    }
    return valorFinal;
}
// Funções para conversão de moeda
function converterMoeda() {
    if (medidaAtual == "real") {
        let real = new Real(valorInicial);
        if (medidaAlvo == "dolar") {
            valorFinal = real.toDolar();
        }
        else if (medidaAlvo == "euro") {
            valorFinal = real.toEuro();
        }
        else {
            valorFinal = real.toReal();
        }
    }
    else if (medidaAtual == "dolar") {
        let dolar = new Dolar(valorInicial);
        if (medidaAlvo == "real") {
            valorFinal = dolar.toReal();
        }
        else if (medidaAlvo == "euro") {
            valorFinal = dolar.toEuro();
        }
        else {
            valorFinal = dolar.toDolar();
        }
    }
    else if (medidaAtual == "euro") {
        let euro = new Euro(valorInicial);
        if (medidaAlvo == "real") {
            valorFinal = euro.toReal();
        }
        else if (medidaAlvo == "dolar") {
            valorFinal = euro.toDolar();
        }
        else {
            valorFinal = euro.toEuro();
        }
    }
    return valorFinal;
}
