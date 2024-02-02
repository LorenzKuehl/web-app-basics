const cOne = document.getElementById("fast");
const cTwo = document.getElementById("cheap");
const cThree = document.getElementById("good");
let checkedCheckboxes = [];

function toggle(clickedCheckbox) {
  const isChecked = checkedCheckboxes.includes(clickedCheckbox);

  if (isChecked) {
    // Uncheck der geklickten checkbox
    clickedCheckbox.checked = false;
    checkedCheckboxes = checkedCheckboxes.filter(
      (checkbox) => checkbox !== clickedCheckbox
    );
  } else {
    // Check der geklickten checkbox
    clickedCheckbox.checked = true;

    // Wenn mehr als zwei checkboxes checked sind, unchecke die letzte
    if (checkedCheckboxes.length >= 2) {
      const latestCheckbox = checkedCheckboxes.pop();
      latestCheckbox.checked = false;
    }

    // Pushe die geklickte checkbox in das array
    checkedCheckboxes.push(clickedCheckbox);
  }
}

function initialize() {
  // Set initial state
  cOne.checked = false;
  cTwo.checked = false;
  cThree.checked = false;

  // Call render function
  render();
}

function render() {
  console.log("Render function called. Current state:", {
    cOne: cOne.checked,
    cTwo: cTwo.checked,
    cThree: cThree.checked,
  });
}

// Initialize state
initialize();

// Event listeners
cOne.addEventListener("change", function () {
  toggle(cOne);
  render();
});

cTwo.addEventListener("change", function () {
  toggle(cTwo);
  render();
});

cThree.addEventListener("change", function () {
  toggle(cThree);
  render();
});
