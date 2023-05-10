import { Component } from '@angular/core';
import { Router } from '@angular/router';
//importamos la libreria para dar uso de los formularios
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formularioderegistro:FormGroup;
  variablecorreo: any;

  constructor(
    //el router es para poder comunicar y llamar de este componente hacia otro dentro de la pagina
    private router: Router,
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService
    ) {
      //almacenamos los datos para poder procesarlos
      this.formularioderegistro = this.formulario.group({
        correo: [''],
        nombre_usuario:[''],
        contrasenia:['']
      });
  }

  //ruta de navegacion
  regresar(): void {
    this.router.navigate(['home/info/login']);
  }

  //creamos el metodo con el cual le vamos a enviar los datos a la bd y a su vez tambien le probaremos en la consola
  enviarDatos(): any{
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarRegistro(this.formularioderegistro.value).subscribe(
      respuesta=>{
        //le paso de nuevo el formulario para que se retorne a vacio los campos luego de registrar el usuario
        this.formularioderegistro = this.formulario.group({
          correo: [''],
          nombre_usuario:[''],
          contrasenia:['']
        });
        alert("Si ya registro el usuario dirijase a iniciar sesion e ingrese con el correo y contraseña");
      }
    );
    
  } 

}
