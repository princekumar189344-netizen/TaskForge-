document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pageSections = document.querySelectorAll(".page-section");

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const sectionName = button.dataset.section;

            navButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            pageSections.forEach(function (section) {
                section.classList.remove("active-section");
            });

            const selectedSection =
                document.getElementById(sectionName);

            if (selectedSection) {
                selectedSection.classList.add("active-section");
            }
        });
    });

    const dateElement =
        document.getElementById("current-date");

    if (dateElement) {
        const today = new Date();

        const options = {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        };

        dateElement.textContent =
            today.toLocaleDateString("en-IN", options);
    }

    const taskDate =
        document.getElementById("task-date");

    if (taskDate) {
        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        taskDate.value =
            `${year}-${month}-${day}`;
    }

    console.log("TaskForge loaded successfully!");
    console.log("Study planner is ready.");
});