import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;
  recibologueado:any =environment.logueado;
  form!: FormGroup;

  constructor(private miservicio: AccesoperfilService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      titulo: ['', Validators.required],
      recibido: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: [''],
      nombreInstitucion: ['', Validators.required]

    })
    
  }

  ngOnInit(): void {
    this.miservicio.getDatosEducacion().subscribe(data => {
      this.educacion = data["career"]
    })
  }

}
