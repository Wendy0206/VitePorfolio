

window.onload = function () {

  const image_hover = document.querySelectorAll(".project_img_div");
  const show_info = document.querySelectorAll(".project_info_div");
  let currentYear = new Date().getFullYear();
  const footer_year = document.querySelector(".footer_text");
  footer_year.innerHTML = '© ' + currentYear + ' wendydonleypierre.dev'


  for (let i = 0; i < image_hover.length; i++) {
   
    image_hover[i].addEventListener("mouseenter", () => {
      console.log('We get in');
       show_info[i].classList.toggle("show_project_info");

    });
  }

  for (let i = 0; i < image_hover.length; i++) {
   
    image_hover[i].addEventListener("mouseleave", () => {
      console.log('We get out');
       show_info[i].classList.toggle("show_project_info");

    });
  }






  var menu_off = document.querySelectorAll(".link_section");
  for (let i = 0; i < menu_off.length; i++) {
    menu_off[i].addEventListener('click', () => {
      var uncheck = document.querySelector("#ham-menu");
      uncheck.checked = false;
    })

  }


  var reveals = document.querySelectorAll(".reveal");
  const dark_mode = document.querySelector(".darkMode");
  const submit_button = document.querySelector(".submit-btn");


  const resume = document.querySelector(".resume_button");
  resume.addEventListener('click', () => {

  })










  var current_mode = 1;


  dark_mode.addEventListener("click", () => {
    var home_left = document.querySelector(".left_side");
    var project = document.querySelector(".project_div");
    var footer_s = document.querySelector(".footer_style");
    var submit = document.querySelector(".submit-btn");
    var container = document.querySelector(".container_div");
    var input_bg = document.querySelectorAll(".input_class");

    var desc_p = document.querySelector(".title");

    if (current_mode == 1) {
      home_left.style.backgroundColor = " #1a261d";
      project.style.backgroundColor = " #1a261d";
      footer_s.style.backgroundColor = " #1a261d";
      submit.style.backgroundColor = " #1a261d";
      footer_year.style.color = "white";

      desc_p.style.color = "white";

      container.classList.toggle("dark_mode");

      input_bg[0].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[1].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[2].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[3].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      document.documentElement.style.setProperty("--color", "white");
      current_mode = 0;
    }
    else {
      home_left.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      project.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      footer_s.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      submit.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      footer_year.style.color = "black";
      container.classList.toggle("dark_mode");
      input_bg[0].style.backgroundColor = "#2d2d2d";
      input_bg[1].style.backgroundColor = "#2d2d2d";
      input_bg[2].style.backgroundColor = "#2d2d2d";
      input_bg[3].style.backgroundColor = "#2d2d2d";
      document.documentElement.style.setProperty("--color", "#373B44");
      desc_p.style.color = " #1a261d";

      current_mode = 1;
    }
  });

  window.addEventListener("scroll", () => {
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
};

