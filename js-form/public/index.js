"use strict";
(function() {
const formEl = document.querySelector('.register');
const nameGroupEl = document.querySelector('.register__name');
const emailGroupEl = document.querySelector('.register__email');
const confirmGroupEl = document.querySelector('.register__confirm');
const nameInputEl = document.querySelector('.register__name__input');
const emailInputEl = document.querySelector('.register__email__input');
const confirmInputEl = document.querySelector('.register__confirm__input');

formEl.addEventListener('submit', (event) => {
    let isInvaild = false;
    nameGroupEl.classList.remove('register__name__invalid');
    emailGroupEl.classList.remove('register__email__invalid');
    confirmGroupEl.classList.remove('register__confirm__invalid');

    if( !nameInputEl.value ) {
        nameGroupEl.classList.add('register__name__invalid');
        isInvaild = true;

    }

    if( !emailInputEl.value ) {
        emailGroupEl.classList.add('register__email__invalid');
        isInvaild = true;
    }

    if( confirmInputEl.value !== emailInputEl.value ) {
        confirmGroupEl.classList.add('register__confirm__invalid');
        isInvaild = true;
    
    }

    if( isInvaild ) {
        event.preventDefault();
    }

});


})();