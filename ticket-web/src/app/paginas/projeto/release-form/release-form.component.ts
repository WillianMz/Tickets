import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.css']
})
export class ReleaseFormComponent implements OnInit {

  titulo: string;

  constructor() { }

  @Input() id: number;

  ngOnInit(): void {
    this.titulo = 'Nova release'
  }

}
