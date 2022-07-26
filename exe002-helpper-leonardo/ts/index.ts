/**
 * Variável que representa o document
 */
const dom = window.document;

/**
 * Variável que representa o botão de conversão
 */
const buttonConverte   = dom.getElementById("botao_converte") as HTMLInputElement;

/**
 * Variável que representa o select de tipo de medida.
 */
const selectTipoMedida = dom.getElementById("tipo_medida") as HTMLSelectElement;
/**
 * Variável que representa o select de medida atual.
 */
const selectMedidaAtual = dom.getElementById("select_medida_atual") as HTMLSelectElement;
/**
 * Variável que representa o select de tipo de medida.
 */
const selectMedidaAlvo  = dom.getElementById("select_medida_alvo") as HTMLSelectElement;

/**
 * Variável que representa o input de medida atual.
 */
const inputMedidaAtual = dom.getElementById("input_medida_atual") as HTMLInputElement;
/**
 * Variável que representa o input de medida alvo.
 */
const inputMedidaAlvo  = dom.getElementById("input_medida_alvo") as HTMLInputElement;

/**
 * Variável que representa o valor inicial da conversão.
 */
let valorInicial : number

/**
 * Variável que representa a medida atual da conversão.
 */
let medidaAtual : String

/**
 * Variável que representa a medida alvo da conversão.
 */
let medidaAlvo : String

/**
 * Variável que representa o valor final da conversão.
 */
let valorFinal : number;

/**
 * Função executadaquando o body é carregado, inicializando os selects de medida atual e medida alvo.
 */
dom.body.onload = () => {  
  selectMedidaAtual.innerHTML  = '<option value="centimetro">Centímetro</option>';
  selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>';
  selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>';

  selectMedidaAlvo.innerHTML  = '<option value="centimetro">Centímetro</option>';
  selectMedidaAlvo.innerHTML += '<option value="metro">Metro</option>';
  selectMedidaAlvo.innerHTML += '<option value="quilometro">Quilometro</option>';
}

/**
 * Função executada quando o valor do select de tipos de medida é alterado, atualizando os selects de medida
 * atual e medida alvo.
 */
selectTipoMedida.onchange = () => {
  switch (selectTipoMedida.value) {
    case "distancia":
      selectMedidaAtual.innerHTML  = '<option value="centimetro">Centímetro</option>';
      selectMedidaAtual.innerHTML += '<option value="metro">Metro</option>';
      selectMedidaAtual.innerHTML += '<option value="quilometro">Quilometro</option>';

      selectMedidaAlvo.innerHTML  = '<option value="centimetro">Centímetro</option>';
      selectMedidaAlvo.innerHTML += '<option value="metro">Metro</option>';
      selectMedidaAlvo.innerHTML += '<option value="quilometro">Quilometro</option>';
      break;

    case "temperatura":
      selectMedidaAtual.innerHTML  = '<option value="celcius">Celcius</option>';
      selectMedidaAtual.innerHTML += '<option value="kelvin">Kelvin</option>';
      selectMedidaAtual.innerHTML += '<option value="fahrenheit">Fahrenheit</option>';

      selectMedidaAlvo.innerHTML  = '<option value="celcius">Celcius</option>';
      selectMedidaAlvo.innerHTML += '<option value="kelvin">Kelvin</option>';
      selectMedidaAlvo.innerHTML += '<option value="fahrenheit">Fahrenheit</option>';
      break;

    case "moeda":
      selectMedidaAtual.innerHTML  = '<option value="real">Real</option>';
      selectMedidaAtual.innerHTML += '<option value="dolar">Dólar</option>';
      selectMedidaAtual.innerHTML += '<option value="euro">Euro</option>';

      selectMedidaAlvo.innerHTML  = '<option value="real">Real</option>';
      selectMedidaAlvo.innerHTML += '<option value="dolar">Dólar</option>';
      selectMedidaAlvo.innerHTML += '<option value="euro">Euro</option>';
      break;
  }
  inputMedidaAtual.value = "";
  inputMedidaAlvo.value = "";
}

/**
 * Função executada quando o botão de conversão é clicado.
 * Valida o input de medida atual, se for válido executa a função de conversão, senão, 
 * exibe um alerta. 
 */
