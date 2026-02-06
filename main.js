const campoData = document.querySelector("#data");
const formularioCard = document.querySelector("#formulario-card");
const containerFormularioCard = document.querySelector("#container-formulario");
const itensStatus = document.querySelectorAll(".status-item");
const itensPriodidade = document.querySelectorAll(".prioridade-item");
const btnAdicionarCard = document.querySelector("#btn-adicionar-card");

const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
const dataFormatada = `${ano}-${mes}-${dia}`;
campoData.min = dataFormatada;
campoData.value = dataFormatada;

itensStatus.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        if (!elemento.classList[2]) {
            itensStatus.forEach((item) => {
                item.classList.remove('status-selecionado');
            })

            elemento.classList.add('status-selecionado');
        };
    });
});

itensPriodidade.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        if (!elemento.classList[2]) {
            itensPriodidade.forEach((item) => {
                item.classList.remove('prioridade-selecionado');
            })

            elemento.classList.add('prioridade-selecionado');
        };
    });
});

btnAdicionarCard.addEventListener('click', (evento) => {
    formularioCard.style.display = 'flex';
    btnAdicionarCard.style.display = 'none';

    evento.stopPropagation();
});

window.addEventListener("click", (evento) => {
    if (!containerFormularioCard.contains(evento.target)) {
        formularioCard.reset();
        document.querySelector(".status-a-fazer").click();
        campoData.value = dataFormatada;
        document.querySelector(".prioridade-baixa").click();

        formularioCard.style.display = 'none';
        btnAdicionarCard.style.display = 'block';
    };
});

formularioCard.addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = new FormData(e.target);
    const status = document.querySelector(".status-selecionado").innerHTML;
    const data = dados.get('data');
    const prioridade = document.querySelector(".prioridade-selecionado").innerHTML;
    const titulo = dados.get('campo-titulo');
    const descricao = dados.get('campo-descricao');

    let colunaAlvo = "coluna-lista-1";
    let statusSelecionado = "a-fazer";

    if (status === "FAZENDO") {
        colunaAlvo = "coluna-lista-2";
        statusSelecionado = "fazendo";
    } else if (status === "FEITO") {
        colunaAlvo = "coluna-lista-3";
        statusSelecionado = "feito";
    };

    const elementoColuna = document.querySelector(`#${colunaAlvo}`);

    const card = document.createElement("li");
    card.classList.add("card");

    const paragrafoStatus = document.createElement("p");
    paragrafoStatus.classList.add("card-status", `card-status__${statusSelecionado}`);

    const iconeStatus = document.createElement("i");
    iconeStatus.classList.add("fa-regular", "fa-circle-dot");

    paragrafoStatus.append(iconeStatus);
    paragrafoStatus.innerHTML += status;

    const cardInfos = document.createElement("li");
    cardInfos.classList.add("card-infos");

    const paragrafoData = document.createElement("p");
    paragrafoData.classList.add("card-data");
    paragrafoData.innerText = `${data[8]}${data[9]}/${data[5]}${data[6]}/${data[0]}${data[1]}${data[2]}${data[3]}`;

    const paragrafoPrioridade = document.createElement("p");
    paragrafoPrioridade.classList.add("card-prioridade", `card-prioridade__${prioridade.toLowerCase()}`);
    paragrafoPrioridade.innerText = `Prioridade ${prioridade.toLowerCase()}`;

    cardInfos.append(paragrafoData, paragrafoPrioridade);

    const paragrafoTitulo = document.createElement("p");
    paragrafoTitulo.classList.add("card-titulo");
    paragrafoTitulo.innerText = titulo;

    const paragrafoDescricao = document.createElement("p");
    paragrafoDescricao.classList.add("card-descricao");
    paragrafoDescricao.innerText = descricao;

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("card-botoes");

    const elementoBtnEditar = document.createElement("button");
    elementoBtnEditar.classList.add("botao-card", "btn-editar");

    const iconeBtnEditar = document.createElement("i");
    iconeBtnEditar.classList.add("fa-solid", "fa-pen");

    elementoBtnEditar.append(iconeBtnEditar);

    const elementoBtnExcluir = document.createElement("button");
    elementoBtnExcluir.classList.add("botao-card", "btn-excluir");

    const iconeBtnExcluir = document.createElement("i");
    iconeBtnExcluir.classList.add("fa-solid", "fa-trash");

    elementoBtnExcluir.append(iconeBtnExcluir);

    containerBotoes.append(elementoBtnEditar, elementoBtnExcluir);

    card.append(paragrafoStatus, cardInfos, paragrafoTitulo, paragrafoDescricao, containerBotoes);

    elementoColuna.appendChild(card);

    elementoBtnExcluir.addEventListener('click', () => {
        elementoBtnExcluir.parentElement.parentElement.remove();
    });

    formularioCard.reset();
    document.querySelector(".status-a-fazer").click();
    campoData.value = dataFormatada;
    document.querySelector(".prioridade-baixa").click();
});
