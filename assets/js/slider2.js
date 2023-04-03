let offset2 = 0; // from left
let page2 = 0;
let x2;
let xStart2;
let width2;
const sliderLine2 = document.querySelector(".sliderFTLine");
const sliderList2 = document.querySelectorAll(".dotFT");

window.addEventListener("resize", init2);
init2();

const el2 = document.getElementById("sliderFTLine");
el2.addEventListener("touchmove", handleMove2);
el2.addEventListener("touchstart", handleStart2);
el2.addEventListener("touchend", handleEnd2);

function handleMove2(event) {
  x2 = event.touches[0].clientX;
}
function handleStart2(event) {
  xStart2 = event.touches[0].clientX;
}
function handleEnd2() {
  if (x2 === undefined) {
    return 0;
  }
  if (x2 < xStart2) {
    Next2();
    x2 = undefined;
  } else {
    Prev2();
    x2 = undefined;
  }
}
function Next2() {
  offset2 -= width2;
  page2++;
  if (offset2 <= -width2 * 5) {
    offset2 = 0;
    page2 = 0;
    sliderList2[4].classList.toggle("activeDotFT");
  } else {
    sliderList2[page2 - 1].classList.toggle("activeDotFT");
  }
  sliderList2[page2].classList.toggle("activeDotFT");
  sliderLine2.style.left = offset2 + "px";
}
function Prev2() {
  offset2 += width2;
  page2--;
  if (offset2 > 0) {
    offset2 = -width2 * 4; //1484
    page2 = 4;
    sliderList2[0].classList.toggle("activeDotFT");
  } else {
    sliderList2[page2 + 1].classList.toggle("activeDotFT");
  }
  sliderLine2.style.left = offset2 + "px";
  sliderList2[page2].classList.toggle("activeDotFT");
}
function init2() {
  width2 = document.querySelector(".sliderFTPage").offsetWidth + 17;
}
