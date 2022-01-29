import { Component, OnInit, Input } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  profile: any;
  recibologueado=environment.logueado;
  constructor(private miservicio: AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data => {
      this.profile = data["perfil"];
    
    });
  }
}