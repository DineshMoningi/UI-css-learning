const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const choosePlanButton = document.querySelectorAll(".plan button");
const mobileNavigation = document.querySelector(".mobile-nav");
const toggleButton = document.querySelector(".toggle-button");

for (let i = 0; i < choosePlanButton.length; i++) {
  choosePlanButton[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    if (modal) {
      modal.classList.add("open");
    }
  });
}

// When clicked on "No" button Close the modal dialog and backdrop
const noButton = document.querySelector(".modal button");

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function () {
  //   mobileNavigation.style.display = "none";
  mobileNavigation.classList.remove("open");
  closeModal();
});

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
}

toggleButton.addEventListener("click", function () {
  //   mobileNavigation.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNavigation.classList.add("open");
  backdrop.classList.add("open");
});
