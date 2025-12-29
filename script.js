const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", function (e) {

    const submenu = this.nextElementSibling;

    if (!submenu || !submenu.classList.contains("dropdown-menu")) return;

    e.preventDefault();

    submenu.classList.toggle("show");
  });
});
