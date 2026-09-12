let timerSeconds = 25 * 60;
let timerInterval = null;
let timerRunning = false;
let selectedMinutes = 25;

document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay =
        document.getElementById("timer-display");
    const startButton =
        document.getElementById("start-timer");
    const pauseButton =
        document.getElementById("pause-timer");
    const resetButton =
        document.getElementById("reset-timer");
    const studyMode =
        document.getElementById("study-mode");
    const shortBreakMode =
        document.getElementById("short-break-mode");
    const longBreakMode =
        document.getElementById("long-break-mode");
    const timerStatus =
        document.getElementById("timer-status");

    if (!timerDisplay) {
        console.log("Timer display was not found.");
        return;
    }

    function updateTimerDisplay() {
        const minutes =
            Math.floor(timerSeconds / 60);
        const seconds =
            timerSeconds % 60;
        const formattedMinutes =
            String(minutes).padStart(2, "0");
        const formattedSeconds =
            String(seconds).padStart(2, "0");

        timerDisplay.textContent =
            `${formattedMinutes}:${formattedSeconds}`;
    }

    function startTimer() {
        if (timerRunning) {
            return;
        }

        if (timerSeconds <= 0) {
            timerSeconds =
                selectedMinutes * 60;
            updateTimerDisplay();
        }

        timerRunning = true;

        if (timerStatus) {
            timerStatus.textContent =
                "Focus mode is running... 💪";
        }

        timerInterval =
            setInterval(function () {
                timerSeconds--;
                updateTimerDisplay();

                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    timerRunning = false;
                    timerSeconds = 0;
                    updateTimerDisplay();

                    if (timerStatus) {
                        timerStatus.textContent =
                            "Time is up! 🎉";
                    }

                    alert(
                        "Timer finished! Great work! 🎉"
                    );
                }
            }, 1000);
    }

    function pauseTimer() {
        if (!timerRunning) {
            if (timerStatus) {
                timerStatus.textContent =
                    "Timer is already paused.";
            }
            return;
        }

        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;

        if (timerStatus) {
            timerStatus.textContent =
                "Timer paused. Take a small break. ⏸️";
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;
        timerSeconds =
            selectedMinutes * 60;

        updateTimerDisplay();

        if (timerStatus) {
            timerStatus.textContent =
                "Timer reset. Ready to focus!";
        }
    }

    function changeMode(minutes, message) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerRunning = false;
        selectedMinutes = minutes;
        timerSeconds =
            selectedMinutes * 60;

        updateTimerDisplay();

        if (timerStatus) {
            timerStatus.textContent =
                message;
        }
    }

    function clearModeButtons() {
        const modeButtons =
            document.querySelectorAll(".mode-btn");

        modeButtons.forEach(function (button) {
            button.classList.remove(
                "active-mode"
            );
        });
    }

    if (studyMode) {
        studyMode.addEventListener(
            "click",
            function () {
                clearModeButtons();
                studyMode.classList.add(
                    "active-mode"
                );

                changeMode(
                    25,
                    "Ready for a 25 minute study session! 📚"
                );
            }
        );
    }

    if (shortBreakMode) {
        shortBreakMode.addEventListener(
            "click",
            function () {
                clearModeButtons();
                shortBreakMode.classList.add(
                    "active-mode"
                );

                changeMode(
                    5,
                    "Short break selected. Relax for 5 minutes. ☕"
                );
            }
        );
    }

    if (longBreakMode) {
        longBreakMode.addEventListener(
            "click",
            function () {
                clearModeButtons();
                longBreakMode.classList.add(
                    "active-mode"
                );

                changeMode(
                    15,
                    "Long break selected. Take 15 minutes. 🌿"
                );
            }
        );
    }

    if (startButton) {
        startButton.addEventListener(
            "click",
            startTimer
        );
    }

    if (pauseButton) {
        pauseButton.addEventListener(
            "click",
            pauseTimer
        );
    }

    if (resetButton) {
        resetButton.addEventListener(
            "click",
            resetTimer
        );
    }

    updateTimerDisplay();

    console.log(
        "TaskForge timer is ready!"
    );
});