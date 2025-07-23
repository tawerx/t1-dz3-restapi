import { Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../services/task.service";
import { Task } from "../models/task.model";

export const getAllTasksHandler = (req: Request, res: Response) => {
  const tasks = getAllTasks();
  res.status(200).json(tasks);
};

export const getTaskByIdHandler = (req: Request, res: Response) => {
  const taskId = Number(req.params.id);
  const task = getTaskById(taskId);
  res.status(200).json(task);
};

export const createTaskHandler = (req: Request, res: Response) => {
  const task: Task = req.body;
  createTask(task);
  res.status(201).json(task);
};

export const updateTaskHandler = (req: Request, res: Response) => {
  const task: Task = req.body;
  const taskId = Number(req.params.id);
  updateTask(task, taskId);
  res.status(200).json(task);
};

export const deleteTaskHandler = (req: Request, res: Response) => {
  const taskId = Number(req.params.id);
  deleteTask(taskId);
  res.sendStatus(204);
};
