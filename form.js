var dark_toggle = document.querySelector('.dark_toggle');
var signUp = document.querySelector('.sign-in');
var input = document.querySelectorAll('input');
var button = document.querySelector('button');

dark_toggle.addEventListener('click', function() {
signUp.classList.toggle('dark');
button.classList.toggle('dark_button')
})

input.forEach((input) => {
    dark_toggle.addEventListener('click', function() {
        input.classList.toggle('dark_input');
    })
});