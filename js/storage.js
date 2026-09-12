const TASK_STORAGE_KEY = "taskforge_tasks";

function saveTasks() {
    try {
        localStorage.setItem(
            TASK_STORAGE_KEY,
            JSON.stringify(tasks)
        );
        console.log("Tasks saved successfully.");

    } catch (error) {
        console.log(
            "Could not save tasks:",
            error
        );
    }
}

function loadTasks() {
    try {
        const savedTasks =
            localStorage.getItem(
                TASK_STORAGE_KEY
            );

        if (!savedTasks) {
            console.log(
                "No saved tasks found."
            );

            return [];
        }

        const loadedTasks =
            JSON.parse(savedTasks);

        if (!Array.isArray(loadedTasks)) {
            console.log(
                "Saved task data is not valid."
            );

            return [];
        }

        console.log(
            `${loadedTasks.length} saved task(s) loaded.`
        );

        return loadedTasks;

    } catch (error) {
        console.log(
            "Could not load tasks:",
            error
        );
        return [];
    }
}

function clearSavedTasks() {
    const shouldClear =
        confirm(
            "Delete all saved TaskForge tasks?"
        );

    if (!shouldClear) {
        return;
    }

    localStorage.removeItem(
        TASK_STORAGE_KEY
    );

    console.log(
        "All saved tasks have been removed."
    );
}

function hasSavedTasks() {
    const savedTasks =
        localStorage.getItem(
            TASK_STORAGE_KEY
        );

    return savedTasks !== null;
}

function getSavedTaskCount() {
    const savedTasks =
        loadTasks();

    return savedTasks.length;

}

function showStorageInfo() {
    const count =
        getSavedTaskCount();

    console.log(
        `TaskForge currently has ${count} saved task(s).`
    );
}

console.log(
    "TaskForge storage system is ready! 💾"
);