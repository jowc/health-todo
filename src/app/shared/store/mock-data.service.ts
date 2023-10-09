import { Injectable, signal } from '@angular/core';
import { taskInterface, tasks } from './mock.data';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  tasks = signal(tasks);

  editTask = (task: taskInterface) => {
    const getIndex = this.tasks().findIndex((tasks) => tasks.id === task.id);
    this.tasks.mutate((tasks) => {
      const updatedTask = (tasks[getIndex] = { ...task });
      return [...tasks, updatedTask];
    });
  };

  deleteTask = (id: number) =>
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
}
