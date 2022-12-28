const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const choosePlanButton = document.querySelectorAll(".plan button");
const mobileNavigation = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button");

for (let i = 0; i < choosePlanButton.length; i++) {
  choosePlanButton[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

// When clicked on "No" button Close the modal dialog and backdrop
const noButton = document.querySelector(".modal button");

console.dir(noButton);

noButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", function () {
  mobileNavigation.style.display = "none";
  closeModal();
});

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleButton.addEventListener("click", function () {
  mobileNavigation.style.display = "block";
  backdrop.style.display = "block";
});
