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
      nombreInstitucion: ['', Validators.required],
      logoInstitucion:['']

    })
    
  }

  ngOnInit(): void {
    this.miservicio.getDatosEducacion().subscribe(data => {
      this.educacion = data["career"]
    })
  }
  guardarFormulario() {
    if (this.form.valid) {
      alert("Formulario valido");
      this.form.reset();
      document.getElementById("cerrarEducacionModal")?.click();
    }
    else {
      this.form.markAllAsTouched();
      alert("hay errores");
    }
  }
  resetearFormulario(){
    this.form.reset();
  }
  borrarEducacion() {
    alert("Título Borrado");
  }
  get titulo(){
    return this.form.get("titulo");
  }
  get recibido(){
    return this.form.get("recibido");

  }
  get fechaInicio (){
    return this.form.get("fechaInicio");
  }
  get fechaFinal (){
    return this.form.get("fechaFinal");
  }
  get nombreInstitucion (){
    return this.form.get("nombreInstitucion");
  }
}
