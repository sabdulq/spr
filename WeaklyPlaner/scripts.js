document.addEventListener("DOMContentLoaded", function () {
  const plansContainer = document.getElementById("plans-container");

  // Retrieve plans from local storage
  const plans = JSON.parse(localStorage.getItem("plans")) || [];

  // Display plans or show "No plans" message
  if (plans.length > 0) {
    plans.forEach((plan, index) => {
      if (plan && plan.week) {
        const planElement = document.createElement("div");
        planElement.innerHTML = `
                    <h3>${plan.title}</h3>
                    <table>
                        <thead>
                            <tr>
                                ${plan.week
                                  .map(
                                    (day) =>
                                      `<th>${day.day}</th><th>Status</th>`
                                  )
                                  .join("")}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                ${plan.week
                                  .map(
                                    (day) => `
                                    <td data-label="${day.day}">
                                        ${day.tasks
                                          .map((task) => `<div>${task}</div>`)
                                          .join("")}
                                    </td>
                                    <td data-label="Status">
                                        ${
                                          Array.isArray(day.status)
                                            ? day.status
                                                .map(
                                                  (status) =>
                                                    `<div>${
                                                      status === "Done"
                                                        ? "✅"
                                                        : "❌"
                                                    }</div>`
                                                )
                                                .join("")
                                            : day.status === "Done"
                                            ? "✅"
                                            : "❌"
                                        }
                                    </td>
                                `
                                  )
                                  .join("")}
                            </tr>
                        </tbody>
                    </table>
                    <button onclick="editPlan(${index})">Edit</button>
                    <button onclick="deletePlan(${index})">Delete</button>
                    <button onclick="printPlan(${index})">Print</button>
                `;
        plansContainer.appendChild(planElement);
      }
    });
  } else {
    plansContainer.innerHTML = "<p>No plans added</p>";
  }
});

function deletePlan(index) {
  const plans = JSON.parse(localStorage.getItem("plans")) || [];
  plans.splice(index, 1);
  localStorage.setItem("plans", JSON.stringify(plans));
  location.reload();
}

function editPlan(index) {
  localStorage.setItem("editIndex", index);
  location.href = "plans.html";
}

function printPlan(index) {
  const plans = JSON.parse(localStorage.getItem("plans")) || [];
  const plan = plans[index];
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>${plan.title}</title>
      </head>
      <body>
        <h1>${plan.title}</h1>
        <table>
          <thead>
            <tr>
              ${plan.week
                .map((day) => `<th>${day.day}</th><th>Status</th>`)
                .join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${plan.week
                .map(
                  (day) => `
                  <td data-label="${day.day}">
                      ${day.tasks.map((task) => `<div>${task}</div>`).join("")}
                  </td>
                  <td data-label="Status">
                      ${
                        Array.isArray(day.status)
                          ? day.status
                              .map(
                                (status) =>
                                  `<div>${
                                    status === "Done" ? "✅" : "❌"
                                  }</div>`
                              )
                              .join("")
                          : day.status === "Done"
                          ? "✅"
                          : "❌"
                      }
                  </td>
              `
                )
                .join("")}
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}
