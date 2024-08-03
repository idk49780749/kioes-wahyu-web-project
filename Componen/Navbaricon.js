const openNavbar = document.getElementById("open-navbar");
const navbarList = document.getElementById("navbar-list");

openNavbar.addEventListener("click", () => {
    navbarList.classList.toggle("hidden");
    navbarList.style.transition = "";
});
