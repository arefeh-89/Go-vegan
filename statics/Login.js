const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container2 = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container2.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container2.classList.remove("right-panel-active");
});