import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string, statusId: string, userId: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      statusId,
      userId,
    };
    this.tasks.push(task);
    return task;
  }

  viewTask(id: string): Task[] {
    return this.tasks = this.tasks.filter(task => task.id == id);
  }

  updateTask(id: string, title: string, description: string, statusId: string): void {
    this.tasks = this.tasks.filter(task => task.id == id);
    this.tasks['title'] = title
    this.tasks['description'] = description
    this.tasks['statusId'] = statusId
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}