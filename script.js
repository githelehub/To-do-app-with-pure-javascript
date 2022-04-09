const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  }

  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  const a = document.createElement("a");
  a.className = "delete-item float-end";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);

  taskList.appendChild(li);

  input.value = "";

  e.preventDefault();
}