document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");
  
    if (darkModeEnabled === "true") {
      enableDarkMode();
      darkModeToggle.checked = true;
    }
  
    darkModeToggle.addEventListener("change", function() {
      if (this.checked) {
        enableDarkMode();
        localStorage.setItem("darkModeEnabled", "true");
      } else {
        disableDarkMode();
        localStorage.setItem("darkModeEnabled", "false");
      }
    });
  
    function enableDarkMode() {
      document.body.classList.add("body-dark-mode");

      /* NAV  BACKGROUND */
      document.getElementById("nav_bar").classList.add("bg-dark");
      document.getElementById("nav_bar").classList.remove("bg-body-tertiary");
      /* NAV LOGO */
      document.getElementById("nav_logo_light").classList.add("d-none")
      document.getElementById("nav_logo_dark").classList.remove("d-none")
      /* NAV FONT COLOR */
      
      /* MAIN DARK MODE BG */
      document.getElementById("work_envolved").classList.add("main-dark-mode");
      document.getElementById("organization").classList.add("main-dark-mode");
      document.getElementById("partners").classList.add("main-dark-mode");
      document.getElementById("svg_1").classList.add("main-dark-mode");
      document.getElementById("svg_2").classList.add("main-dark-mode");
      document.getElementById("svg_3").classList.add("main-dark-mode");
      document.getElementById("svg_4").classList.add("main-dark-mode");
    }
  
    function disableDarkMode() {
      /* NAV  BACKGROUND */
      document.body.classList.remove("body-dark-mode");
      document.getElementById("nav_bar").classList.remove("bg-dark");

      /* NAV LOGO */
      document.getElementById("nav_logo_light").classList.remove("d-none");
      document.getElementById("nav_logo_dark").classList.add("d-none")

      /* SECTION AND MAIN */
      document.getElementById("work_envolved").classList.remove("main-dark-mode");
      document.getElementById("organization").classList.remove("main-dark-mode");
      document.getElementById("partners").classList.remove("main-dark-mode");
      document.getElementById("svg_1").classList.remove("main-dark-mode");
      document.getElementById("svg_2").classList.remove("main-dark-mode");
      document.getElementById("svg_3").classList.remove("main-dark-mode");
      document.getElementById("svg_4").classList.remove("main-dark-mode");

    }
  });
  