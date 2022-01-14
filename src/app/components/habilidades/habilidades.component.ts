import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidad: any;
  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
  this.miservicio.getDatosHabilidades().subscribe(data=>{
    this.habilidad=data["skill"];
  })
  }

}
