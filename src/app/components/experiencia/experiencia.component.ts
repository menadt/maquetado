import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: any;
  constructor(private miservicio:AccesoperfilService) { }

  ngOnInit(): void {
  this.miservicio.getDatosExperiencia().subscribe(data =>{
    this.experiencia = data ['work'];
    
  })

}
}