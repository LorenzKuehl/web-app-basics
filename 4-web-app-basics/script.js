let result = 0;
let resultWhite = 100 - result;
const main = document.querySelector("main");
const btn = document.querySelector("button");
const cnt = document.getElementById("counterTag");

// Render Funktion, die den Zustand der Seite verändert, wenn das result hochgezählt wird

function render() {
  cnt.textContent = result;
  const colorResult = result > 100 ? result % 100 : result;
  resultWhite = 100 - colorResult;
  if (colorResult < 50) {
    main.style.background = `linear-gradient(to right, yellow ${colorResult}%, white ${colorResult}%)`;
  } else {
    main.style.background = `linear-gradient(to right, yellow ${colorResult}%, white ${resultWhite}%)`;
  }
}

// Hochzählfunktion

function counterUp() {
  result++;
  render();
}

// Eventlistener für Mausklick und Leertaste- / Enter-Keypress

main.addEventListener("click", counterUp);

window.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === " ") {
    return counterUp();
  } else if (event.code === "Enter" || event.key === "Enter") {
    return counterUp();
  }
});

btn.addEventListener("click", function () {
  result = 0;
  return render();
});

render();
