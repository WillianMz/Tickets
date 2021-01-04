import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

import { HomeModule } from './paginas/home/home.module';
import { CategoriaModule } from './paginas/categoria/categoria.module';
import { TicketModule } from './paginas/ticket/ticket.module';
import { ProjetoModule } from './paginas/projeto/projeto.module';
import { UsuarioModule } from './paginas/usuario/usuario.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

//spinner
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),  
    ReactiveFormsModule,
    FormsModule,
    
    NgxSpinnerModule,
    //carregamento de modulos
    SharedModule,
    HomeModule,
    CategoriaModule,
    ProjetoModule,
    TicketModule,
    UsuarioModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
