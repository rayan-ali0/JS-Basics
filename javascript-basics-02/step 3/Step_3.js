const p= document.createElement("p");
document.body.appendChild(p);
const input=document.querySelector("#name");
input.addEventListener("input",function(){ // input.addEventListener("change",function(){ 
   p.innerText=input.text // p.innerHTML=input.value; innerHtml is mostly used to create html element 
})