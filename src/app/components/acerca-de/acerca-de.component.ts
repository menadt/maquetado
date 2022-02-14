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
      correo:['',[Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
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
  resetearFormulario(){
    this.form.reset();
  }
  get fullName(){
    return this.form.get("fullName");
  }
  get posicion(){
    return this.form.get("posicion");
  }
  get ciudad(){
    return this.form.get("ciudad");
  }
  get correo(){
    return this.form.get("correo");
  }
  get telefono(){
    return this.form.get("telefono");
  }
  get fechaDeNacimiento(){
    return this.form.get("fechaDeNacimiento");
  }
  get github(){
    return this.form.get("github");
  }
  get linkedin (){
    return this.form.get("linkedin");
  }
  get url_foto (){
    return this.form.get("url_foto");
  }
}