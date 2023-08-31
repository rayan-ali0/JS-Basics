const links=document.querySelectorAll("a");
const text=document.querySelector("#texte")
for (const link of links){
link.addEventListener("click",function(){
if(link.id==="show"){
    text.style.visibility = 'visible';
}
if(link.id==="hide"){
    text.style.visibility = 'hidden';
}
})};