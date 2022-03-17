const form = document.querySelector("form");
const errorMsg = document.querySelector(".js-error");
const input = document.querySelector(".js-input");
const submit = document.querySelector(".js-submit");
const btn = document.querySelector(".js-button");
const errorMsgMobi = document.querySelector(".js-error-mobi");

let errorMessages = [];

const regexString = /\S+@\S+\.\S{2,3}$/;

btn.onclick = function (evt) {
	evt.preventDefault();
	errorMessages = [];
	console.log(regexString.test(input.value));

	if (input.value === "" || input.value === undefined || input.value === null) {
		errorMessages.push("Whoops! It looks like you forgot to add your email");
		input.classList.add("error-outline");
	} else if (!regexString.test(input.value)) {
		errorMessages.push("Please provide a valid email address");
		input.classList.add("error-outline");
	}
	errorMsg.innerText = errorMessages[0];
	errorMsgMobi.innerText = errorMessages[0];

	if (errorMessages.length === 0) {
		errorMsg.innerText = "Thank you!";
		errorMsgMobi.innerText = "Thank you!";
    input.classList.add("success-input");
		errorMsg.classList.add("success");
		errorMsgMobi.classList.add("success");
	}
};
