const containerFormularioCard = document.querySelector("#formulario-card");
const itensStatus = document.querySelectorAll(".status-item");
const itensPriodidade = document.querySelectorAll(".prioridade-item");
const btnExcluir = document.querySelectorAll(".btn-excluir");
const btnAdicionarCard = document.querySelector("#btn-adicionar-card");

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

btnAdicionarCard.addEventListener('click', () => {
    containerFormularioCard.style.display = 'flex';
    btnAdicionarCard.style.display = 'none';
})