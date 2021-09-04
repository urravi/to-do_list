showTasks();

// If user adds a task, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTask = document.getElementById("input");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  tasksObj.push(addTask.value);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  addTask.value = "";
//   console.log(tasksObj);
  showTasks();
});

// Function to show elements from localStorage
function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  var html = "";
  tasksObj.forEach(function(element, index) {
    html += `
        <li class="list-group-item">${element}
        <button class="btn btn-outline-danger" type="button" id="${index}" onclick="deleteTask(this.id)" >Delete</button></li>
        `;
  });
  let tasksElm = document.getElementById("tasks");
  if (tasksObj.length != 0) {
    tasksElm.innerHTML = html;
  } else {
    tasksElm.innerHTML = `Nothing to show! Add any task you planned to do.`;
  }
}

// Function to delete a task
function deleteTask(index) {
//   console.log("I am deleting", index);

  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  tasksObj.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  showTasks();
}
