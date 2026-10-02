// Setas dos carrosséis (Como funciona e Tecnologias)
document.addEventListener("DOMContentLoaded",
    function () {
    var carrosseis = document.querySelectorAll(".carrossel");

    carrosseis.forEach(function (carrossel) {
        var trilho = carrossel.querySelector(".trilho");
        var esquerda = carrossel.querySelector(".seta.esq");
        var direita = carrossel.querySelector(".seta.dir");

        // anda uma "página" (80% da largura visível) para cada lado
        esquerda.addEventListener("click", function () {
            trilho.scrollBy({ left: -trilho.clientWidth * 0.8, behavior: "smooth" });
        });

        direita.addEventListener("click", function () {
            trilho.scrollBy({ left: trilho.clientWidth * 0.8, behavior: "smooth" });
        });
    });
});