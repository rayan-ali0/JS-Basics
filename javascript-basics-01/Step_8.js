const validateTheAge = (event) => {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        alert("you are over 18");
    }
    else {
        alert("you are under 18");
    }
    ;
}
document.getElementById("validate").addEventListener("click", validateTheAge);
