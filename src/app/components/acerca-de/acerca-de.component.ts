import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  profile: any;

  constructor(private miservicio: AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data => {
      this.profile = data["perfil"];
    });
  }
}