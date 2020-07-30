import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.scss']
})
export class DirectivasEstructuralesComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  opcion: string;
  isChecked: boolean = false;
  nombres: string[] = ['Carlos', 'José', 'Valeria', 'Natalia'];
  personas: any[] = [
    {nombre: 'Calor', edad:34},
    {nombre: 'José', edad:44},
    {nombre: 'Valeria', edad:13},
    {nombre: 'Natalia', edad:31}
  ]
}
