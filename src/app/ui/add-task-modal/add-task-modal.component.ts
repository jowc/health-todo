import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faSortDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MockDataService } from 'src/app/shared/store/mock-data.service';
import { taskInterface } from 'src/app/shared/store/mock.data';
import { DialogStateService } from '../utils/dialog-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit, OnDestroy {
  private readonly dialogRef = inject(MatDialogRef<TableComponent>);
  private readonly mockService = inject(MockDataService);
  private dialogState = inject(DialogStateService);
  sub?: Subscription;
  faClose = signal(faXmark);
  faCheck = signal(faCheck);
  faSortDown = signal(faSortDown);
  taskForm = new FormGroup({
    task: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ],
    }),
    description: new FormControl<string>('', {
      validators: [Validators.minLength(20), Validators.maxLength(255)],
    }),
    time: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    priority: new FormControl<boolean>(false),
  });

  ngOnInit(): void {
    this.sub = this.dialogRef
      .beforeClosed()
      .subscribe(() => this.dialogState.dialogClose.next(true));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  closeModal = () => this.dialogRef.close();

  get task() {
    return this.taskForm.get('task');
  }

  get description() {
    return this.taskForm.get('description');
  }

  get time() {
    return this.taskForm.get('time');
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.mockService.addTask(this.taskForm.value as taskInterface);
      this.taskForm.reset();
      return this.dialogRef.close();
    }
  }
}
