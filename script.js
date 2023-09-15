"use strict";
const body = document.querySelector("body");
const scroll = document.querySelector(".scroll");
const section3 = document.querySelector(".section3");
const sidebar = document.querySelector(".sidebar");
const side0 = document.querySelector(".side0");
const side1 = document.querySelector(".side1");
const side2 = document.querySelector(".side2");
const side3 = document.querySelector(".side3");
// let viewHeight = window.innerHeight * 0.4;
let scrollPosition = 0;
const headerDetails = document.querySelector(".headerDetails");
const headerProj = document.querySelector(".headerProj");
const headerEdu = document.querySelector(".headerEdu");
const headerContact = document.querySelector(".headerContact");
const hire = document.querySelector(".hire");
const backdrop = document.querySelector(".backdrop");
const contact = document.querySelector(".contact");
const contactClose = document.querySelector(".contactClose");
const header = document.querySelector("header");

// window.addEventListener("resize", function () {
//   viewHeight = window.innerHeight * 0.4;
//   console.log('resized')
// });

//to render the sidebar according to the scroll position
const headerList = [headerDetails, headerProj, headerEdu, headerContact];
const sideList = [side0,side1,side2,side3]
function scrollEffect(location) {
  headerList.forEach((elem) => {
    elem.classList.remove("headerFocus");
  });
  sideList.forEach((elem)=>{
    elem.classList.remove("sideFocus")
  })
  scrollPosition = location / 11.5; //(window.scrollY / 3500) * 400;
  // scroll.style.translate = `-2px ${scrollPosition}px`;
  // location <= 4320
  //   ? (scroll.style.translate = `-2px ${scrollPosition}px`)
  //   : (scroll.style.translate = `-2px ${375.65}px`);
  if (location < 880) {
    headerDetails.classList.add("headerFocus");
    side0.classList.add("sideFocus");
    sidebar.style.color = "black";
  } else if (location < 1960 && location >= 880) {
    headerProj.classList.add("headerFocus");
    side1.classList.add("sideFocus");
    sidebar.style.color = "white";
  } else if (location < 3040 && location >= 1960) {
    headerEdu.classList.add("headerFocus");
    side2.classList.add("sideFocus");
    sidebar.style.color = "white";
  } else if (location >= 3040) {
    headerContact.classList.add("headerFocus");
    side3.classList.add("sideFocus");
    sidebar.style.color = "black";
  }
}

// function sidebarSize(location) {
//   if (location < 880) {
//     headerDetails.classList.add("headerFocus");
//   } else if (location < 1960 && location >= 880) {
//     headerProj.classList.add("headerFocus");
//   } else if (location < 3040 && location >= 1960) {headerEdu.classList.add("headerFocus")}
//   else if (location < 4120 && location >= 3040) {headerContact.classList.add("headerFocus")}
//   else if (location >= 4120) console.log("end");
// }

window.addEventListener("scroll", () => {
  scrollEffect(window.scrollY);
});

//using event bubbling
sidebar.addEventListener("click", function (event) {
  const clickedOn = event.target.className.split(" ")[0]; //to get only the first class
  if (clickedOn === "side0") window.scrollTo({ top: 0, behavior: "smooth" });
  else if (clickedOn === "side1")
    window.scrollTo({ top: 1080, behavior: "smooth" });
  else if (clickedOn === "side2")
    window.scrollTo({ top: 2160, behavior: "smooth" });
  else if (clickedOn === "side3")
    window.scrollTo({ top: 3240, behavior: "smooth" });
  else if (clickedOn === "side4")
    window.scrollTo({ top: 4320, behavior: "smooth" });
});
header.addEventListener("click", function (event) {
  const clickedOn = event.target.className.split(" ")[0]; // to prevent bugs when adding multiple class
  console.log(clickedOn);
  if (clickedOn === "headerDetails")
    window.scrollTo({ top: 0, behavior: "smooth" });
  else if (clickedOn === "headerProj")
    window.scrollTo({ top: 1080, behavior: "smooth" });
  else if (clickedOn === "headerEdu")
    window.scrollTo({ top: 2160, behavior: "smooth" });
  else if (clickedOn === "headerContact")
    window.scrollTo({ top: 3240, behavior: "smooth" });
  else if (clickedOn === "hire") {
    backdrop.classList.remove("hidden");
    contact.classList.remove("hidden");
  }
});

hire.addEventListener("click", function () {
  backdrop.classList.remove("hidden");
  contact.classList.remove("hidden");
  // body.classList.add("noScroll");
});
contactClose.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  contact.classList.add("hidden");
  body.classList.remove("noScroll");
});
backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  contact.classList.add("hidden");
  body.classList.remove("noScroll");
});

//////////////////projcts/////////
