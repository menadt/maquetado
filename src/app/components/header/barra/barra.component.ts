import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
recibologueado:any;
form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      nickName:['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.recibologueado=environment.logueado;
  }

}
