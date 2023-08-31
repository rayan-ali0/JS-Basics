const colors=document.querySelectorAll(".color");
const text=document.querySelector("#text");
for (const colr of colors){
colr.addEventListener("click",function(){


if(colr.classList.contains("green")
){
    text.style.color = 'green';
}
if(colr.classList.contains("red")){
    text.style.color = 'red';
}
if(colr.classList.contains("blue")){
    text.style.color = 'blue';
}
})};
