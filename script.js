/* Função para Funcionamento do Menu Mobile */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* Função para o Funcionamento do Bloco FAQ */
document.addEventListener("DOMContentLoaded", function () {

    const faqBoxes = document.querySelectorAll(".faq-box");

    faqBoxes.forEach(box => {
        const pergunta = box.querySelector(".faq-box-duvida");
        const resposta = box.querySelector(".faq-box-resposta");

        pergunta.addEventListener("click", () => {

            box.classList.toggle("active");

            if (box.classList.contains("active")) {
                resposta.style.maxHeight = resposta.scrollHeight + "px";
            } else {
                resposta.style.maxHeight = null;
            }

        });
    });

});

