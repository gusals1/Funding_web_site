let toggle_btn = document.querySelector('.hamburger>label');
let toggle_box = document.querySelector(".toggle_box");
let img = document.querySelector('.hamburger > label > img'); 

let count = 0;

let addname = 'active';

let on = "./image/close.png";
let off = "./image/hamburger.png";

toggle_btn.addEventListener("click",function(){
  
  toggle_box.classList.toggle("active");

  if(count % 2 == 0){
    img.setAttribute("src",on);
  }
  else{
    img.setAttribute("src",off);
  }
  
  count++
});
