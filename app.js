let password = document.getElementById("password");
console.log(password)
let eye = document.getElementById("fa-eye");
let eyeSlash = document.getElementById("fa-eye-slash");

const togglePasswordIcon = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
  } else {
    password.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block";
  }
};

// Adding event
eye.addEventListener("click", togglePasswordIcon);
eyeSlash.addEventListener("click", togglePasswordIcon);
