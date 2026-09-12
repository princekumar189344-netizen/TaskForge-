let tasks = loadTasks();
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskNameInput = document.getElementById("task-name");
    const taskSubjectInput = document.getElementById("task-subject");
    const taskDateInput = document.getElementById("task-date");

    const taskList = document.getElementById("task-list");
    const taskCount = document.getElementById("task-count");

    const filterAll = document.getElementById("filter-all");
    const filterPending = document.getElementById("filter-pending");
    const filterCompleted = document.getElementById("filter-completed");

    if (taskForm) {
        taskForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name =
                taskNameInput.value.trim();

            const subject =
                taskSubjectInput.value;

            const date =
                taskDateInput.value;

            if (name === "") {
                alert("Please enter a task name.");
                taskNameInput.focus();
                return;
            }

            if (subject === "") {
                alert("Please choose a subject.");
                taskSubjectInput.focus();
                return;
            }

            if (date === "") {
                alert("Please choose a due date.");
                taskDateInput.focus();
                return;
            }

            const newTask = {
                id: Date.now(),
                name: name,
                subject: subject,
                date: date,
                completed: false
            };

            tasks.push(newTask);
            saveTasks();
            displayTasks();
            taskForm.reset();
            setTodayDate();

            console.log("New task added:", newTask);
        });
    }

    function displayTasks() {
        if (!taskList) {
            return;
        }

        taskList.innerHTML = "";
        let visibleTasks = [];

        if (currentFilter === "all") {
            visibleTasks = tasks;
        }

        if (currentFilter === "pending") {
            visibleTasks = tasks.filter(function (task) {
                return task.completed === false;
            });
        }

        if (currentFilter === "completed") {
            visibleTasks = tasks.filter(function (task) {
                return task.completed === true;
            });
        }

        if (visibleTasks.length === 0) {
            let message = "No tasks added yet.";
            let subMessage = "Create your first study task above.";

            if (currentFilter === "pending") {
                message = "No pending tasks.";
                subMessage = "Great! You have finished your current tasks.";
            }

            if (currentFilter === "completed") {
                message = "No completed tasks yet.";
                subMessage = "Complete a task and it will appear here.";
            }

            taskList.innerHTML = `
                <div class="empty-state">
                    <div>📋</div>
                    <p>${message}</p>
                    <span>${subMessage}</span>
                </div>
            `;

            updateTaskCount();
            return;
        }

        visibleTasks.forEach(function (task) {
            const taskItem =
                document.createElement("div");
            taskItem.className = "task-item";

            if (task.completed) {
                taskItem.classList.add("task-completed");
            }

            const formattedDate =
                formatDate(task.date);

            taskItem.innerHTML = `
                <div class="task-info">
                    <h3>${escapeHTML(task.name)}</h3>
                    <p>
                        📚 ${escapeHTML(task.subject)}
                        &nbsp; • &nbsp;
                        📅 ${formattedDate}
                    </p>
                </div>

                <div class="task-actions">
                    <button
                        class="complete-btn"
                        data-id="${task.id}">
                        ${task.completed
                            ? "↩ Undo"
                            : "✓ Complete"}
                    </button>

                    <button
                        class="delete-btn"
                        data-id="${task.id}">
                        🗑 Delete
                    </button>
                </div>
            `;

            taskList.appendChild(taskItem);
        });

        updateTaskCount();
        addTaskButtonEvents();
    }

    function addTaskButtonEvents() {
        const completeButtons =
            document.querySelectorAll(".complete-btn");

        completeButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const taskId =
                    Number(button.dataset.id);

                const task =
                    tasks.find(function (item) {
                        return item.id === taskId;
                    });

                if (task) {
                    task.completed =
                        !task.completed;

                    saveTasks();

                    console.log(
                        "Task status changed:",
                        task.name
                    );

                    displayTasks();
                }
            });
        });

        const deleteButtons =
            document.querySelectorAll(".delete-btn");

        deleteButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const taskId =
                    Number(button.dataset.id);

                const task =
                    tasks.find(function (item) {
                        return item.id === taskId;
                    });

                if (!task) {
                    return;
                }

                const shouldDelete =
                    confirm(
                        `Delete "${task.name}"?`
                    );

                if (!shouldDelete) {
                    return;
                }

                tasks =
                    tasks.filter(function (item) {
                        return item.id !== taskId;
                    });
                saveTasks();

                console.log(
                    "Task deleted:",
                    task.name
                );

                displayTasks();
            });
        });
    }

    function updateTaskCount() {
        if (!taskCount) {
            return;
        }

        const total =
            tasks.length;

        if (total === 1) {
            taskCount.textContent = "1 task";

        } else {
            taskCount.textContent =
                `${total} tasks`;
        }
    }

    if (filterAll) {
        filterAll.addEventListener("click", function () {
            currentFilter = "all";
            setActiveFilter(filterAll);
            displayTasks();
        });
    }

    if (filterPending) {
        filterPending.addEventListener("click", function () {
            currentFilter = "pending";
            setActiveFilter(filterPending);
            displayTasks();
        });
    }

    if (filterCompleted) {
        filterCompleted.addEventListener("click", function () {
            currentFilter = "completed";
            setActiveFilter(filterCompleted);
            displayTasks();
        });
    }

    function setActiveFilter(activeButton) {
        const filterButtons =
            document.querySelectorAll(".filter-btn");

        filterButtons.forEach(function (button) {
            button.classList.remove(
                "active-filter"
            );
        });

        activeButton.classList.add(
            "active-filter"
        );
    }

    function formatDate(dateString) {
        if (!dateString) {
            return "No date";
        }

        const date =
            new Date(dateString + "T00:00:00");

        if (isNaN(date.getTime())) {
            return dateString;
        }

        return date.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
    }

    function setTodayDate() {
        if (!taskDateInput) {
            return;
        }

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");

        taskDateInput.value =
            `${year}-${month}-${day}`;
        }

    function escapeHTML(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    setTodayDate();
    displayTasks();

    console.log(
        "TaskForge task manager is ready!"
    );
});