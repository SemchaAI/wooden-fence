const nav = document.getElementById("nav");
const phone = document.getElementById("phone");

function toggleClass() {
  nav.classList.toggle("none"); // Переключаем класс hide
  phone.classList.toggle("none");
}

//SLIDER

let offset = 0; // from left
let page = 0;
let x;
let xStart;
let width;
const sliderLine = document.querySelector(".sliderLine");
const sliderList = document.querySelectorAll(".dot");

window.addEventListener("resize", init);
init();

const el = document.getElementById("sliderLine");
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchend", handleEnd);

document.querySelector(".next").addEventListener("click", Next);
document.querySelector(".previous").addEventListener("click", Prev);

function handleMove(event) {
  console.log("touch");
  x = event.touches[0].clientX;
  console.log(x);
}
function handleStart(event) {
  console.log("start");
  xStart = event.touches[0].clientX;
  console.log(xStart);
}
function handleEnd() {
  if (x < xStart) {
    Next();
  } else {
    Prev();
  }
}
function Next() {
  offset -= width;
  page++;
  if (offset <= -width * 5) {
    offset = 0;
    page = 0;
    sliderList[4].classList.toggle("activeDot");
  } else {
    sliderList[page - 1].classList.toggle("activeDot");
  }
  sliderList[page].classList.toggle("activeDot");
  sliderLine.style.left = offset + "px";
}
function Prev() {
  offset += width;
  page--;
  if (offset > 0) {
    offset = -width * 4; //1484
    page = 4;
    sliderList[0].classList.toggle("activeDot");
  } else {
    sliderList[page + 1].classList.toggle("activeDot");
  }
  sliderLine.style.left = offset + "px";
  sliderList[page].classList.toggle("activeDot");
}
function init() {
  width = document.querySelector(".slider").offsetWidth;
  let nav = document.querySelector("#nav");
  let phone = document.querySelector("#phone");
  console.log(width);
  if (width !== 320) {
    nav.classList.remove("none");
    phone.classList.remove("none");
  } else {
    nav.style.animation = "fall-down .3s linear forwards";
    phone.style.animation = "fall-down .3s linear forwards";
  }
}
