
 const button2 = document.querySelector(".second_button_expand");
 const button3 = document.querySelector(".third_button_expand");

const brendsFor1440 = document.querySelectorAll(".second_container__button-item-for1120");
const brendsFor768 = document.querySelectorAll(".second_container__button-item-for768");
const deviceFor1440 = document.querySelectorAll(".third_container__button-item-for1440");
const deviceFor768 = document.querySelectorAll(".third_container__button-item-for768");

 function showBrends(event) {
    const button = event.currentTarget;
    const buttonText = button.querySelector(".button_expand__text");
    const buttonIcon = button.querySelector(".button_expand__ic");

    if (buttonText.textContent === "Показать все") {
        buttonText.textContent = "Скрыть";
        brendsFor1440.forEach(el => el.style.display = "flex");
        buttonIcon.src = "ic/expand2.png";
    } else {
        buttonText.textContent = "Показать все";
        brendsFor1440.forEach(el => el.style.display = "none");
        buttonIcon.src = "ic/expand.png";
    }

    if (window.innerWidth <= 768) {
        if (buttonText.textContent === "Показать все") {
            brendsFor768.forEach(el => el.style.display = "none");
        } else {
            brendsFor768.forEach(el => el.style.display = "flex");
        }
    }
 }

 function showDevice(event) {
    const button = event.currentTarget;
    const buttonText = button.querySelector(".button_expand__text");
    const buttonIcon = button.querySelector(".button_expand__ic");

    if (buttonText.textContent === "Показать все") {
        buttonText.textContent = "Скрыть";
        deviceFor1440.forEach(el => el.style.display = "flex");
        buttonIcon.src = "ic/expand2.png";
    } else {
        buttonText.textContent = "Показать все";
        deviceFor1440.forEach(el => el.style.display = "none");
        buttonIcon.src = "ic/expand.png";
    }

    if (window.innerWidth <= 768) {
        if (buttonText.textContent === "Показать все") {
            deviceFor768.forEach(el => el.style.display = "none");
        } else {
            deviceFor768.forEach(el => el.style.display = "flex");
        }
    }
 }

    const aside = document.querySelector("aside");
    const main = document.querySelector("main");

    const menuButton = document.querySelector(".main_header__menu");
    const backButton = document.querySelector(".aside_header__back");

    function showMenu() {
      aside.style.display = "flex";
      main.style.display = "none";
    }

    function hideMenu() {
      aside.style.display = "none";
      main.style.display = "block";
    }

  

function setupEventListeners() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 360) {
        if (button2) {
            button2.addEventListener("click", showBrends);
        }

        if (button3) {
            button3.addEventListener("click", showDevice);
        }
    }

    if (screenWidth <= 360) {
        if (menuButton) {
            menuButton.addEventListener("click", showMenu);
        }

        if (backButton) {
            backButton.addEventListener("click", hideMenu);
        }
    }
}

window.addEventListener('resize', setupEventListeners);
window.addEventListener('DOMContentLoaded', setupEventListeners);