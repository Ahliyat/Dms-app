let password = document.getElementById("password");
console.log(password)
let eye = document.getElementById("fa-eye");
const submitButton = document.getElementById("reg-btn");
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
const handleButton = (e) => {
  // prevent default behaviour
  e.preventDefault();
  // Accessing the input elementby ID and // get user input value
  const companyName = document.getElementById("company-name").value;
  const lastname = document.getElementById("lastname").value;
  const address = document.getElementById("address").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // store credestials in localstorage
  localStorage.setItem("CompanyName", companyName);
  localStorage.setItem("Lastname", lastname);
  localStorage.setItem("address", address);
  localStorage.setItem("PhoneNumber", phoneNumber);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", password);

  // check if input fields are empty
  if (companyName === "" && lastname === "" && address === "" && phoneNumber === "" && email === "" && password === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Kindly enter your credentials",
    });
  } else if (password.length >= 8 && password.length <= 20) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Account is successfully created",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      location.href = "./login.html";
    }, 5000);
  } else {
    Swal.fire({
      icon: "error",
      text: "Minimum of 8 characters is required for password",
    });
  }
};
// Adding event
eye.addEventListener("click", togglePasswordIcon);
eyeSlash.addEventListener("click", togglePasswordIcon);
submitButton.addEventListener("click", handleButton);
