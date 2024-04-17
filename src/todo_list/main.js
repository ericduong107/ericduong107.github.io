const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const form = document.querySelector("form");
const todos = document.querySelector(".js-todos");
const todoListKey = "todoList";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let val = input.value.trim();
  if (val) {
    addTodoElement({
      text: val,
    });

    saveTodoList();
  }

  input.value = "";
});

function addTodoElement(todo) {
  var li = document.createElement("li");
  li.innerHTML = `
    <span>${todo.text}</span>
    <i class="fa-solid fa-trash-can trash-icon"></i>
  `;

  if (todo.status === "completed") {
    li.setAttribute("class", "completed");
  }

  // Click completed
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
    if (todo.status === "completed") {
      todo.status = "";
    } else {
      todo.status = "completed";
    }

    saveTodoList();
  });

  // Click delete
  li.querySelector("i").addEventListener("click", function () {
    this.parentElement.remove();

    saveTodoList();
  });

  todos.appendChild(li);
}

function saveTodoList() {
  let todoStorage = [];
  let todoList = document.querySelectorAll("li");

  todoList.forEach(function (item) {
    let text = item.querySelector("span").innerText;
    let status = item.getAttribute("class");

    todoStorage.push({
      text,
      status,
    });
  });

  localStorage.setItem(todoListKey, JSON.stringify(todoStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem(todoListKey));
  data.forEach(function (item) {
    addTodoElement(item);
  });
}

init();
