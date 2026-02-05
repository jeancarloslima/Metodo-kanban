const campoData = document.querySelector("#data");
const formularioCard = document.querySelector("#formulario-card");
const containerFormularioCard = document.querySelector("#container-formulario");
const itensStatus = document.querySelectorAll(".status-item");
const itensPriodidade = document.querySelectorAll(".prioridade-item");
const btnExcluir = document.querySelectorAll(".btn-excluir");
const btnAdicionarCard = document.querySelector("#btn-adicionar-card");

// Define o valor mínimo da data como hoje
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

btnExcluir.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        elemento.parentElement.parentElement.remove();
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
        campoData.value = dataFormatada;

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

    console.log(data);
    console.log(status);
    console.log(titulo);
    console.log(prioridade);
    console.log(descricao);
});