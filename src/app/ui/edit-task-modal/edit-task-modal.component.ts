import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faXmark,
  faCheck,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { MockDataService } from 'src/app/shared/store/mock-data.service';
import { taskInterface } from 'src/app/shared/store/mock.data';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-edit-task-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent implements OnInit {
  private readonly dialogRef = inject(MatDialogRef<TableComponent>);
  private readonly dialogData: taskInterface = inject(MAT_DIALOG_DATA);
  private readonly mockService = inject(MockDataService);
  // @Inject(MAT_DIALOG_DATA) public data: {name: string}
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
    this.updateForm();
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

  updateForm() {
    return this.taskForm.patchValue({
      ...this.dialogData,
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const updateData = { ...this.taskForm.value, id: this.dialogData.id };
      this.mockService.editTask(updateData as taskInterface);
      this.taskForm.reset();
      return this.dialogRef.close();
    }
  }
}
