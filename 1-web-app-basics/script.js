let dark = false;
const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  dark = !dark;
  if (dark) {
    document.body.classList.add("body--dark");
    btn.classList.add("button-dark");
    btn.textContent = "Licht an!";
    document.title = "Good Night";
  } else {
    document.body.classList.remove("body--dark");
    btn.classList.remove("button-dark");
    btn.textContent = "Licht aus!";
    document.title = "Good Morning";
  }
});
