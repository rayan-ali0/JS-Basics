const button=document.querySelector("button");

button.addEventListener("click",function(){
    const pass=document.getElementById("password");
    const conf=document.getElementById("confirmation");
    if(pass.value!==conf.value){
        pass.style.border="1px solid red";
        conf.style.border="1px solid red";

    }
}
)
