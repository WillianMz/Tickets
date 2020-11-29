import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { ProjetoComponent } from './paginas/projeto/projeto.component';
import { LoginComponent } from './paginas/login/login.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { RegistarUsuarioComponent } from './paginas/registar-usuario/registar-usuario.component';
import { AtivarUsuarioComponent } from './paginas/ativar-usuario/ativar-usuario.component';

import { CategoriaComponent } from './paginas/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    NavbarComponent,
    TicketComponent,
    ProjetoComponent,
    LoginComponent,
    UsuarioComponent,
    RegistarUsuarioComponent,
    AtivarUsuarioComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
