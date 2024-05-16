

window.onload = function () {

  const menu_off = document.querySelectorAll<HTMLDivElement>(".link_section");
  const submit = document.querySelector(".submit-btn") as HTMLElement | null;
  const dark_mode: HTMLElement | null = document.querySelector(".darkMode");
  const image_hover: NodeListOf<Element> = document.querySelectorAll(".project_img_div");
  const show_info: NodeListOf<Element> = document.querySelectorAll(".project_info_div");



  for (let i = 0; i < image_hover.length; i++) {
    if (image_hover[i] instanceof HTMLElement && show_info[i] instanceof HTMLElement) {
      image_hover[i].addEventListener("mouseover", () => {    
        show_info[i].classList.toggle("show_project_info");
      });
    }
  }
 



  for (let i = 0; i < image_hover.length; i++) {
    if (show_info[i] instanceof HTMLElement) {
      show_info[i].addEventListener("mouseout", () => {
        show_info[i].classList.toggle("show_project_info");
      });
    }
  }






  menu_off.forEach((link: HTMLDivElement) => {
    link.addEventListener('click', () => {
      const uncheck = document.querySelector<HTMLInputElement>("#ham-menu");
      if (uncheck) {
        uncheck.checked = false;
      }
    });
  });
  
  const currentYear: number = new Date().getFullYear();
  const footer_year: HTMLElement | null = document.querySelector(".footer_text");
  if (footer_year !== null) {
    footer_year.innerHTML = `© ${currentYear} wendydonleypierre.dev`;
  }





  let current_mode: number = 1;
  if (dark_mode) {
    dark_mode.addEventListener("click", () => {
      
      const home_left = document.querySelector(".left_side") as HTMLElement | null;
      const project = document.querySelector(".project_div") as HTMLElement | null;
      const footer_s = document.querySelector(".footer_style") as HTMLElement | null;
      const container = document.querySelector(".container_div") as HTMLElement | null;
      const input_bg = document.querySelectorAll(".input_class") as NodeListOf<HTMLElement>;
      const desc_p = document.querySelector(".title") as HTMLElement | null;
      const chat = document.querySelector(".contact_text") as HTMLElement | null;
      const social = document.querySelectorAll(".social_a") as NodeListOf<HTMLElement>;
      const hi_line = document.querySelectorAll(".line_hi") as NodeListOf<HTMLElement>;
  
  
        if (home_left && project && footer_s && submit && container && desc_p && footer_year && hi_line && chat && social) {
          if (current_mode == 1) {

          home_left.style.backgroundColor = "#1a261d";
          project.style.backgroundColor = "#1a261d";
          footer_s.style.backgroundColor = "#1a261d";
          submit.style.backgroundColor = "#1a261d";
          footer_year.style.color = "white";
          desc_p.style.color = "white";
          chat.style.color = "white";
          social[0].style.color = "white";
          social[1].style.color = "white";
          social[2].style.color = "white";
          hi_line[0].style.color = "white";
          hi_line[1].style.color = "white";
          container.classList.toggle("dark_mode");
          input_bg.forEach((element: HTMLElement) => {
            element.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
          });
          document.documentElement.style.setProperty("--color", "white");
          current_mode = 0;
        }
       else {
   

          home_left.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
          project.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
          footer_s.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
          submit.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
          desc_p.style.color = "#1a261d";
          chat.style.color = "#1a261d";
          footer_year.style.color = "black";
          container.classList.toggle("dark_mode");
          hi_line[0].style.color = "black";
          hi_line[1].style.color = "black";
          social[0].style.color = "black";
          social[1].style.color = "black";
          social[2].style.color = "black";
          input_bg.forEach((element: HTMLElement) => {
            element.style.backgroundColor = "#2d2d2d";
          });
          document.documentElement.style.setProperty("--color", "#373B44");
          current_mode = 1;
        }
      }
    });
  }



window.addEventListener('scroll', () => {
  const windowBottom = window.scrollY + window.innerHeight;
  document.querySelectorAll<HTMLElement>('.reveal').forEach(element => {
    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    if (windowBottom > sectionTop) {
     
      element.classList.add('active');
    }
  });
});

const phone = document.querySelector(".phone_in")  as HTMLInputElement | null;
const email = document.querySelector(".email_in")  as HTMLInputElement | null;

// phone?.addEventListener("change",()=>{
//   console.log("This function was called");
//   phone.classList.remove('is-invalid');
// })
// email?.addEventListener("change",()=>{
//   console.log("This function was called");
//   email.classList.remove('is-invalid');
// })

if(submit){
  submit.addEventListener("click", () => {
 
    const comment = document.querySelector(".comment_in")  as HTMLInputElement | null;
  
  if(phone && email && comment ){

    let email_val: string = email.value;
  
    let regex: RegExp = /\D/;
    let bool: boolean = regex.test(phone.value);
  let invalid_index: number;
    if (!email_val.includes("@")) {
        email.classList.add('is-invalid');
   
    }
   
    if (bool || phone.value.length<7) {
   
      phone.classList.add('is-invalid');
   
    }
   

  }
    
  });
}



}
