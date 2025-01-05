import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [SideMenuComponent, ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent, ModalComponent],
})
export class SharedModule {}
