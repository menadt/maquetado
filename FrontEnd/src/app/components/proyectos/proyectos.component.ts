import { Component, OnInit } from '@angular/core';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyecto:any="";
recibologueado:any =environment.logueado;
form!: FormGroup;
  constructor(private miservicio:AccesoperfilService, private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      nombreProyecto: ['', Validators.required],
      anio: ['', [Validators.required,Validators.min(1960)]],
      descripcion: ['', Validators.required],
      url: ['']
    })
  }

  ngOnInit(): void {
    this.miservicio.getDatosProyectos().subscribe(data=>{
      this.proyecto = data["proyecto"];
    })
  }

  guardarFormulario() {
    if (this.form.valid) {
      alert("Formulario valido");
      document.getElementById("cerrarFormularioproyecto")?.click();
    }
    else {
      this.form.markAllAsTouched();
      alert("hay errores");
    }
  }
  resetearFormulario() {
    this.form.reset();
  }

  get nombreProyecto(){
    return this.form.get("nombreProyecto");
  }
  get anio(){
    return this.form.get("anio");
  }
  get descripcion(){
    return this.form.get("descripcion");
  }
  get url(){
    return this.form.get("url");
  }

  mostrarProyectos(item:any){
    this.form.get("nombreProyecto")?.setValue(this.proyecto[item].nombre);
    this.form.get('anio')?.setValue(this.proyecto[item].anio);
    this.form.get("descripcion")?.setValue(this.proyecto[item].descripcion);
    this.form.get("url")?.setValue(this.proyecto[item].url_proyecto);
   }
}
