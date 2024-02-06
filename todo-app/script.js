// Todo-App

//Variablen
const allRadio = document.getElementById("all");
const openRadio = document.getElementById("open");
const doneRadio = document.getElementById("done");
const filterRadio = document.querySelectorAll("#all #open #done");
const rmvBtn = document.getElementById("remBtn");
const taskInp = document.getElementById("new-task");
const addBtn = document.getElementById("addButton");
const ul = document.querySelector("ul");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
let filter = "";

//Initial state
let state = {
  todos: [
    { description: "Learn HTML", done: false, id: 1 },
    { description: "Learn Javascript", done: true, id: 2 },
    { description: "Learn CSS", done: false, id: 3 },
    { description: "Learn all together", done: false, id: 4 },
  ],
};

//State laden aus dem local storage
const savedState = localStorage.getItem("savedTasks");
if (savedState) {
  state = JSON.parse(savedState);
}

//Action functions
function createTaskElement(task) {
  const liTask = document.createElement("li");
  ul.append(liTask);
  liTask.textContent = task.description;
  const input = document.createElement("input");
  liTask.append(input);
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", () => (task.done = !task.done));
  if (task.done === true) {
    input.checked = true;
  }
}

//Render function
function render() {
  localStorage.setItem("savedTasks", JSON.stringify(state));
  ul.innerHTML = "";
  state.todos.forEach((task) => {
    if (filter === "all") {
      createTaskElement(task);
    } else if (filter === "open" && task.done === false) {
      createTaskElement(task);
    } else if (filter === "done" && task.done === true) {
      createTaskElement(task);
    }
  });
}

// Event Listener
allRadio.addEventListener("click", function () {
  if (allRadio.checked) {
    filter = "all";
  }
  return render();
});

openRadio.addEventListener("click", function () {
  if (openRadio.checked) {
    filter = "open";
  }
  return render();
});

doneRadio.addEventListener("click", function () {
  if (doneRadio.checked) {
    filter = "done";
  }
  return render();
});

addBtn.addEventListener("click", function () {
  const inputDescription = taskInp.value.trim();
  const description = inputDescription.toLowerCase();
  const id = Date.now().toString();

  // Checken ob der text-input nicht leer und länger als 5 Zeichen ist
  if (!inputDescription || inputDescription.length <= 4) {
    alert("Oha! Dein ToDo muss mindestens 5 Zeichen lang sein.");
    return;
  }

  // Checken ob der task bereits in der list ist
  if (
    state.todos.some((task) => task.description.toLowerCase() === description)
  ) {
    alert("Ups! Sieht so aus als wäre dein ToDo bereits in der Liste.");
    return;
  }

  // Den task zur list pushen
  state.todos.push({
    description: inputDescription,
    done: false,
    id,
  });

  // Das text-input-field clearen
  taskInp.value = "";

  // Render
  render();
});

rmvBtn.addEventListener("click", function () {
  state.todos = state.todos.filter((task) => !task.done);
  render();
});

//Initial render call
render();
