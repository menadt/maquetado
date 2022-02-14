import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidad: any;
recibologueado:any =environment.logueado;
form!: FormGroup;

  constructor(private miservicio:AccesoperfilService, private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
      nombreHabilidad:['', Validators.required],
      puntuacion: ['', [Validators.required,Validators.min(1), Validators.max(10)]],
      descripcion: ['']
    })
  }

  ngOnInit(): void {
  this.miservicio.getDatosHabilidades().subscribe(data=>{
    this.habilidad=data["skill"];
  })
  }
  guardarFormulario() {
    if (this.form.valid) {
      alert("Formulario valido");
      this.form.reset();
      document.getElementById("cerrarHabilidadesModal")?.click();
    }
    else {
      this.form.markAllAsTouched();
      alert("hay errores");
    }
  }
  borrarHabilidad(){
    alert("Formulario Borrado");
  }
  
  resetearFormulario(){
    this.form.markAsUntouched();
  }
  get nombreHabilidad()
    {
      return this.form.get("nombreHabilidad");
    }
  get puntuacion(){
    return this.form.get("puntuacion");
  }
  get descripcion (){
    return this.form.get("descripcion");
  }
}
