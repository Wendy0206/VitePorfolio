/* eslint-disable */

window.onload = function() {
  var reveals = document.querySelectorAll(".reveal");
const dark_mode = document.querySelector(".darkMode");
sessionStorage.setItem("mode", 1);



var home_left = document.querySelector(".left_side");
 var project = document.querySelector(".project_div");
 var footer_s = document.querySelector(".footer_style");
var submit = document.querySelector(".submit-btn");
var container= document.querySelector(".container_div");
var input_bg= document.querySelectorAll(".input_class");
var desc_p= document.querySelector(".title");


dark_mode.addEventListener('click', ()=> {
 console.log("this function was called : ");

 if(sessionStorage.getItem("mode")== 1){
dark_mode.style.background= "linear-gradient(to right bottom, #1a261d 50%, #b1b8ca 50%)"; 
home_left.style.backgroundColor=" #1a261d";
project.style.backgroundColor=" #1a261d";
footer_s.style.backgroundColor=" #1a261d";
submit.style.backgroundColor=" #1a261d";
desc_p.style.color="white";

container.classList.toggle('dark_mode');

input_bg[0].style.backgroundColor="rgba(33, 96, 47, 0.51)";
input_bg[1].style.backgroundColor="rgba(33, 96, 47, 0.51)";
input_bg[2].style.backgroundColor="rgba(33, 96, 47, 0.51)";
input_bg[3].style.backgroundColor="rgba(33, 96, 47, 0.51)";

sessionStorage.setItem("mode", 0);


}

else{

dark_mode.style.background = " linear-gradient(to right bottom, #b1b8ca 50%, #1a261d 50%)"; 
home_left.style.backgroundColor=" rgba(33, 96, 47, 0.51)";
project.style.backgroundColor=" rgba(33, 96, 47, 0.51)";
footer_s.style.backgroundColor=" rgba(33, 96, 47, 0.51)";
submit.style.backgroundColor=" rgba(33, 96, 47, 0.51)";
 container.classList.toggle('dark_mode');
 input_bg[0].style.backgroundColor="#2d2d2d";
   input_bg[1].style.backgroundColor="#2d2d2d";
     input_bg[2].style.backgroundColor="#2d2d2d";
     input_bg[3].style.backgroundColor="#2d2d2d";
  desc_p.style.color=" #1a261d";

sessionStorage.setItem("mode", 1);

}


});



window.addEventListener("scroll",()=> {
  
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



}
