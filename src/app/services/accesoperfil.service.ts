import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}

