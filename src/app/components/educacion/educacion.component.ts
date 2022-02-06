import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;
  recibologueado:any =environment.logueado;
  constructor(private miservicio: AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosEducacion().subscribe(data => {
      this.educacion = data["career"]
    })
  }

}
