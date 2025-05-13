document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskContent.addEventListener("click", toggleTask);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", deleteTask);

        li.appendChild(taskContent);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = ""; // Clear input field
    }
}

function toggleTask(event) {
    const taskItem = event.target.closest("li");
    taskItem.classList.toggle("completed");
}

function deleteTask(event) {
    const taskItem = event.target.closest("li");
    taskItem.remove();
}
