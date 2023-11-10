/*
const images = document.querySelectorAll("img");
for (const image of images) {
   image.addEventListener("mouseover", function () {
       image.setAttribute('src',`./images/${image.id}_2.jpg`)
    
      }
   })
};*/

const images = document.querySelectorAll("img");
for (const image of images) {

image.addEventListener("mouseover", function () {

   switch (image.id) {
      case 'image1': image.setAttribute('src',"./images/image1_2.jpg") ; break;
      case 'image2':image.setAttribute('src',"./images/image2_2.jpg") ; break;
      case 'image3': image.setAttribute('src',"./images/image3_2.jpg") ; break;
      case 'image4': image.setAttribute('src',"./images/image4_2.jpg") ; break;
      case 'image5': image.setAttribute('src',"./images/image5_2.jpg") ; break;
   }
})};