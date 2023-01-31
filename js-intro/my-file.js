const button= document.querySelector("button");

function buttonClicked() {
    const menuUl = document.querySelector(".menu .conceal");
    menuUl.classList.toggle("dropdown");
}

button.addEventListener("click", buttonClicked);