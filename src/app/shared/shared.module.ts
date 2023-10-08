import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@NgModule({
  imports: [HeaderComponent, SidebarComponent, SidebarItemComponent],
  exports: [HeaderComponent, SidebarComponent, SidebarItemComponent],
})
export class SharedModule {}
