const slidepage=document.querySelector(".slidepage");
const firstNextBtn=document.querySelector(".nextBtn");
const secNextBtn=document.querySelector(".next-1");
const thirdNextBtn=document.querySelector(".next-2");
const submit=document.querySelector(".submit");
const progressText=document.querySelectorAll(".step p");
const bullet=document.querySelectorAll(".bullet");
const Check=document.querySelectorAll(".step .check");
const prev1=document.querySelector(".prev-1");
const prev2=document.querySelector(".prev-2");
const prev3=document.querySelector(".prev-3");
let max=4;
let current=1;

firstNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
    progressText[current - 1].classList.add("active");
    bullet[current - 1].classList.add("active");
    Check[current -1].classList.add("active");
    current+=1;
    
})
secNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
    progressText[current - 1].classList.add("active");
    bullet[current - 1].classList.add("active");
    Check[current -1].classList.add("active");
    current+=1;
})
thirdNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-75%";
    progressText[current - 1].classList.add("active");
    bullet[current - 1].classList.add("active");
    Check[current -1].classList.add("active");
    current+=1;
})
submit.addEventListener("click",function(){
    progressText[current - 1].classList.add("active");
    bullet[current - 1].classList.add("active");
    Check[current -1].classList.add("active");


    setTimeout(function(){
   alert("You're seccessfully Signed up");
   location.reload();
    },800)
})


prev1.addEventListener("click",function(){
    slidepage.style.marginLeft="0%";
    progressText[current - 2].classList.remove("active");
    bullet[current - 2].classList.remove("active");
    Check[current -2].classList.remove("active");
    current-=1;
    
})
prev2.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
    progressText[current - 2].classList.remove("active");
    bullet[current - 2].classList.remove("active");
    Check[current -2].classList.remove("active");
    current-=1;
})
prev3.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
    progressText[current - 2].classList.remove("active");
    bullet[current - 2].classList.remove("active");
    Check[current -2].classList.remove("active");
    current-=1;
})