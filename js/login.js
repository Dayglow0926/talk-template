const login_form = document.querySelector("#login-form");
const login_name = document.querySelector("#login-form input");
const mokoko = document.querySelector("#mokoko");
const muse = document.querySelector("#muse");

console.log(login_name.value);

function login(event) {
  event.preventDefault();

  localStorage.setItem("mokoko-name", login_name.value);

  login_form.submit();
}

login_form.addEventListener("submit", login);
