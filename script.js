let taskList = document.querySelector("#task-list");
let addBtn = document.querySelector("#add-task");
let taskInput = document.querySelector("#input-task");

addBtn.onclick = () => {
  let taskText = taskInput.value.trim();
  if (taskText != "") {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    li.textContent = taskText;
    removeBtn.textContent = "X";
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    removeBtn.addEventListener("click", removeTask);
  }
};

function removeTask(event) {
    event.target.parentElement.remove();
}
