import { Injectable, signal } from '@angular/core';
import { tasks } from './mock.data';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  tasks = signal(tasks);

  deleteTask = (id: number) => this.tasks.mutate((task) => task);
}
