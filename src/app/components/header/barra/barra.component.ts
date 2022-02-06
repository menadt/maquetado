import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
recibologueado:any;

  constructor() { }

  ngOnInit(): void {
    this.recibologueado=environment.logueado;
  }

}
