/* eslint-disable */

window.onload = function () {

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const footer_year = document.querySelector(".footer_text");
footer_year.innerHTML='© '+currentYear+' wendydonleypierre.dev'


  var reveals = document.querySelectorAll(".reveal");
  const dark_mode = document.querySelector(".darkMode");
  const submit_button = document.querySelector(".submit-btn");
  const image_hover = document.querySelectorAll(".project_img_div");
  const show_info = document.querySelectorAll(".project_info_div");

  const resume = document.querySelector(".resume_button");
  resume.addEventListener('click',()=>{
    console.log("this function was called : ");
  })


  for (let i = 0; i < image_hover.length; i++) {
 
    image_hover[i].addEventListener("mouseover", () => {
      show_info[i].classList.toggle("show_project_info");
    });
  }

  for (let i = 0; i < image_hover.length; i++) {
  
    show_info[i].addEventListener("mouseleave", () => {
      show_info[i].classList.toggle("show_project_info");
    });
  }

  submit_button.addEventListener("click", () => {
    const name = document.querySelector(".name_in");
    const phone = document.querySelector(".phone_in");
    const email = document.querySelector(".email_in");
    const comment = document.querySelector(".comment_in");
    let email_val = email.value;
  
    let regex = /\D/;
let bool = regex.test(phone.value);
    
    // if (!email.value.includes("@")) {
    //   // email.classList.add()
    //   console.log("this is not a valid email");
    //   return "stops here";
    // }
    if (bool) {
      console.log('it does contain letter');
    }

   // (name.value.length<2) {
    //   // email.classList.add()
    //   console.log("this is not a valid email");
    //   return "stops here";
    // }


  });


var current_mode=1;


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

      desc_p.style.color = "white";

      container.classList.toggle("dark_mode");

      input_bg[0].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[1].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[2].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      input_bg[3].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      document.documentElement.style.setProperty("--color", "white");
     current_mode=0;
    }
     else
     
     {
      home_left.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      project.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      footer_s.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      submit.style.backgroundColor = " rgba(33, 96, 47, 0.51)";
      container.classList.toggle("dark_mode");
      input_bg[0].style.backgroundColor = "#2d2d2d";
      input_bg[1].style.backgroundColor = "#2d2d2d";
      input_bg[2].style.backgroundColor = "#2d2d2d";
      input_bg[3].style.backgroundColor = "#2d2d2d";
      document.documentElement.style.setProperty("--color", "#373B44");
      
      desc_p.style.color = " #1a261d";

        current_mode=1;
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

