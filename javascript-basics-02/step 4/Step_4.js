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
