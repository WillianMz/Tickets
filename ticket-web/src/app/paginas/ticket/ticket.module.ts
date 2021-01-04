import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    TicketListComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    TicketRoutingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TicketModule { }
