/* =========================================================
   SERENNΑ
   CADERNO ARGOLADO
   CONFIGURAÇÃO DE PREÇOS E OPÇÕES
========================================================= */


const precos = {

    "A6-80-0": 64.90,
    "A6-150-0": 69.90,

    "A5-80-0": 79.90,
    "A5-80-6": 83.70,
    "A5-80-12": 86.30,

    "A5-150-0": 90.90,
    "A5-150-6": 94.60,
    "A5-150-12": 98.10,

    "Colegial-80-0": 92.80,
    "Colegial-80-6": 99.60,
    "Colegial-80-12": 106.30,

    "Colegial-150-0": 111.70,
    "Colegial-150-6": 118.50,
    "Colegial-150-12": 125.27

};


let tamanhoSelecionado = "A6";

let folhasSelecionadas = "80";

let divisoriasSelecionadas = "0";



/* =========================================================
   ELEMENTOS
========================================================= */

const precoProduto =
    document.getElementById("precoProduto");

const totalProduto =
    document.getElementById("totalProduto");

const opcoesTamanho =
    document.querySelectorAll("#opcoesTamanho .opcao");

const opcoesFolhas =
    document.querySelectorAll("#opcoesFolhas .opcao");

const opcoesDivisorias =
    document.querySelectorAll("#opcoesDivisorias .opcao");



/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}



/* =========================================================
   ATUALIZAÇÃO DO PREÇO
========================================================= */

function atualizarPreco() {

    const chave =
        `${tamanhoSelecionado}-${folhasSelecionadas}-${divisoriasSelecionadas}`;

    const preco =
        precos[chave];

    if (preco === undefined) {

        precoProduto.textContent =
            "Selecione as opções";

        totalProduto.textContent =
            "—";

        return;

    }

    precoProduto.textContent =
        formatarPreco(preco);

    totalProduto.textContent =
        formatarPreco(preco);

}



/* =========================================================
   DIVISÓRIAS DISPONÍVEIS
========================================================= */

function atualizarDivisorias() {

    opcoesDivisorias.forEach(opcao => {

        const valor =
            opcao.dataset.valor;

        if (tamanhoSelecionado === "A6") {

            opcao.style.display =
                valor === "0" ? "inline-flex" : "none";

        } else {

            opcao.style.display =
                "inline-flex";

        }

    });


    if (tamanhoSelecionado === "A6") {

        divisoriasSelecionadas = "0";

        opcoesDivisorias.forEach(opcao => {

            opcao.classList.remove("selecionada");

            if (opcao.dataset.valor === "0") {

                opcao.classList.add("selecionada");

            }

        });

    }

}



/* =========================================================
   TAMANHO
========================================================= */

opcoesTamanho.forEach(opcao => {

    opcao.addEventListener("click", () => {

        opcoesTamanho.forEach(item => {

            item.classList.remove("selecionada");

        });


        opcao.classList.add("selecionada");


        tamanhoSelecionado =
            opcao.dataset.valor;


        atualizarDivisorias();

        atualizarPreco();

    });

});



/* =========================================================
   QUANTIDADE DE FOLHAS
========================================================= */

opcoesFolhas.forEach(opcao => {

    opcao.addEventListener("click", () => {

        opcoesFolhas.forEach(item => {

            item.classList.remove("selecionada");

        });


        opcao.classList.add("selecionada");


        folhasSelecionadas =
            opcao.dataset.valor;


        atualizarPreco();

    });

});



/* =========================================================
   DIVISÓRIAS
========================================================= */

opcoesDivisorias.forEach(opcao => {

    opcao.addEventListener("click", () => {

        opcoesDivisorias.forEach(item => {

            item.classList.remove("selecionada");

        });


        opcao.classList.add("selecionada");


        divisoriasSelecionadas =
            opcao.dataset.valor;


        atualizarPreco();

    });

});



/* =========================================================
   GALERIA
========================================================= */

const imagemPrincipal =
    document.getElementById("imagemPrincipal");

const miniaturas =
    document.querySelectorAll(".miniatura");


miniaturas.forEach(miniatura => {

    miniatura.addEventListener("click", () => {

        const novaImagem =
            miniatura.dataset.imagem;


        imagemPrincipal.src =
            novaImagem;


        miniaturas.forEach(item => {

            item.classList.remove("ativa");

        });


        miniatura.classList.add("ativa");

    });

});



/* =========================================================
   WHATSAPP
========================================================= */

const botaoWhatsApp =
    document.getElementById("botaoWhatsApp");


botaoWhatsApp.addEventListener("click", () => {


    const capaSelecionada =
        document.querySelector(
            'input[name="capa"]:checked'
        );


    if (!capaSelecionada) {

        alert(
            "Por favor, escolha uma capa antes de continuar."
        );

        return;

    }


    const chave =
        `${tamanhoSelecionado}-${folhasSelecionadas}-${divisoriasSelecionadas}`;


    const preco =
        precos[chave];


    if (preco === undefined) {

        alert(
            "Por favor, selecione todas as opções."
        );

        return;

    }


    let divisoriasTexto =
        "Sem divisórias";


    if (divisoriasSelecionadas === "6") {

        divisoriasTexto =
            "6 divisórias";

    }


    if (divisoriasSelecionadas === "12") {

        divisoriasTexto =
            "12 divisórias";

    }


    const mensagem =
        `Olá! Gostaria de solicitar um Caderno Argolado.%0A%0A` +

        `Tamanho: ${tamanhoSelecionado}%0A` +

        `Quantidade de folhas: ${folhasSelecionadas}%0A` +

        `Divisórias: ${divisoriasTexto}%0A` +

        `Capa escolhida: ${capaSelecionada.value}%0A` +

        `Valor do produto: ${formatarPreco(preco)}%0A` +

        `Frete: a informar posteriormente`;


    const numero =
        "5511994485595";


    const url =
        `https://wa.me/${numero}?text=${mensagem}`;


    window.open(
        url,
        "_blank"
    );

});



/* =========================================================
   INICIALIZAÇÃO
========================================================= */

atualizarDivisorias();

atualizarPreco();