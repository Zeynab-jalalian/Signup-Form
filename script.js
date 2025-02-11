const slidepage=document.querySelector(".slidepage");
const firstNextBtn=document.querySelector(".nextBtn");
const secNextBtn=document.querySelector(".next-1");
const thirdNextBtn=document.querySelector(".next-2");
const submit=document.querySelector(".submit");


firstNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-25%";
})
secNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-50%";
})
thirdNextBtn.addEventListener("click",function(){
    slidepage.style.marginLeft="-75%";
})
submit.addEventListener("click",function(){
   

    setTimeout(function(){
   alert("You're seccessfully Signed up");
   location.reload();
    },800)
})
