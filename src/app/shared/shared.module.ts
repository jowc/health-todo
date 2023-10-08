import { NgModule } from '@angular/core';
import { HeaderComponent } from './ui/header/header.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { SidebarItemComponent } from './ui/sidebar-item/sidebar-item.component';

@NgModule({
  imports: [HeaderComponent, SidebarComponent, SidebarItemComponent],
  exports: [HeaderComponent, SidebarComponent, SidebarItemComponent],
})
export class SharedModule {}
