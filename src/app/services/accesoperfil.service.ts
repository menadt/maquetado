import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class AccesoperfilService {

  constructor(private http:HttpClient) { 
   
  }
  getDatosPerfil(): Observable<any>{
      return this.http.get('./assets/Data/perfil.json');
  }

  getDatosEducacion(): Observable<any>{
    return this.http.get('./assets/Data/educacion.json')
  }
getDatosExperiencia(): Observable<any>{
  return this.http.get('./assets/Data/trabajo.json')
}
getDatosHabilidades(): Observable<any>{
  return this.http.get('./assets/Data/habilidades.json')
}  
getDatosProyectos(): Observable<any>{
  return this.http.get('./assets/Data/proyectos.json')
}
editarHabilidad(habilidad:Habilidad): Observable<any>{
  return this.http.post('http://localhost:3000/posts', habilidad)
}
editarDatosPersona(persona: Persona): Observable<any> {
    return this.http.post('http://localhost:3000/posts', persona);
  }
}

