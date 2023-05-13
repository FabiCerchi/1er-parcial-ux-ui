document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");

    if (darkModeEnabled === "true") {
        enableDarkMode();
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", function () {
        if (this.checked) {
            enableDarkMode();
            localStorage.setItem("darkModeEnabled", "true");
        } else {
            disableDarkMode();
            localStorage.setItem("darkModeEnabled", "false");
        }
    });

    function enableDarkMode() {
        /* BODY */
        document.body.classList.add("body-dark-mode");

        /* NAV  BACKGROUND */
        document.getElementById("nav_bar").classList.add("bg-dark", "navbar-dark");
        document.getElementById("nav_bar").classList.remove("bg-body-tertiary");
        /* NAV LOGO */
        document.getElementById("nav_logo_light").classList.add("d-none")
        document.getElementById("nav_logo_dark").classList.remove("d-none")
        /* NAV FONT COLOR */
        document.getElementById("name_toggle").classList.add("toggleDark");


        /* MAIN DARK MODE BG */
        document.getElementById("work_envolved").classList.add("section-main-dark-mode");
        document.getElementById("organization").classList.add("section-main-dark-mode");
        document.getElementById("partners").classList.add("section-main-dark-mode");
        /* MAIN IMG METAVERSO */
        document.getElementById("hero_metaverso").classList.add("main-img-metaverso-dm");
        svgs = document.getElementsByClassName("svg")
        Array.from(svgs).forEach(function (svg) {
            svg.classList.add("waves-dm");
        });

        partners_light_logo = document.getElementsByClassName("partner-light-logo")
        console.log(partners_light_logo)
        Array.from(partners_light_logo).forEach(function (logo) {
            logo.classList.add("d-none")
        });
    
        partners_dark_logo = document.getElementsByClassName("partner-dark-logo")
        console.log(partners_dark_logo)
        Array.from(partners_dark_logo).forEach(function (logo) {
            logo.classList.remove("d-none")
        });
    }

    function disableDarkMode() {

        /* BODY */
        document.body.classList.remove("body-dark-mode");
        /* NAV  BACKGROUND */
        document.getElementById("nav_bar").classList.remove("bg-dark", "navbar-dark");

        /* NAV LOGO */
        document.getElementById("nav_logo_light").classList.remove("d-none");
        document.getElementById("nav_logo_dark").classList.add("d-none")

        /* SECTION AND MAIN */
        document.getElementById("work_envolved").classList.remove("section-main-dark-mode");
        document.getElementById("organization").classList.remove("section-main-dark-mode");
        document.getElementById("partners").classList.remove("section-main-dark-mode");
        document.getElementById("svg_1").classList.remove("section-main-dark-mode");
        document.getElementById("svg_2").classList.remove("section-main-dark-mode");
        document.getElementById("svg_3").classList.remove("section-main-dark-mode");
        document.getElementById("svg_4").classList.remove("section-main-dark-mode");

        document.getElementById("hero_metaverso").classList.remove("main-img-metaverso-dm");
        svgs = document.getElementsByClassName("svg")
        Array.from(svgs).forEach(function (svg) {
            svg.classList.remove("waves-dm");
        });

        partners_light_logo = document.getElementsByClassName("partner-light-logo")
        console.log(partners_light_logo)
        Array.from(partners_light_logo).forEach(function (logo) {
            logo.classList.remove("d-none")
        });

        partners_dark_logo = document.getElementsByClassName("partner-dark-logo")
        console.log(partners_dark_logo)
        Array.from(partners_dark_logo).forEach(function (logo) {
            logo.classList.add("d-none")
        });
    }
});
