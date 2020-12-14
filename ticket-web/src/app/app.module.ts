import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FooterComponent } from './navegacao/footer/footer.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { HomeModule } from './paginas/home/home.module';
import { CategoriaModule } from './paginas/categoria/categoria.module';
import { TicketModule } from './paginas/ticket/ticket.module';
import { ProjetoModule } from './paginas/projeto/projeto.module';
import { UsuarioModule } from './paginas/usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),    
    ReactiveFormsModule,
    FormsModule,

    //carregamento de modulos
    HomeModule,
    CategoriaModule,
    ProjetoModule,
    TicketModule,
    UsuarioModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
