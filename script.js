const botao = document.getElementById("surpresa-btn");
const surpresa = document.getElementById("surpresa");

botao.addEventListener("click", () => {
  surpresa.classList.remove("hidden");
  setTimeout(() => {
    surpresa.style.opacity = 1;
  }, 50);
  botao.disabled = true;
  botao.innerText = "Surpresa revelada 💖";
});
