const btnExcluir = document.querySelectorAll(".btn-excluir");

btnExcluir.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        elemento.parentElement.parentElement.remove();
    })
})