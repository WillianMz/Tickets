import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ToolbarComponent } from './util/toolbar/toolbar.component';

//componentes PRIMENG
import { ToolbarModule} from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar'
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

import { NavbarComponent } from './util/navbar/navbar.component';
/*
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { TicketsComponent } from './paginas/tickets/tickets.component';
import { TicketFormComponent } from './paginas/tickets/ticket-form/ticket-form.component';
import { ProjetosComponent } from './paginas/projetos/projetos.component';
import { ProjetoFormComponent } from './paginas/projetos/projeto-form/projeto-form.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioFormComponent } from './paginas/usuarios/usuario-form/usuario-form.component';
import { LoginComponent } from './paginas/usuarios/login/login.component';
import { RegistrarFormComponent } from './paginas/usuarios/registrar-form/registrar-form.component';*/

import { CategoriaModule } from './paginas/categorias/categoria.module';
import { ProjetoModule } from './paginas/projetos/projeto.module';
import { TicketModule } from './paginas/tickets/ticket.module';
import { UsuarioModule } from './paginas/usuarios/usuario.module';
import { UsuarioFormComponent } from './paginas/usuarios/usuario-form/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToolbarModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule,

    CategoriaModule,
    ProjetoModule,
    TicketModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
