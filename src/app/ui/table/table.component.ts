import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MockDataService } from 'src/app/shared/store/mock-data.service';
import { taskInterface } from 'src/app/shared/store/mock.data';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';
import { Subscription, timer } from 'rxjs';
import { DialogStateService } from '../utils/dialog-state.service';

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
export class TableComponent implements OnInit, OnDestroy {
  readonly dataService = inject(MockDataService);
  private readonly dialog = inject(MatDialog);
  private dialogState = inject(DialogStateService);
  @ViewChild('table', { static: true })
  tableBody!: ElementRef<HTMLTableElement>;
  sub!: Subscription;
  faEdit = signal(faPenToSquare);
  faDelete = signal(faTrashCan);
  faPlus = signal(faPlus);
  faCheck = signal(faCheck);

  ngOnInit(): void {
    this.sub = this.dialogState.dialogClose.subscribe((modal) => {
      if (modal) this.scrollToLatest();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.scrollToLatest().unsubscribe();
  }

  trackTask(index: number, task: taskInterface) {
    return task.id;
  }

  scrollToLatest() {
    console.log('invoked');
    return timer(300).subscribe(() => {
      console.log('invoked timer');
      const height = this.tableBody.nativeElement.scrollHeight;
      return (this.tableBody.nativeElement.scrollTop = height);
    });
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
