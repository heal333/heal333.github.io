"use strict";
const body = document.querySelector("body");
const scroll = document.querySelector(".scroll");
const section0 = document.querySelector(".section0");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
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
const projectPlane = document.querySelector(".projectPlane");
const skills = document.querySelector(".skills");
const offset = 300;

//to render the sidebar according to the scroll position
const headerList = [headerDetails, headerProj, headerEdu, headerContact];
const sideList = [side0, side1, side2, side3];

function scrollEffect(location) {
    const h0 = section0.clientHeight;
    const h1 = section1.clientHeight;
    const h2 = section2.clientHeight;
    // const h3 = section3.clientHeight;
    // console.log(h0);
    headerList.forEach((elem) => {
        elem.classList.remove("headerFocus");
    });
    sideList.forEach((elem) => {
        elem.classList.remove("sideFocus");
    });
    if (location < h0 - 300) {
        headerDetails.classList.add("headerFocus");
        side0.classList.add("sideFocus");
    } else if (location < h0 + h1 - offset) {
        headerProj.classList.add("headerFocus");
        side1.classList.add("sideFocus");
    } else if (location < h0 + h1 + h2 - offset - 500) {
        headerEdu.classList.add("headerFocus");
        side2.classList.add("sideFocus");
    } else {
        headerContact.classList.add("headerFocus");
        side3.classList.add("sideFocus");
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
    if (clickedOn === "side0") section0.scrollIntoView();
    else if (clickedOn === "side1") section1.scrollIntoView();
    else if (clickedOn === "side2") section2.scrollIntoView();
    else if (clickedOn === "side3") section3.scrollIntoView();
});

header.addEventListener("click", function (event) {
    const clickedOn = event.target.className.split(" ")[0]; // to prevent bugs when adding multiple class
    console.log(clickedOn);
    if (clickedOn === "headerDetails") section0.scrollIntoView();
    else if (clickedOn === "headerProj") section1.scrollIntoView();
    else if (clickedOn === "headerEdu") section2.scrollIntoView();
    else if (clickedOn === "headerContact") section3.scrollIntoView();
    else if (clickedOn === "hire") {
        backdrop.classList.remove("hidden");
        contact.classList.remove("hidden");
    }
});

////hire modal
hire.addEventListener("click", function () {
    backdrop.classList.remove("hidden");
    contact.classList.remove("hidden");
    body.classList.add("noScroll");
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

////projects
const projectList = [
    {
        name: "foodie",
        pic: "./plugs/foodie.png",
        link: "https://heal333.github.io/foodie/",
        desc: "",
        id: "blackText",
    },
    {
        name: "type0",
        pic: "./plugs/type0.png",
        link: "https://heal333.github.io/type0/",
        desc: "",
    },
    {
        name: "crypto Coins",
        pic: "./plugs/cryptoCoins.png",
        link: "https://heal333.github.io/cryptoCoins/",
        desc: "",
    },
    {
        name: "expanseMap",
        pic: "./plugs/expanseMap.jpg",
        link: "https://heal333.github.io/expanseMap/",
        desc: "",
    },
    {
        name: "recursion",
        pic: "./plugs/recursion.jpg",
        link: "https://heal333.github.io/",
        desc: "",
        id: "blackText",
    },
    {
        name: "easyBank",
        pic: "./plugs/easyBank.png",
        link: "https://heal333.github.io/easyBank/",
        desc: "",
        id: "blackText",
    },
];

projectList.forEach((obj) => {
    const baseNode = document.createElement("div");
    const anchorNode = document.createElement("a");
    anchorNode.setAttribute("href", obj.link);
    anchorNode.setAttribute("target", "_blank");
    anchorNode.innerText = obj.name;
    obj.id && anchorNode.setAttribute("id", obj.id);

    const imgNode = document.createElement("img");
    imgNode.setAttribute("src", obj.pic);

    baseNode.appendChild(anchorNode);
    baseNode.appendChild(imgNode);
    projectPlane.appendChild(baseNode);
});

//// skills
const skillList = [
    "JavaScript",
    "python",
    "C++",
    "React.js",
    "Node.js",
    "Express.js",
    "mongoDB",
    "mySql",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "git",
    "Github",
];
skillList.forEach((skill) => {
    const node = document.createElement("div");
    node.innerText = skill;
    skills.appendChild(node);
});
