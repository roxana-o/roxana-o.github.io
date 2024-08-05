//localhost google analytics

//Pagina activa

$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});

$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

//Validare date formular

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Introduceți un nume de utilizator.");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Introduceți o adresă de email.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Adresa de email trebuie să fie validă.");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Introduceți o parolă.");
  } else if (passwordValue.length < 8) {
    setError(password, "Parola trebuie să aibă minim 8 caractere.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Confirmați parola.");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Parolele nu coincid.");
  } else {
    setSuccess(password2);
  }
};

//Countdown inregistrare pentru promotie

//display start time
const date_time1 = new Date("December 31, 2024 02:04:330").getTime();
var f_fun = setInterval(function () {
  //display end time
  const date_time2 = new Date().getTime();
  //show the difference between start and end time
  const time_var = date_time1 - date_time2;
  //convert difference time in days
  const days_data = Math.floor(time_var / (1000 * 60 * 60 * 24));
  //convert difference time in hours
  const hours_data = Math.floor(
    (time_var % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  //convert difference time in minutes
  const minutes_data = Math.floor((time_var % (1000 * 60 * 60)) / (1000 * 60));
  //convert difference time in the second
  const seconds_data = Math.floor((time_var % (1000 * 60)) / 1000);
  //display countdown timer
  document.getElementById("day_value").innerHTML = days_data;
  document.getElementById("hour_value").innerHTML = hours_data;
  document.getElementById("minute_value").innerHTML = minutes_data;
  document.getElementById("second_value").innerHTML = seconds_data;
}, 5);



//Schimbare tema(light/dark)

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
