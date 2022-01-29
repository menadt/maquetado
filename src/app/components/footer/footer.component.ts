import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
datos: any;
recibologueado=environment.logueado; 

  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data =>{
      this.datos = data["perfil"]
    })
  }

}
