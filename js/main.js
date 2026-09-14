const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");

if (navbarToggle && navbarMenu) {
    navbarMenu.classList.remove("active");

    navbarToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");

        const isOpen = navbarMenu.classList.contains("active");

        navbarToggle.setAttribute("aria-expanded", isOpen);

        navbarToggle.innerHTML = isOpen
            ? '<i class="fa fa-times"></i>'
            : '<i class="fa fa-bars"></i>';
    });
}