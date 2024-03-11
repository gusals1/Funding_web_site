let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide_item = document.querySelector(".slide_container");




(function addEvent(){
  prev.addEventListener('click', translateContainer.bind(this,1));
  next.addEventListener('click', translateContainer.bind(this,-1));
  // 
})();

function translateContainer(direction){
  
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  slide_item.style.transitionDuration = '500ms';
  slide_item.style.transform = `translateX(${direction * 34}%)`;
  slide_item.ontransitionend = () => reorganizeEl(selectedBtn);
  // reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  slide_item.removeAttribute('style');
  (selectedBtn === 'prev') ? 
  slide_item.insertBefore(slide_item.lastElementChild, slide_item.firstChild): slide_item.appendChild(slide_item.firstElementChild);
}
