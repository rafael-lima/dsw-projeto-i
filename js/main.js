const creditos = document.querySelector("#creditos");

const modal = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

creditos.addEventListener("click", () => {
  modal.classList.add("modal-bg-on");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-bg-on");
});