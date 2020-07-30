import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion.service';

@Component({
  selector: 'app-hijo-a',
  templateUrl: './hijo-a.component.html',
  styleUrls: ['./hijo-a.component.scss']
})
export class HijoAComponent implements OnInit {

  constructor(public serviceComunication: ComunicacionService) { }

  ngOnInit(): void {
  }

}
