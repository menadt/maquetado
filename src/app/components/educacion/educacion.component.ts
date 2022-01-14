import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;
  constructor(private miservicio: AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosEducacion().subscribe(data => {
      this.educacion = data["career"]
    })
  }

}
