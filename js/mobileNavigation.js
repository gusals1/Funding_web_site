let back = document.querySelector(".mobile_blur");
let menu = document.querySelector(".mobile_navigation");

let body = document.querySelector("body");
let tabletToggle = document.querySelector(".tablet_toggle");
let closeButton = document.querySelector(".close_btn");

console.log(body);
tabletToggle.addEventListener("click",function(){
  back.classList.add("open_back");
  menu.classList.add("open_nav");
  body.classList.add("scroll");
});

closeButton.addEventListener("click",function(){
  back.classList.remove("open_back");
  menu.classList.remove("open_nav");
  body.classList.remove("scroll");
});