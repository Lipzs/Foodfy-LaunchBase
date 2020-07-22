const cards = document.querySelectorAll(".card");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCard = document.querySelector(".modal-card");

for(let card of cards) {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    
    let clone = card.cloneNode(true);
    modalCard.appendChild(clone);
  });
};

document.querySelector(".close-modal")
  .addEventListener("click", () => {
    modalCard.textContent = "";

    modalOverlay.classList.remove("active")
  });