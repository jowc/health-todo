import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MockDataService } from 'src/app/shared/store/mock-data.service';
import { taskInterface } from 'src/app/shared/store/mock.data';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    AddTaskModalComponent,
    EditTaskModalComponent,
    MatDialogModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  readonly dataService = inject(MockDataService);
  private readonly dialog = inject(MatDialog);
  faEdit = signal(faPenToSquare);
  faDelete = signal(faTrashCan);
  faPlus = signal(faPlus);
  faCheck = signal(faCheck);

  trackTask(index: number, task: taskInterface) {
    return task.id;
  }

  addTask() {
    return this.dialog.open(AddTaskModalComponent, {
      height: '520px',
      width: '500px',
    });
  }

  editTask = (task: taskInterface) =>
    this.dialog.open(EditTaskModalComponent, {
      data: task,
      height: '520px',
      width: '550px',
    });

  deleteTask = (id: number) => this.dataService.deleteTask(id);
}
