import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion.service';

@Component({
  selector: 'app-padre-servicios',
  templateUrl: './padre-servicios.component.html',
  styleUrls: ['./padre-servicios.component.scss']
})
export class PadreServiciosComponent implements OnInit {

  constructor(public comunicationService: ComunicacionService) { }

  ngOnInit(): void {
  }

}
