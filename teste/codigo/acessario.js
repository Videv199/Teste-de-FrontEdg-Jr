document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".btn"); // Todos os botões "COMPRAR"
    const modal = document.getElementById("confirm-modal");
    const modalImg = document.getElementById("modal-img");
    const modalText = document.getElementById("modal-text");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card"); // Pega o card do produto clicado
            const imgSrc = card.querySelector("img").src; // Obtém a imagem do produto
            const productName = card.querySelector(".card-title").textContent; // Nome do produto

            modalImg.src = imgSrc; // Define a imagem no modal
            modalText.textContent = `Deseja mesmo comprar ${productName}?`; // Define o texto

            modal.style.display = "flex"; // Mostra o modal
        });
    });

    // Confirma a compra (pode adicionar lógica aqui)
    confirmBtn.addEventListener("click", function () {
        alert("Compra confirmada! 🎉");
        modal.style.display = "none";
    });

    // Cancela a compra e fecha o modal
    cancelBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal se clicar fora
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
