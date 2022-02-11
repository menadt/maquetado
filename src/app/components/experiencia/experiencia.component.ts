import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: any;
recibologueado:any =environment.logueado;
form!: FormGroup;

  constructor(private miservicio:AccesoperfilService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      nombreInstitucion:['', Validators.required],
      esActual:['', Validators.required],
      fechaInicio:['', Validators.required],
      fechaFinal:[''],
      descripcion:['', Validators.required]
    })
}


  ngOnInit(): void {
  this.miservicio.getDatosExperiencia().subscribe(data =>{
    this.experiencia = data ['work'];
    
  })};
 guardarFormulario() {
      if (this.form.valid) {
        alert("Formulario valido");
        this.form.reset();
        document.getElementById("cerrarModalAcerca")?.click();
      }
      else {
        this.form.markAllAsTouched();
        alert("hay errores");
      }
    }
  }