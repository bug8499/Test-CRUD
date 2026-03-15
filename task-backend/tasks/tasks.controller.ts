import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('statusId') statusId: string,
    @Body('userId') userId: string,
  ): Task {
    return this.tasksService.createTask(title, description, statusId, userId);
  }

  @Get(':id')
  viewTask(@Param('id') id: string): Task[] {
    return this.tasksService.viewTask(id);
  }
  
  @Patch(':id')
  updateTask(@Param('id') id: string, title: string, description: string, statusId: string): void {
    this.tasksService.updateTask(id, title, description, statusId)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}