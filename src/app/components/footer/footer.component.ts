import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
datos: any;
  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data =>{
      this.datos = data["perfil"]
    })
  }

}
