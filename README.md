# TaskForge

taskForge is a simple study planner that I made while learning web development.
I wanted to make something useful for studying intead of making only small practice projects.
With TaskForge, I can add my study tasks, use a timer, check my progress, and keep my subjects organized.

Demo link: <https://princekumar189344-netizen.github.io/TaskForge-/>

-----

## Features

- Add study tasks
- Select a subject
- Add a due date
- Complete a task
- Undo a completed task
- Delete tasks
- Filter tasks
- See total tasks
- See completed tasks
- See pending tasks
- See my progress percentage
- See today's tasks
- 25 m9inutes study timer
- 5 minutes short break
- 15 minutes long break
- Pause and reset the timer
- Save tasks in the browser
- Store subject informaation in JSON

----

## Files

### index.html

This is the main file of the project.
It contains the Home, Tasks, Timer and Subjects sections.
<img width="1366" height="720" alt="Screenshot 2026-09-03 185855" src="https://github.com/user-attachments/assets/0f27b971-0f39-4514-a43b-1eb7e7f98b9a" />


### css/style.css

This file is used for the design of the website.
It controls the colors, cards, buttons, navigation, task list, timer, progress bar and responsive layout.
<img width="1366" height="720" alt="Screenshot 2026-09-04 172324" src="https://github.com/user-attachments/assets/9a4b3021-6e31-40d8-8c97-1bb40fc80705" />

### js/script.js
This is the main JavaScript file.
It handles the navigation between the different sections and displays the current date.
<img width="1366" height="720" alt="Screenshot 2026-09-04 182037" src="https://github.com/user-attachments/assets/88ec01e4-7e4b-49b7-951e-c9c47c38c736" />

#### js/tasks.js

This file handles the study tasks.
It is used for adding tasks, completing tasks, deleting tasks and filtering tasks.
<img width="1366" height="720" alt="Screenshot 2026-09-05 094114" src="https://github.com/user-attachments/assets/6186d2f5-2d1e-4a13-b5bb-070cbc5c2639" />

#### js/timer.js

This file controls the study timer.
There are three timer modes:

- 25 minutes study
- 5 minutes short break
- 15 minutes long break
- It also handles the start, pause and reset buttons.
<img width="1366" height="768" alt="Screenshot 2026-09-08 201339" src="https://github.com/user-attachments/assets/7442af80-aefc-4832-8c99-02a3370262fa" />

#### js/dashboard.js

This file updates the dashboard.
It calculates the number of total, completed and pending tasks.
It also calculates the progress percentage and shows today's tasks.
<img width="1366" height="768" alt="Screenshot 2026-09-10 200843" src="https://github.com/user-attachments/assets/b8a54d41-08ca-4ab0-bfab-afe890e52dd7" />

#### js/storage.js

This file is used for saving tasks in browser local storage.
This means tasks don't disappear when the page is refreshed.
<img width="1366" height="720" alt="Screenshot 2026-09-12 165741" src="https://github.com/user-attachments/assets/d7aa67de-e36f-4f59-a49e-ffe6edba65d7" />

### data/subjects.json

This file stores the subject information.
The subjects currently included are:

- Mathematics
- Physics
- hemistry
- nglish
- omputer

**Each subject has a name, icon, description and color value.**
<img width="1366" height="768" alt="Screenshot 2026-09-12 174109" src="https://github.com/user-attachments/assets/1918b61c-fe7c-42ed-9537-e07016291bdb" />

----

## Technologies Used

I used:

- HTML
- CSS
- JavaScript
- JSON
- Local Storage
**I did not use any frameworks for this project.**

----

## How I Made It

- I started by making the basic HTML structure.
- After that I worked on the CSS to make the website look better.
- Then I added JavaScript for navigation and started building the task manager.
- After the task manager was working, I added the study timer and dashboard.
- I also added local storage so that my tasks could stay saved after refreshing the page.
- Finally, I created the subjects JSON file to keep my subject information organized.

----

## What I Learned

This project helped me practice a lot of JavaScript.

I learned about:

- Variables
- Functions
- Arrays
- Objects
- Events
- DOM manipulation
- `querySelector()`
- `querySelectorAll()`
- `addEventListener()`
- `filter()`
- `find()`
- `createElement()`
- `setInterval()`
- `clearInterval()`
- JavaScript dates
- Local storage
- JSON
- `JSON.stringify()`
- `JSON.parse()`

**I also learned that when a project has multiple files, I need to make sure the files work together correctly.**

----

## Testing

I tested the project while building each part.

For the task manager, I tested:

- Adding a task
- Completing a task
- Undoing a task
- Deleting a task
- Filtering tasks
- Adding different subjects
- Setting different due dates

For the timer, I tested:

- Starting the timer
- Pausing the timer
- Resetting the timer
- Changing between timer modes
- Checking what happens when the timer reaches zero

For the dashboard, I checked:

- Total task count
- Completed task count
- Pending task count
- Progress percentage
- Today's tasks

**I also refreshed the page to make sure saved tasks were still there.**

----

## Problems I Faced

One of the problems I had was making all the JavaScript files work together.
I also had to make sure that tasks were saved correctly when they were added, completed or deleted.
The timer needed testing too because I had to make sure it stopped correctly when paused or reset.
There were also some small layout problems that I fixed while working on the CSS.

----

## Future Improvements

There are still some things I would like to add in the future.
Some ideas are:

- Task priority
- More subjects
- Weekly study statistics
- More timer choices
- Study sounds
- Light mode
- Better mobile design
- More ways to track study progress

----

## Why I Made This Project

I made TaskForge because I wanted to learn web development by building something instead of only following small examples.
A study planner also seemed like a useful project because I can understand what the different features are supposed to do.

----

## Final Thoughts

TaskForge started as a basic idea and became a bigger project as I added more features.
I learned a lot while making it, especially about JavaScript and connecting different files together.
There are still things I can improve, but I am happy with what I was able to make while learning.
Thanks for checking out my project! 💻📚
Made while learning web development.

*TaskForge © 2026*
