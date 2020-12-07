import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FooterComponent } from './navegacao/footer/footer.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

//paginas
import { HomeComponent } from './paginas/home/home.component';
import { CategoriaListComponent } from './paginas/categoria/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './paginas/categoria/categoria-form/categoria-form.component';
import { ProjetoListComponent } from './paginas/projeto/projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './paginas/projeto/projeto-form/projeto-form.component';
import { TicketListComponent } from './paginas/ticket/ticket-list/ticket-list.component';
import { TicketFormComponent } from './paginas/ticket/ticket-form/ticket-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    CategoriaListComponent,
    CategoriaFormComponent,
    ProjetoListComponent,
    ProjetoFormComponent,
    TicketListComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
