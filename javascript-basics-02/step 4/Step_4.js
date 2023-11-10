const button = document.querySelector("button");
button.addEventListener("click", function () {
    const inputs = document.querySelectorAll("input");
    document.getElementsByTagName("input");
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
        for (const input of inputs)
            input.value = null;
    }
});

/*
var namee=document.getElementById("name");
var surname=document.getElementById("surname");
var city=document.getElementById("name");
const btn = document.getElementsByTagName("button");
btn[0].addEventListener("click",reset)

 function reset(){
 let condition=confirm("are you sure you want to clear?")
 if(condition=){
    namee.value=""; // it is better to use sth other than name
    surname.value="";
    city.value="";
 }

 }
*/