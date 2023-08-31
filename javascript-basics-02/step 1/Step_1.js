const img=document.querySelector("#image1");
console.log(img)
img.addEventListener("mouseover",function(){
    // imgset="images/image1_2.jpg";
    img.setAttribute('src', './images/image1_2.jpg')
});
