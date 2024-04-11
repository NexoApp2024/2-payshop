import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';
import { AdminClientesComponentComponent } from '../admin-components/admin-clientes-component/admin-clientes-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
  ],
  declarations: [AdminHomePage, AdminClientesComponentComponent]
})
export class AdminHomePageModule {}
