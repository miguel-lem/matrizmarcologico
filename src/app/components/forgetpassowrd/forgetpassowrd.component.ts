import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importamos la libreria para dar uso de los formularios
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-forgetpassowrd',
  templateUrl: './forgetpassowrd.component.html',
  styleUrls: ['./forgetpassowrd.component.css']
})
export class ForgetpassowrdComponent {

  formularioderecuperacion:any;
  
  constructor( 
    private router: Router,
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService
  ) {
    //almacenamos los datos para poder procesarlos
    this.formularioderecuperacion = this.formulario.group({
      correo: ['']
    });

  }

  ngOnInit() {}

  iraPrincipal(): void {
    this.router.navigate(['home/login']);
  }

  enviarDatos(): void{
    console.log("lo que estoy para enviar");
    console.log(this.formularioderecuperacion.value);
    this.coneccionServicio.recuperarContraseña1(this.formularioderecuperacion.value).subscribe();
  }

}
