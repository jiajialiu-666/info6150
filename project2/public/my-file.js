"use strict";

const button1 = document.querySelector('.topic');

function buttonClicked() {
    const menuEl = document.querySelector('.hidden');
    menuEl.classList.toggle("active");
}

button1.addEventListener("click", buttonClicked);


const modalEl = document.querySelector('.modal');
    const openEl = document.querySelectorAll('.open');
    const closeEl = document.querySelector('.close');

    for (let j=0; j < openEl.length; j++){
    openEl[j].addEventListener('click', () => {
    
        modalEl.showModal();
    });
    }

    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

    const formEl = document.querySelector('.register');
    const emailInputEl = document.querySelector('.register__email__input');
    const confirmInputEl = document.querySelector('.register__confirm__input')
    const emailErrorEl = document.querySelector('.register_email_error');
    const confirmErrorEl = document.querySelector('.register_confirm_error');

    console.log(formEl);
    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

       
        let isInvalid = false;
        
        let number = emailInputEl.value.indexOf("@");

        if( number < 1 && emailInputEl.value ) {
            emailErrorEl.innerText = "this field be a vaild email address including a @ !"
            
        }

        if( !emailInputEl.value ) {
            emailErrorEl.innerText = "This field is required !";
            
        }

        if( confirmInputEl.value !== emailInputEl.value) {
            confirmErrorEl.innerText = "This field must match the email !"
            
        }

      
    });
