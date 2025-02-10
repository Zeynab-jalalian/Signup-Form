const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText=document.querySelectorAll(".step p");
const progressCheck=document.querySelectorAll(".step .check");
const bullet=document.querySelectorAll(".step .bullet");
let max=4;
let current=1;


firstNextBtn.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    current+=1;
})

nextBtnSec.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
})
nextBtnThird.addEventListener("click", function () {
    slidePage.style.marginLeft = "-75%";
})



prevBtnSec.addEventListener("click", function () {
    slidePage.style.marginLeft = "0%";
})

prevBtnThird.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
})
prevBtnFourth.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
})