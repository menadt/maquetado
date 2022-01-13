import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  profile:any;

  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data =>{
      this.profile=data["perfil"];
    });
  }
}
