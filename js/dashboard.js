document.addEventListener("DOMContentLoaded", function () {
    console.log("TaskForge dashboard is loading...");

    const totalTasks =
        document.getElementById("total-tasks");

    const completedTasks =
        document.getElementById("completed-tasks");

    const pendingTasks =
        document.getElementById("pending-tasks");

    const progressValue =
        document.getElementById("progress-value");

    const progressText =
        document.getElementById("progress-text");

    const progressBar =
        document.getElementById("progress-bar");

    const todayTaskList =
        document.getElementById("today-task-list");

    function updateDashboard() {
        if (typeof tasks === "undefined") {
            console.log(
                "Tasks are not available yet."
            );
            return;
        }

        const total =
            tasks.length;

        const completed =
            tasks.filter(function (task) {
                return task.completed === true;
            }).length;

        const pending =
            total - completed;

        let progress = 0;

        if (total > 0) {
            progress =
                Math.round(
                    (completed / total) * 100
                );
        }

        if (totalTasks) {
            totalTasks.textContent =
                total;

        }

        if (completedTasks) {
            completedTasks.textContent =
                completed;

        }

        if (pendingTasks) {
            pendingTasks.textContent =
                pending;

        }

        if (progressValue) {
            progressValue.textContent =
                `${progress}%`;

        }

        if (progressText) {
            progressText.textContent =
                `${progress}%`;
        }

        if (progressBar) {
            progressBar.style.width =
                `${progress}%`;
        }

        showTodayTasks();

        console.log(
            `Dashboard updated: ${total} tasks, ${completed} completed`
        );
    }

    function showTodayTasks() {
        if (!todayTaskList) {
            return;
        }

        const today =
            getTodayDate();

        const todayTasks =
            tasks.filter(function (task) {
                return task.date === today;
            });

        todayTaskList.innerHTML = "";

        if (todayTasks.length === 0) {
            todayTaskList.innerHTML = `
                <div class="empty-state">
                    <div>📭</div>
                    <p>No tasks for today.</p>
                    <span>
                        Add a task for today from the Tasks section.
                    </span>
                </div>
            `;
            return;
        }

        todayTasks.forEach(function (task) {
            const taskItem =
                document.createElement("div");

            taskItem.className =
                "task-item";

            if (task.completed) {
                taskItem.classList.add(
                    "task-completed"
                );
            }

            taskItem.innerHTML = `
                <div class="task-info">
                    <h3>
                        ${escapeDashboardHTML(task.name)}
                    </h3>
                    <p>
                        📚
                        ${escapeDashboardHTML(task.subject)}
                    </p>
                </div>

                <div class="task-actions">
                    <span class="dashboard-status">
                        ${
                            task.completed
                                ? "✅ Done"
                                : "⏳ Pending"
                        }
                    </span>
                </div>
            `;

            todayTaskList.appendChild(
                taskItem
            );
        });
    }

    function getTodayDate() {
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

        return `${year}-${month}-${day}`;

    }

    function escapeDashboardHTML(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    setInterval(function () {
        if (typeof tasks !== "undefined") {
            updateDashboard();
        }

    }, 500);

    if (typeof tasks !== "undefined") {
        updateDashboard();
    }

    console.log(
        "TaskForge dashboard is ready! 📊"
    );
});