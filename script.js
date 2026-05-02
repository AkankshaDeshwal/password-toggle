const password = document.getElementById("password");
const toggleButton = document.getElementById("toggleButton")
const icon = toggleButton.querySelector('img')


toggleButton.addEventListener('click', function togglePassword() {
    if (password.type==='password'){
        password.type = 'text';
        icon.src = "images/eyeopen.png"
    }
    else {
        password.type = 'password';
        icon.src = "images/eyeclosed.png"
    }
})