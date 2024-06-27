

window.onload = function() {
  console.log('lets see this file is called')
  const menuOff = document.querySelectorAll(".link_section") as NodeListOf<HTMLDivElement>;
  const submit = document.querySelector(".submit-btn") as HTMLButtonElement;
  const darkMode = document.querySelector(".darkMode") as HTMLElement;
  const imageHover = document.querySelectorAll(".project_img_div") as NodeListOf<HTMLDivElement>;
  const showInfo = document.querySelectorAll(".project_info_div") as NodeListOf<HTMLDivElement>;

  imageHover[0].addEventListener("mouseover", () => {
    console.log('we hover the first one lets see');
    showInfo[0].classList.add("show_project_info");
    showInfo[1].classList.remove("show_project_info");
    showInfo[2].classList.remove("show_project_info");
  });

  imageHover[1].addEventListener("mouseover", () => {
    showInfo[1].classList.add("show_project_info");
    showInfo[0].classList.remove("show_project_info");
    showInfo[2].classList.remove("show_project_info");
  });

  imageHover[2].addEventListener("mouseover", () => {
    showInfo[2].classList.add("show_project_info");
    showInfo[0].classList.remove("show_project_info");
    showInfo[1].classList.remove("show_project_info");
  });

  imageHover[3].addEventListener("mouseover", () => {
    showInfo[3].classList.add("show_project_info");
    showInfo[4].classList.remove("show_project_info");
    showInfo[5].classList.remove("show_project_info");
  });

  imageHover[4].addEventListener("mouseover", () => {
    showInfo[4].classList.add("show_project_info");
    showInfo[3].classList.remove("show_project_info");
    showInfo[5].classList.remove("show_project_info");
  });

  imageHover[5].addEventListener("mouseover", () => {
    showInfo[5].classList.add("show_project_info");
    showInfo[3].classList.remove("show_project_info");
    showInfo[4].classList.remove("show_project_info");
  });

  for (let i = 0; i < imageHover.length; i++) {
    showInfo[i].addEventListener("mouseleave", () => {
      showInfo[i].classList.remove("show_project_info");
    });
  }

  menuOff.forEach(link => {
    link.addEventListener("click", () => {
      const uncheck = document.querySelector("#ham-menu") as HTMLInputElement;
      if (uncheck) {
        uncheck.checked = false;
      }
    });
  });

  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector(".footer_text") as HTMLElement | null;
  if (footerYear !== null) {
    footerYear.innerHTML = `© ${currentYear} wendydonleypierre.dev`;
  }

  let currentMode = 1;
  darkMode.addEventListener("click", () => {
    const homeLeft = document.querySelector(".left_side") as HTMLElement | null;
    const project = document.querySelectorAll(".all_project_div") as NodeListOf<HTMLDivElement>;
    const footerS = document.querySelector(".footer_style") as HTMLElement | null;
    const container = document.querySelector(".container_div") as HTMLElement | null;
    const awesome = document.querySelectorAll(".about_img i") as NodeListOf<HTMLElement>;
    const inputBg = document.querySelectorAll(".input_class") as NodeListOf<HTMLDivElement>;
    const chat = document.querySelector(".contact_text") as HTMLElement | null;
    const social = document.querySelectorAll(".social_a") as NodeListOf<HTMLAnchorElement>;
    const hiLine = document.querySelectorAll(".line_hi") as NodeListOf<HTMLDivElement>;

    if (currentMode === 1) {
      darkMode.classList.remove("fa-moon");
      darkMode.classList.add("fa-sun");
      if (homeLeft) homeLeft.style.backgroundColor = "#1a261d";
      project[0].style.backgroundColor = "#1a261d";
      project[1].style.backgroundColor = "#1a261d";
      if (footerS) footerS.style.backgroundColor = "#1a261d";
      submit.style.backgroundColor = "#1a261d";
      if (footerYear) footerYear.style.color = "white";

      if (chat) chat.style.color = "white";
      social.forEach(element => element.style.color = "white");
      hiLine.forEach(element => element.style.color = "white");
      if (container) container.classList.toggle("dark_mode");
      inputBg.forEach(element => {
        element.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      });

      awesome.forEach(element => {
        element.style.color = "white";
      });
      document.documentElement.style.setProperty("--color", "white");
      currentMode = 0;
    } else {
      darkMode.classList.remove("fa-remove");
      darkMode.classList.add("fa-moon");
      if (homeLeft) homeLeft.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      project[0].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      project[1].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      if (footerS) footerS.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
      submit.style.backgroundColor = "rgba(33, 96, 47, 0.51)";

      if (chat) chat.style.color = "#1a261d";
      if (footerYear) footerYear.style.color = "black";
      if (container) container.classList.toggle("dark_mode");
      awesome.forEach(element => {
        element.style.color = "black";
      });
      hiLine.forEach(element => element.style.color = "black");
      social.forEach(element => element.style.color = "black");
      inputBg.forEach(element => {
        element.style.backgroundColor = "#2d2d2d";
      });
      document.documentElement.style.setProperty("--color", "#373B44");
      currentMode = 1;
    }
  });

  window.addEventListener("scroll", () => {
    if ((window.scrollY + window.innerHeight)== document.body.scrollHeight) {
      console.log('hey we get got the bottom');
      const reveals = document.querySelectorAll(".reveal") as NodeListOf<HTMLElement>;
      reveals.forEach(element => {
        element.classList.add("active");
      });
    }
  });

  submit.addEventListener("click", () => {
    // const comment = document.querySelector(".comment_in") as HTMLInputElement | null;
    // const phone = document.querySelector(".phone_in") as HTMLInputElement | null;
    // const email = document.querySelector(".email_in") as HTMLInputElement | null;
  });
};
