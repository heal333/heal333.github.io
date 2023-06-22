const scroll = document.querySelector(".scroll");
const section3 = document.querySelector(".section3");
// let viewHeight = window.innerHeight * 0.4;
let scrollPosition = 0;

// window.addEventListener("resize", function () {
//   viewHeight = window.innerHeight * 0.4;
//   console.log('resized')
// });

//to render the sidebar according to the scroll position
function scrollEffect(location) {
  scrollPosition = (window.scrollY / 3500) * 400;
  scrollPosition < 380
    ? (scroll.style.translate = `-2px ${scrollPosition}px`)
    : (scroll.style.translate = `-2px ${380}px`);
}

window.addEventListener("scroll", scrollEffect);
