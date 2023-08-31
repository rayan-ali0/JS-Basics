
const images = document.querySelectorAll("img");
for (const image of images){
image.addEventListener("mouseover", function(){
   image.setAttribute('src',`./images/${image.id}_2.jpg`)
})};
