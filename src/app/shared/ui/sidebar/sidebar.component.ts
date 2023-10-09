import { Component, signal } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import {
  faCalendarDay,
  faCalendarWeek,
  faCheck,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuItems = signal([
    {
      icon: faCalendarDay,
      title: 'Today',
      count: 5,
      active: true,
    },
    {
      icon: faCalendarWeek,
      title: 'Scheduled',
      count: 5,
      active: false,
    },
    {
      icon: faFolderOpen,
      title: 'All',
      count: 5,
      active: false,
    },
    {
      icon: faFlag,
      title: 'Flaged',
      count: 5,
      active: false,
    },
    {
      icon: faCheck,
      title: 'Completed',
      count: 5,
      active: false,
    },
  ]);
}
