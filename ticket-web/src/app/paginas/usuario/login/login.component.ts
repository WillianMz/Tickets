import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  anoAtual: Number;

  constructor() { }

  ngOnInit(): void {
    this.retornaAnoAtual();
  }

  retornaAnoAtual(){
    var data = new Date();
    var ano = data.getFullYear();
    return this.anoAtual = ano;
  }

}
