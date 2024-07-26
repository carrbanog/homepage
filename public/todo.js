const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");

form.addEventListener("submit", submitEvent);

function submitEvent(event){
  event.preventDefault();
  // console.log(input.value);
  const newTodo = input.value;
  input.value = "";
  paintTodo(newTodo)
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  span.innerText = newTodo;
  delBtn.innerText = "Delete"
  delBtn.addEventListener("click", deleteList);
}

function deleteList(event){
  const delBtnTarget = event.target.parentElement;
  delBtnTarget.remove();
  // console.log(delBtnTarget)
}