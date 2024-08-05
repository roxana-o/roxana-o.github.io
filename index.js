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

// Countdown înregistrare pentru promoție

// Setează data de sfârșit a promoției
const endDate = new Date("December 31, 2024 02:04:33").getTime();

// Functie de actualizare a countdown-ului
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  // Verifică dacă timpul rămas este pozitiv
  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("day_value").innerHTML = days;
    document.getElementById("hour_value").innerHTML = hours;
    document.getElementById("minute_value").innerHTML = minutes;
    document.getElementById("second_value").innerHTML = seconds;
  } else {
    // Afișează un mesaj când promoția a expirat
    document.getElementById("clocks").innerHTML = "Promoția a expirat!";
    clearInterval(interval);
  }
}

// Actualizează countdown-ul la fiecare secundă
const interval = setInterval(updateCountdown, 1000);

// Apel inițial pentru a seta valorile imediat
updateCountdown();



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
