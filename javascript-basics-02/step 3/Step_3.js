const p= document.createElement("p");
document.body.appendChild(p);
const input=document.querySelector("#name");
input.addEventListener("input",function(){
    p.innerHTML=input.value;
})