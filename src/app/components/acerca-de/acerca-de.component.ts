import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoperfilService } from 'src/app/services/accesoperfil.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  profile: any="";
  form!:FormGroup;
  recibologueado: any = environment.logueado;
  
  constructor(private miservicio: AccesoperfilService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      posicion: [''],
      ciudad: [''],
      correo:['',[Validators.email]],
      telefono:['',[Validators.minLength(10)]],
      fechaDeNacimiento:[''],
      github: [''],
      linkedin: [''],
      url_foto: ['']
      })
  }

  ngOnInit(): void {
    this.miservicio.getDatosPerfil().subscribe(data => {
      this.profile = data["perfil"];
    })
  };
  guardarFormulario(){
    if (this.form.valid)
    {
      alert("Formulario valido");
      this.form.reset();
      document.getElementById("cerrarModalAcerca")?.click();
    }
    else{
      this.form.markAllAsTouched();
      alert("hay errores"); 
    }
  }
}