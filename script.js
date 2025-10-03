// Questão 1
const BtnFuncional = document.getElementById('computar');
alert("Questão 1: O botão '" + BtnFuncional.id + "' está funcionando");

// Questão 2
function CalcularArea(fundamento, elevacao) {
    return (fundamento * elevacao) / 2;
}

let botao = document.getElementById('computar');
let inputBase = document.getElementById('fundamento');
let inputAltura = document.getElementById('elevacao');
let resultado = document.getElementById('saida');

botao.onclick = function() {
    let fundamento = Number(inputBase.value);
    let elevacao = Number(inputAltura.value);

    let area = CalcularArea(fundamento, elevacao);

    resultado.innerText = "A área do triângulo é: " + area;
};

// Questão 3 (renomeada)
function EhParOuImpar(valor) {
    return valor % 2 === 0;
}

let btnChecarParidade = document.getElementById("analisar");
let campoEntrada = document.getElementById("valorDigitado");
let exibirResultado = document.getElementById("saidaAnalise");

btnChecarParidade.onclick = function() {
    let numero = Number(campoEntrada.value);

    if (EhParOuImpar(numero)) {
        exibirResultado.innerText = "O número " + numero + " é par";
    } else {
        exibirResultado.innerText = "O número " + numero + " é ímpar";
    }
};

// Questão 4
const botaoMaior = document.getElementById('compararValores');
const inputNum1 = document.getElementById('valor1');
const inputNum2 = document.getElementById('valor2');
const inputNum3 = document.getElementById('valor3');
const resultadoMaior = document.getElementById('maiorResultado');

botaoMaior.onclick = function() {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    const n3 = Number(inputNum3.value);

    let maior = n1;
    if (n2 > maior) maior = n2;
    if (n3 > maior) maior = n3;

    resultadoMaior.innerText = "O valor maior é: " + maior;
};

// Questão 5 (renomeada)
const campoCelsius = document.getElementById('temperaturaC');
const botaoConverter = document.getElementById('converterF');
const exibirFahrenheit = document.getElementById('saidaFahrenheit');

botaoConverter.onclick = function() {
    const graus = Number(campoCelsius.value);
    const temperatura = (graus * 9 / 5) + 32;

    exibirFahrenheit.innerText = "O resultado é " + temperatura + "!";
};

// Questão 6 (renomeada)
const entradaInicial = document.getElementById('valorInicial');
const entradaTaxa = document.getElementById('taxa');
const entradaDuracao = document.getElementById('duracao');
const mostrarMontante = document.getElementById('saidaMontante');

function CalcularMontanteInvestimento() {
    const principal = Number(entradaInicial.value);
    const taxa = Number(entradaTaxa.value) / 100;
    const tempo = Number(entradaDuracao.value);

    const montante = principal * (1 + taxa) ** tempo;

    mostrarMontante.innerText = "O resultado é: R$" + montante.toFixed(2) + "!";
}

// Questão 7
function divisivelPor3(numero) {
    return numero % 3 === 0;
}

function verificarDivisao() {
    const numero = Number(document.getElementById('valorDivisao').value);
    const resultado = document.getElementById('veredito');

    if (divisivelPor3(numero)) {
        resultado.innerText = `O número ${numero} é divisível por 3.`;
    } else {
        resultado.innerText = `O número ${numero} NÃO é divisível por 3.`;
    }
}

// Questão 8 (renomeada)
function MostrarNomeMes() {
    const numeroEscolhido = Number(document.getElementById('numeroMes').value);
    const campoMes = document.getElementById('nomeMes');

    const meses = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];
    if (numeroEscolhido < 1 || numeroEscolhido > 12) {
        campoMes.innerText = "Número inválido! Digite um número de 1 a 12.";
    } else {
        campoMes.innerText = "O mês correspondente é: " + meses[numeroEscolhido - 1];
    }
}

// Questão 9
function calcularsalario() {
    const salarioatual = Number(document.getElementById('renda').value);
    let salarioComajuste = document.getElementById('rendaCorrigida');

    let percentual;

    if (salarioatual <= 280) {
        percentual = 20;
    } else if (salarioatual > 280 && salarioatual < 701) {
        percentual = 15;
    } else if (salarioatual > 700 && salarioatual < 1501) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    const valorAumento = salarioatual * (percentual / 100);
    const novoSalario = salarioatual + valorAumento;

    salarioComajuste.innerText =
        `Salário antigo: R$ ${salarioatual.toFixed(2)}
Percentual: ${percentual}%
Aumento: R$ ${valorAumento.toFixed(2)}
Novo salário: R$ ${novoSalario.toFixed(2)}`;
}

// Questão 10 (renomeada)
function estimarCombustivel() {
    const verba = Number(document.getElementById('quantia').value);
    const exibirEconomia = document.getElementById('respostaEconomia');

    const precoLitro = 5;
    const kmPorLitro = 20;

    const litros = verba / precoLitro;
    const distancia = litros * kmPorLitro;

    exibirEconomia.innerText =
        `Dá para: ${litros.toFixed(2)} litros de combustível e andar ${distancia.toFixed(2)} km.`;
}

// Questão 11
function calcularTempo() {
    const Tempo = Number(document.getElementById('tempoMinutos').value);
    const printresultado = document.getElementById('tempoConvertido');

    let Horas = Tempo / 60;
    let Dias = Tempo / 1440;

    printresultado.innerText = `${Tempo} minutos é equivalente à ${Horas.toFixed(2)} Horas e à aproximadamente ${Dias.toFixed(0)} Dias`;
}

// Questão 12 (renomeada)
function CalcularServico() {
    const valorConta = Number(document.getElementById('valorConta').value);
    const exibirGorjeta = document.getElementById('valorGorjeta');

    let taxaServico = valorConta * 0.1;
    let contaFinal = taxaServico + valorConta;

    exibirGorjeta.innerText = `Valor da Gorjeta: R$ ${taxaServico.toFixed(2)}\nValor Total: R$ ${contaFinal.toFixed(2)}`;
}

// Questão 13 (renomeada)
function analisarEmprestimo() {
    const rendimento = Number(document.getElementById('rendaSolicitante').value);
    const parcela = Number(document.getElementById('valorParcela').value);
    const mostrarAnalise = document.getElementById('avaliacaoEmprestimo');

    if (parcela > rendimento * 0.2) {
        mostrarAnalise.innerText = "Empréstimo não pode ser concedido.";
    } else {
        mostrarAnalise.innerText = "Empréstimo pode ser concedido.";
    }
}

// Questão 14
function calcularDescontoPrevidenciario() {
    const salario = Number(document.getElementById('rendaContribuinte').value);
    const resultado = document.getElementById('valorDesconto');

    let desconto = salario * 0.11;

    if (desconto > 334.29) {
        desconto = 334.29;
    }

    resultado.innerText = `Desconto: R$ ${desconto.toFixed(2)}`;
}

// Questão 15
function calcularRendimentoPoupanca() {
    const deposito = Number(document.getElementById('valorAplicado').value);
    const resultado = document.getElementById('rendimentoFinal');

    const rendimento = deposito * 0.007;
    const total = deposito + rendimento;

    resultado.innerText = `Valor inicial: R$ ${deposito.toFixed(2)}\nRendimento: R$ ${rendimento.toFixed(2)}\nTotal após 1 mês: R$ ${total.toFixed(2)}`;
}
