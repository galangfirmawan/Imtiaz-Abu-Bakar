
document.addEventListener("DOMContentLoaded", function () {
    // Tahun otomatis pada footer
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Tutup navbar setelah menu dipilih di perangkat mobile
    const navbar = document.getElementById("mainNavbar");
    const navLinks = document.querySelectorAll(
        "#mainNavbar .nav-link, #mainNavbar .btn-navbar"
    );

    if (navbar && typeof bootstrap !== "undefined") {
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navbar.classList.contains("show")) {
                    const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);
                    collapse.hide();
                }
            });
        });
    }
});
