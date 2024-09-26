let logout = document.getElementById("logout");

let signOut = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "login.html";
  }, 3000);
};

logout.addEventListener("click", signOut);