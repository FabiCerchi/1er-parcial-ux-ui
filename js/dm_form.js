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
        var currentPage = window.location.pathname;
        console.log(currentPage)
        if (currentPage == '/index.html') {
            document.getElementById("organization").classList.add("section-main-dark-mode");
            document.getElementById("partners").classList.add("section-main-dark-mode");
            document.getElementById("work_envolved").classList.add("section-main-dark-mode");
            
        }
        if (currentPage == '/register.html'){   
            console.log('ingrese')
            document.getElementById("main_register").classList.add("section-main-dark-mode");
        }
        document.getElementById("hero_metaverso").classList.add("main-img-metaverso-dm");
        document.body.classList.add("body-dark-mode");
        document.getElementById("nav_bar").classList.add("bg-dark", "navbar-dark");
        document.getElementById("nav_bar").classList.remove("bg-body-tertiary");
        document.getElementById("nav_logo_light").classList.add("d-none")
        document.getElementById("nav_logo_dark").classList.remove("d-none")
        document.getElementById("name_toggle").classList.add("toggleDark");

        svgs = document.getElementsByClassName("svg")
        console.log(svgs)
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
        var currentPage = window.location.pathname;
        console.log(currentPage)
        if (currentPage == '/index.html') {
            console
            document.getElementById("organization").classList.remove("section-main-dark-mode");
            document.getElementById("partners").classList.remove("section-main-dark-mode");
            document.getElementById("work_envolved").classList.remove("section-main-dark-mode");


        }
        if (currentPage == '/register.html'){   
            console.log('ingrese')
            document.getElementById("main_register").classList.remove("section-main-dark-mode");
        }
        document.body.classList.remove("body-dark-mode");
        document.getElementById("hero_metaverso").classList.remove("main-img-metaverso-dm");
        document.getElementById("nav_bar").classList.remove("bg-dark", "navbar-dark");
        document.getElementById("nav_logo_light").classList.remove("d-none");
        document.getElementById("nav_logo_dark").classList.add("d-none")
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


function submitForm(event) {
    event.preventDefault();

    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var subject = 'Registrame en Virbela Metaverso';
    var body = 'Hola soy ' + name + ' mi mail es: ' + email + '\n Me comunico por: ' + message + '\n\n Espero le guste la web!';
    var mailtoLink = 'mailto:gabriel.molina@unahur.edu.ar?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.open(mailtoLink);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('register_form');
    form.addEventListener('submit', submitForm);
  });