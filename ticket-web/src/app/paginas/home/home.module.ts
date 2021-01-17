import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [DashboardComponent, PerfilComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    TabsModule.forRoot(),
    NgxSpinnerModule
  ]
})
export class HomeModule { }
