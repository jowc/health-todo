import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MockDataService } from 'src/app/shared/store/mock-data.service';
import { taskInterface } from 'src/app/shared/store/mock.data';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  readonly dataService = inject(MockDataService);
  faEdit = signal(faPenToSquare);
  faDelete = signal(faTrashCan);
  faPlus = signal(faPlus);

  trackTask(index: number, task: taskInterface) {
    return task.id;
  }

  editTask = (task: taskInterface) => this.dataService.editTask(task);

  deleteTask = (id: number) => this.dataService.deleteTask(id);
}
