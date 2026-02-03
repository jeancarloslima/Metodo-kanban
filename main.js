const itensStatus = document.querySelectorAll(".status-item");
const btnExcluir = document.querySelectorAll(".btn-excluir");

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

btnExcluir.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        elemento.parentElement.parentElement.remove();
    });
});