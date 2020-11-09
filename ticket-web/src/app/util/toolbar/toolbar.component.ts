import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sidebarVisivel;
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuário',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      },
      {
        label: 'Equipe',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      },
      {
        label: 'Gerente',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      },
      {
        label: 'Administrador',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      },
      {
        label: 'Configuração',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      },
      {
        label: 'Sobre',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
              {label: 'User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Filter', icon: 'pi pi-fw pi-filter'}
            ]
          },
          {label: 'Open', icon: 'pi pi-fw pi-external-link'},
          {separator: true},
          {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      }
    ]
  }

}
