# Angular To-Do List Application

This is a simple To-Do List application built with Angular. It allows users to add, delete, and manage their tasks. The project demonstrates core Angular features such as component-based architecture, two-way data binding, and services.

## Features

- Add new tasks to the list
- Delete tasks from the list
- Simple and clean user interface
- Uses Angular services for data management
- Responsive design

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [Angular CLI](https://angular.io/guide/setup-local) (version 12.x or higher)
- Git (optional for cloning the repository)

### Installation

1. Clone the repository or download the zip file:
    ```bash
    git clone https://github.com/your-username/angular-todo-list.git
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
