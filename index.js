function openMenu() {
  document.getElementById("menu").classList.remove("hidden");

  document.body.style.overflow = "hidden";
}

function closeMenu() {
  document.getElementById("menu").classList.add("hidden");

  document.body.style.overflow = "";
}

function openModal(type) {
  const modal = document.getElementById("modal");

  const box = document.getElementById("modalBox");

  document.getElementById("modalTitle").textContent = modalData[type].title;

  document.getElementById("modalText").textContent = modalData[type].text;

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    box.classList.add("active");
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("modal");

  const box = document.getElementById("modalBox");

  box.classList.remove("active");

  setTimeout(() => {
    modal.classList.add("hidden");

    document.body.style.overflow = "";
  }, 250);
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();

    closeMenu();
  }
});

fetch("https://api.github.com/users/ayushkpai")
  .then((response) => response.json())

  .then((user) => {
    document.getElementById("followers").textContent = user.followers;

    document.getElementById("following").textContent = user.following;

    document.getElementById("repoCount").textContent = user.public_repos;
  })

  .catch(() => {});
