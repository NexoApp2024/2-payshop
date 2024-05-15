import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHomePageRoutingModule } from './admin-home-routing.module';

import { AdminHomePage } from './admin-home.page';
import { AdminClientesComponentComponent } from '../admin-components/admin-clientes-component/admin-clientes-component.component';
import { NuevoClienteComponent } from '../admin-components/components/nuevo-cliente/nuevo-cliente.component';
import { TablaClienteComponent } from '../admin-components/components/tabla-cliente/tabla-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHomePageRoutingModule,
  ],
  declarations: [
    AdminHomePage, 
    AdminClientesComponentComponent,
    NuevoClienteComponent,
    TablaClienteComponent
  ]
})
export class AdminHomePageModule {}
