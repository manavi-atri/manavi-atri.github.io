
window.onload = handleOnLoad;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const COLORS = ["#3498db", "#27ae60" , "#e74c3c", "#e67e22", "#9b59b6", "#34495e"]

function handleOnLoad() {

  const slide1 = document.getElementsByClassName('slide-one')[0];
  const slide2 = document.getElementsByClassName('slide-two')[0];
  const slide3 = document.getElementsByClassName('slide-three')[0];
  const slide4 = document.getElementsByClassName('slide-four')[0];

  const slides = [slide1, slide2, slide3, slide4];
  const areSlidesScrolled = [0,0,0,0];
  document.onscroll = (event) => handleScroll(event, slides, areSlidesScrolled);
}

function handleScroll(e, slides, areSlidesScrolled){

  /* 
    How to make sure that the conditions are executed only once and not 
    for all the unnecessary scrolls?! 
  */

  let scrolledHeight = window.pageYOffset;
  const parts = slides.length;

  console.log(scrolledHeight);

  if(scrolledHeight <= HEIGHT) {
    console.log("CHECK 1");
    changeBackground(slides, areSlidesScrolled, 0);
  }

  if(scrolledHeight > HEIGHT-120){
    console.log("CHECK 2");
    changeBackground(slides, areSlidesScrolled, 1);
  }

  if(scrolledHeight > 2*HEIGHT-120){
    console.log("CHECK 3");
    changeBackground(slides, areSlidesScrolled, 2);
  }

  if(scrolledHeight > 3*HEIGHT-120){
    console.log("CHECK 4");
    changeBackground(slides, areSlidesScrolled, 3);
  }
}


function changeBackground(slides, areSlidesScrolled, index){

  areSlidesScrolled[index]=1;
  slides.forEach((slide) => {
    slide.style.background = slides[index].dataset.background;
  });
  document.body.style.background = slides[index].dataset.background;
}

