import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:any;
  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosProyectos().subscribe(data=>{
      this.proyectos=data["project"];
    })
  }

}
