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
      descripcion:['', Validators.required],
      urlInstitucion:[''],
      urlLogo:['']
    })
}


  ngOnInit(): void {
  this.miservicio.getDatosExperiencia().subscribe(data =>{
    this.experiencia = data ['experiencia'];
    
  })};
 guardarFormulario() {
      if (this.form.valid) {
        alert("Formulario valido");
        this.form.reset();
        document.getElementById("cerrarFormularioExperiencia")?.click();
      }
      else {
        this.form.markAllAsTouched();
        alert("hay errores");
      }
    }
  resetearFormulario(){
    this.form.reset();
  }
  get nombreInstitucion() {
    return this.form.get("nombreInstitucion");
  }
  get esActual(){
    return this.form.get("esActual");
  }
  get fechaInicio(){
    return this.form.get("fechaInicio");
  }
  get fechaFinal(){
    return this.form.get("fechaFinal");
  }
  get descripcion(){
    return this.form.get("descripcion");
  }
  get urlInstitucion(){
    return this.form.get("urlInstitucion");
  }
  get urlLogo() {
    return this.form.get("urlLogo");
  }
  mostrarExperiencia(item: any) {
    this.form.get("nombreInstitucion")?.setValue(this.experiencia[item].nombreInstitucion);
    this.form.get("fechaInicio")?.setValue(this.experiencia[item].fechaInicio);
    this.form.get("descripcion")?.setValue(this.experiencia[item].descripcion);
    this.form.get("urlInstitucion")?.setValue(this.experiencia[item].urlInstitucion);
    this.form.get("urlLogo")?.setValue(this.experiencia[item].urlLogo);

  }
  }