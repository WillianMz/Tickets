import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento-form',
  templateUrl: './documento-form.component.html',
  styleUrls: ['./documento-form.component.css']
})
export class DocumentoFormComponent implements OnInit {

  titulo: string;
  file: File;

  constructor() { }

  ngOnInit(): void {
  }

}
