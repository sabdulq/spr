document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const weekDiv = document.getElementById("week");
  const form = document.getElementById("plan-form");

  // Function to add a task
  window.addTask = function (dayId) {
    const dayDiv = document.getElementById(dayId);
    const tasksDiv = dayDiv.querySelector(".tasks");
    const newTaskDiv = document.createElement("div");
    newTaskDiv.innerHTML = `
      <input type="text" required>
      <select>
        <option value="Not Done" selected>Not Done</option>
        <option value="Done">Done</option>
      </select>
<button type="button" onclick="removeTask(this)">
        <i class="fas fa-trash  "></i>  Remove
      </button>
    `;
    tasksDiv.appendChild(newTaskDiv);
  };

  // Function to remove a task
  window.removeTask = function (button) {
    button.parentElement.remove();
  };

  // Function to handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const week = Array.from(weekDiv.children).map((dayDiv) => {
      const day = dayDiv.id;
      const tasks = Array.from(dayDiv.querySelectorAll(".tasks input")).map(
        (input) => input.value
      );
      const status = Array.from(dayDiv.querySelectorAll(".tasks select")).map(
        (select) => select.value
      );
      return { day, tasks, status };
    });

    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
      plans[editIndex] = { title, week };
    } else {
      plans.push({ title, week });
    }

    localStorage.setItem("plans", JSON.stringify(plans));
    localStorage.removeItem("editIndex");
    location.href = "../index.html";
  });

  // Function to populate form fields with existing data
  function populateForm(plan) {
    titleInput.value = plan.title;

    plan.week.forEach((day) => {
      const dayDiv = document.getElementById(day.day);
      const tasksDiv = dayDiv.querySelector(".tasks");

      day.tasks.forEach((task, index) => {
        addTask(day.day);
        const taskInput = tasksDiv.querySelectorAll("input")[index];
        const statusSelect = tasksDiv.querySelectorAll("select")[index];

        taskInput.value = task;
        statusSelect.value = day.status[index];
      });
    });
  }

  // Check if we are editing an existing plan
  const editIndex = localStorage.getItem("editIndex");
  if (editIndex !== null) {
    const plans = JSON.parse(localStorage.getItem("plans"));
    const plan = plans[editIndex];
    populateForm(plan);
  }
});
