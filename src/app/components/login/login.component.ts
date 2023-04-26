import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importamos la libreria para dar uso de los formularios
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formulariodeinicio:FormGroup
  variablecorreo: any; 
  elestado:any;


  constructor(
    private router: Router,
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService
    ) {
      //almacenamos los datos para poder procesarlos
      this.formulariodeinicio = this.formulario.group({
        correo: [''],
        contrasenia:['']
      });
      this.variablecorreo = '';
  }
  ngOnInit() {} 

  iraPrincipal(): void {
    this.router.navigate(['/home']);
  }
  //esta funcion la cree para poder capturar el valor del input y utilizarlo
  obtenerCorreo(valorobtenido:string){
    this.variablecorreo = valorobtenido;
  }

  //funcion para enviar datos
  enviarDatos(): any{
    this.coneccionServicio.agregarInicio(this.formulariodeinicio.value).subscribe();
    this.coneccionServicio.extraerelestado(this.variablecorreo).subscribe(respuesta=>{
      this.elestado=respuesta[0]['estado'];
      if(this.elestado=='abierto'){
        this.router.navigate(['home/login/proyectos/'+this.variablecorreo]);
      }else{
        window.alert("Vuelve a intentarlo, verifica tu correo y contraseña");
      }
    });
    //pasamos el dato mediante la funcion creada de lado del servicio
    
  }

}
