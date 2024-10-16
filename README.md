# Angular To-Do List Application

This is a dynamic and feature-rich **To-Do List Application** built with **Angular**. The app allows users to manage tasks, categorize them, set due dates, prioritize tasks, and track progress. The application also uses **local storage** to persist data, ensuring tasks remain even after the browser is closed.
## Features

### 1. Task Management
- Add new tasks with specific categories, due dates, and priorities.
- Mark tasks as completed, edit, or delete tasks easily.
- All tasks are saved in the browser's **local storage** for persistence.

### 2. Task Categories
- Assign a category to each task for better organization (e.g., "Work", "Personal", etc.).
- Filter tasks based on categories to quickly find relevant tasks.

### 3. Due Date Management
- Assign due dates to tasks and automatically highlight overdue tasks with a special background color.
- Tasks that are past due will be shown in red to notify users.

### 4. Prioritization
- Tasks can be marked as **High**, **Medium**, or **Low** priority.
- High-priority tasks are highlighted with red text, Medium priority with yellow, and Low priority with green.

### 5. Task Editing
- Edit existing tasks with an intuitive interface.
- Easily switch between task editing mode and normal mode.

### 6. Progress Tracker
- The app includes a **progress bar** that shows the completion status of all tasks.
- The bar updates dynamically as tasks are completed.

### 7. Animations
- Smooth fade-in and fade-out animations when adding or deleting tasks.
- Interactive and user-friendly animations to improve the experience.

### 8. Responsive Design
- The layout is responsive, making it accessible on both desktop and mobile devices.
- Buttons and task lists adjust based on screen size for an optimal user experience.


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [Angular CLI](https://angular.io/guide/setup-local) (version 12.x or higher)
- Git (optional for cloning the repository)

### Installation

1. Clone the repository or download the zip file:
    ```bash
    git clone https://github.com/MOQRAN/todo-list.git
    cd angular-todo-list
    ```

2. Install the project dependencies:
    ```bash
    npm install
    ```

3. Start the Angular development server:
    ```bash
    ng serve
    ```

4. Open a browser and navigate to `http://localhost:4200/`. You should see the To-Do List app running.

## Usage

1. Type a task in the input field and click **Add** to add a new task.
2. The task will appear in the list below the input field.
3. Click **Delete** next to any task to remove it from the list.

## Project Structure

```plaintext
src/
 ├── app/
 │   ├── todo/
 │   │   ├── todo.component.ts   // The component logic
 │   │   ├── todo.component.html // The template (UI)
 │   │   ├── todo.component.css  // The styles
 │   ├── todo.service.ts         // The service for managing tasks
 ├── assets/                     // Static assets
 ├── environments/               // Configuration for environments
 ├── index.html                  // Entry point for the web app
 └── styles.css                  // Global styles
