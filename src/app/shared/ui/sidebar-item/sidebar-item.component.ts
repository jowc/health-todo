import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input({ required: true }) itemData!: {
    icon: IconDefinition;
    title: string;
    count: number;
    active?: boolean;
  };
}
