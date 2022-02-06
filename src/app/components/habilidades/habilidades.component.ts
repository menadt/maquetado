import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidad: any;
recibologueado:any =environment.logueado;

  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
  this.miservicio.getDatosHabilidades().subscribe(data=>{
    this.habilidad=data["skill"];
  })
  }

}
