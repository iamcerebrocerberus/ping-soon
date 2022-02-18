const form = document.querySelector('form');
const errorMsg = document.querySelector('js-error');
const input = document.querySelector('js-input');
const submit = document.querySelector('js-submit');

const errorMsg = {
    empty: "Whoops! It looks like you forgot to add your email",
    wrgFmt: "Please provide a valid email address"
}
form.onsubmit = function(e) {
    e.preventDefault();
    console.log('working');
    document.body.style.backgroundColor = 'red';
    
}