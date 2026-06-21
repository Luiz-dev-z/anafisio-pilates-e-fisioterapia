// INFORMAÇÕES ----------------------------------------------------------------------------------------------------------------

const perguntas = document.querySelectorAll(".pergunta-card");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        const item = pergunta.parentElement;
        const resposta = item.querySelector(".bloco-resposta");

        item.classList.toggle("ativo");

        if (item.classList.contains("ativo")) {
            resposta.style.display = "block";
        } else {
            resposta.style.display = "none";
        }
    });
});