buttonConverte.onclick = () => {
  valorInicial = Number(inputMedidaAtual.value);

  medidaAtual = selectMedidaAtual.value;
  medidaAlvo  = selectMedidaAlvo.value;

  if (inputMedidaAtual.value.length || inputMedidaAtual.value) {
    let tipoMedida = selectTipoMedida.value;

    if (tipoMedida === "distancia") {
      inputMedidaAlvo.value = converterDistancia().toString();
    } else if (tipoMedida === "temperatura") {
      inputMedidaAlvo.value = converterTemperatura().toString();
    } else if (tipoMedida === "moeda") {
      inputMedidaAlvo.value = converterMoeda().toString();
    }
  } else {
    window.alert("Informe o valor antes de realizar a conversão!");
  }
}

/**
 * Função executada quando o tipo de medida selecionado é distância.
 * Verifica as medidas selecionadas para a conversão, instancia um objeto da classe da conversão, e 
 * chama a função da conversão selecionada
 * @returns {number} Valor final da conversão selecionada.
 */
function converterDistancia() : number {
  if (medidaAtual === "centimetro") {
    let centimetro = new Centimetro(valorInicial)
    if (medidaAlvo === "metro") {
      valorFinal = centimetro.toMetro()
    } else if (medidaAlvo === "quilometro") {
      valorFinal = centimetro.toQuilometro()
    } else {
      valorFinal = centimetro.toCentimetro()
    }
  } else if (medidaAtual === "metro") {
    let metro = new Metro(valorInicial)
    if (medidaAlvo === "centimetro") {
      valorFinal = metro.toCentimetro()
    } else if (medidaAlvo === "quilometro") {
      valorFinal = metro.toQuilometro()
    } else {
      valorFinal = metro.toMetro()
    }
  } else if (medidaAtual === "quilometro") {
    let quilometro = new Quilometro(valorInicial)
    if (medidaAlvo === "centimetro") {
      valorFinal = quilometro.toCentimetro()
    } else if (medidaAlvo === "metro") {
      valorFinal = quilometro.toMetro()
    } else {
      valorFinal = quilometro.toQuilometro()
    }
  }
  return valorFinal;
}

/**
 * Função executada quando o tipo de medida selecionado é temperatura.
 * Verifica as medidas selecionadas para a conversão, instancia um objeto da classe da conversão, e 
 * chama a função da conversão selecionada
 * @returns {number} Valor final da conversão selecionada.
 */
function converterTemperatura() : number{
  if (medidaAtual === "celcius") {
    let celcius = new Celcius(valorInicial)
    if (medidaAlvo === "kelvin") {
      valorFinal = celcius.toKelvin()
    } else if (medidaAlvo === "fahrenheit") {
      valorFinal = celcius.toFahrenheit()
    } else {
      valorFinal = celcius.toCelcius()
    }
  } else if (medidaAtual === "kelvin") {
    let kelvin = new Kelvin(valorInicial)
    if (medidaAlvo === "celcius") {
      valorFinal = kelvin.toCelcius()
    } else if (medidaAlvo === "fahrenheit") {
      valorFinal = kelvin.toFahrenheit()
    } else {
      valorFinal = kelvin.toKelvin()
    }
  } else if (medidaAtual === "fahrenheit") {
    let fahrenheit = new Fahrenheit(valorInicial);
    if (medidaAlvo === "celcius") {
      valorFinal = fahrenheit.toCelcius()
    } else if (medidaAlvo === "kelvin") {
      valorFinal = fahrenheit.toKelvin()
    } else {
      valorFinal = fahrenheit.toFahrenheit()
    }
  }
  return valorFinal;
}

/**
 * Função executada quando o tipo de medida selecionado é moeda.
 * Verifica as medidas selecionadas para a conversão, instancia um objeto da classe da conversão, e 
 * chama a função da conversão selecionada
 * @returns {number} Valor final da conversão selecionada.
 */
function converterMoeda() : number {
  if (medidaAtual === "real") {
    let real = new Real(valorInicial)
    if (medidaAlvo === "dolar") {
      valorFinal = real.toDolar()
    } else if (medidaAlvo === "euro") {
      valorFinal = real.toEuro()
    } else {
      valorFinal = real.toReal()
    }
  } else if (medidaAtual === "dolar") {
    let dolar = new Dolar(valorInicial);
    if (medidaAlvo === "real") {
      valorFinal = dolar.toReal()
    } else if (medidaAlvo === "euro") {
      valorFinal = dolar.toEuro()
    } else {
      valorFinal = dolar.toDolar()
    }
  } else if (medidaAtual === "euro") {
    let euro = new Euro(valorInicial);
    if (medidaAlvo === "real") {
      valorFinal = euro.toReal()
    } else if (medidaAlvo === "dolar") {
      valorFinal = euro.toDolar()
    } else {
      valorFinal = euro.toEuro()
    }
  }
  return valorFinal;
}