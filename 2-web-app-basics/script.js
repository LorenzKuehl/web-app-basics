let state = "hidden";
const btn = document.querySelector("button");
const inp = document.querySelector("input");

btn.addEventListener("click", function render() {
  if (state == "hidden") {
    btn.textContent = "Show Password";
    // inp.setAttribute(("type", "password"));
    inp.type = "password";
    state = "show";
  } else if (state == "show") {
    btn.textContent = "Hide Password";
    // inp.setAttribute(("type", "text"));
    inp.type = "text";
    state = "hidden";
  }
});
render();
