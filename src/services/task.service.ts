import { Task } from "../models/task.model";

const tasks: Task[] = [];
let currentId = 0;

const getAllTasks = (): Task[] => tasks;

const getTaskById = (id: number): Task => {
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  return task;
};

const deleteTask = (id: number): void => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    throw new Error(`Task with id ${id} not found`);
  }

  tasks.splice(taskIndex, 1);
};

const createTask = (task: Omit<Task, "id">): void => {
  currentId++;
  tasks.push({ ...task, id: currentId });
};

const updateTask = (newTask: Omit<Task, "id">, taskId: number): void => {
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    throw new Error(`Task with id ${taskId} not found`);
  }

  tasks[taskIndex] = { ...newTask, id: taskId };
};

export { getAllTasks, getTaskById, deleteTask, createTask, updateTask };
