const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
    let value = password.value;
    let strength = 0;

    if(value.length >= 8) strength++;
    if(/[A-Z]/.test(value)) strength++;
    if(/[a-z]/.test(value)) strength++;
    if(/[0-9]/.test(value)) strength++;
    if(/[^A-Za-z0-9]/.test(value)) strength++;

    switch(strength){
        case 0:
            strengthBar.style.width = "0%";
            strengthText.textContent = "Strength: None";
            break;

        case 1:
        case 2:
            strengthBar.style.width = "33%";
            strengthBar.style.background = "red";
            strengthText.textContent = "Strength: Weak";
            break;

        case 3:
        case 4:
            strengthBar.style.width = "66%";
            strengthBar.style.background = "orange";
            strengthText.textContent = "Strength: Medium";
            break;

        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "green";
            strengthText.textContent = "Strength: Strong";
            break;
    }
});