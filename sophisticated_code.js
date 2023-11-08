/* 
filename: sophisticated_code.js
content: This code implements a sophisticated and elaborate task manager. It allows users to create, modify, and delete tasks, set deadlines, assign priorities, and generate reports. This is a highly professional and creative example of JavaScript code.
*/

class Task {
  constructor(title, description, status, priority, deadline) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.deadline = deadline;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  updateDeadline(newDeadline) {
    this.deadline = newDeadline;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getAllTasks() {
    return this.tasks;
  }

  getTasksByStatus(status) {
    return this.tasks.filter(task => task.status === status);
  }

  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  deleteTaskByTitle(title) {
    this.tasks = this.tasks.filter(task => task.title !== title);
  }

  generateReport() {
    let report = `Task Manager Report:\n`;
    
    this.tasks.forEach((task, index) => {
      report += `Task ${index + 1}:\n`;
      report += `Title: ${task.title}\n`;
      report += `Description: ${task.description}\n`;
      report += `Status: ${task.status}\n`;
      report += `Priority: ${task.priority}\n`;
      report += `Deadline: ${task.deadline}\n\n`;
    });

    return report;
  }
}

// Usage

const taskManager = new TaskManager();

const task1 = new Task("Task 1", "Implement feature X", "In Progress", "High", "2022-01-01");
const task2 = new Task("Task 2", "Fix bug Y", "Completed", "Medium", "2022-02-15");
const task3 = new Task("Task 3", "Refactor code", "Not Started", "Low", "2022-03-30");

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

console.log(taskManager.generateReport());

taskManager.deleteTaskByTitle("Task 2");

console.log(taskManager.generateReport());

const allTasks = taskManager.getAllTasks();
console.log(allTasks);

const inProgressTasks = taskManager.getTasksByStatus("In Progress");
console.log(inProgressTasks);

const highPriorityTasks = taskManager.getTasksByPriority("High");
console.log(highPriorityTasks);