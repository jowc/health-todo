import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MockDataService } from 'src/app/shared/store/mock-data.service';

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

  editTask = (task: unknown) => {
    console.log({ task });
  };

  deleteTask = (id: number) => {
    console.log({ id });
  };
}
