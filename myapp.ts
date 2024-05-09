window.onload = function () {
  console.log('This is a test to see if our Typescript file is online.')
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const footer_year: HTMLElement | null = document.querySelector(".footer_text");
  if (footer_year !== null) {
      footer_year.innerHTML = `© ${currentYear} wendydonleypierre.dev`;
  }

const reveals: NodeListOf<Element> = document.querySelectorAll(".reveal");
const dark_mode: HTMLElement | null = document.querySelector(".darkMode");
const submit_button: HTMLElement | null = document.querySelector(".submit-btn");
const image_hover: NodeListOf<Element> = document.querySelectorAll(".project_img_div");
const show_info: NodeListOf<Element> = document.querySelectorAll(".project_info_div");

const resume: HTMLElement | null = document.querySelector(".resume_button");

for (let i = 0; i < image_hover.length; i++) {
    if (image_hover[i] instanceof HTMLElement && show_info[i] instanceof HTMLElement) {
      image_hover[i].addEventListener("mouseover", () => {
        show_info[i].classList.toggle("show_project_info");
      });
    }
  }

  for (let i = 0; i < image_hover.length; i++) {
    if (show_info[i] instanceof HTMLElement) {
      show_info[i].addEventListener("mouseleave", () => {
        show_info[i].classList.toggle("show_project_info");
      });
    }
  }
  let current_mode: number = 1;
  if (dark_mode){

  dark_mode.addEventListener("click", () => {
    const home_left = document.querySelector(".left_side") as HTMLElement | null;
    const project = document.querySelector(".project_div") as HTMLElement | null;
    const footer_s = document.querySelector(".footer_style") as HTMLElement | null;
    const submit = document.querySelector(".submit-btn") as HTMLElement | null;
    const container = document.querySelector(".container_div") as HTMLElement | null;
    const input_bg = document.querySelectorAll(".input_class") as NodeListOf<HTMLElement>;
    const desc_p = document.querySelector(".title") as HTMLElement | null;
  
    if (current_mode == 1) {
      if (home_left && project && footer_s && submit && container && desc_p && footer_year) {
        home_left.style.backgroundColor = "#1a261d";
        project.style.backgroundColor = "#1a261d";
        footer_s.style.backgroundColor = "#1a261d";
        submit.style.backgroundColor = "#1a261d";
        footer_year.style.color = "white";
        desc_p.style.color = "white";
        container.classList.toggle("dark_mode");
        input_bg.forEach((element: HTMLElement) => {
          element.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        });
        document.documentElement.style.setProperty("--color", "white");
        current_mode = 0;
      }
    } else {
      if (home_left && project && footer_s && submit && container && desc_p && footer_year) {
        home_left.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        project.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        footer_s.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        submit.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        desc_p.style.color = "#1a261d";
        footer_year.style.color = "black";
        container.classList.toggle("dark_mode");
        input_bg.forEach((element: HTMLElement) => {
          element.style.backgroundColor = "#2d2d2d";
        });
        document.documentElement.style.setProperty("--color", "#373B44");
        current_mode = 1;
      }
    }
  });
  }

  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight: number = window.innerHeight;
      const elementTop: number = reveals[i].getBoundingClientRect().top;
      const elementVisible: number = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

}
