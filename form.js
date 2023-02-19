var dark_toggle = document.querySelector('.dark_toggle');
var form = document.querySelector('form');
var signUp = document.querySelector('.sign-in');
var input = document.querySelectorAll('input');
var button = document.querySelector('button');

dark_toggle.addEventListener('click', function() {
form.classList.toggle('dark');
signUp.classList.toggle('dark');
button.classList.toggle('dark_button')
})

input.forEach((input) => {
    dark_toggle.addEventListener('click', function() {
        input.classList.toggle('dark_input');
    })
});