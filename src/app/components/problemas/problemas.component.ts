import { Component } from '@angular/core';

import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css']
})
export class ProblemasComponent {
  formularioproblemas: FormGroup;
  formulariodeeliminar: FormGroup;
  formularioverpertenencia: FormGroup;
  elproyecto:any;
  Problemas:any;
  elinvolucrado: any;
  elcorreo:any;
  captura:any;
  id_llave:any;
  constructor(
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ){
    this.elinvolucrado = this.activeRoute.snapshot.paramMap.get('idinvolucrado');
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    this.formularioproblemas = this.formulario.group({
      id_problema:[''],
      problema: [''],
      nombre_extraido:[''],
      id_involucrado:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      problem: ['']
    });
    this.formularioverpertenencia = this.formulario.group({
      nombre: ['']
    });
    //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formularioproblemas.patchValue({id_involucrado: this.elinvolucrado});
      this.formularioproblemas.patchValue({nombre_extraido: this.elproyecto});

    this.coneccionServicio.extraerProblemas(this.elinvolucrado).subscribe(
        respuesta=>{
          this.Problemas=respuesta;
        }
    );

    //con ela funcion puedo extraer un determinado incolucrado para mostrarlo en la tabla de problemas a la
    //cabecera y evitar repetirlo en cada fila
    this.coneccionServicio.extraerInvolucradounico(this.elinvolucrado).subscribe(
      respuesta=>{
        //extraigo la informacion y le cargo para poder contemplar en la vista
        this.formularioverpertenencia = this.formulario.group({
          nombre:respuesta[0] ['nombre']
        });
      }
    );

  }

  //funcion para pasar los datos
  enviarDatos3(): any{
    //con la llave le controlo si es primer ingreso o si es edicion de algo ya existente
    if(this.id_llave==undefined){
      //pasamos el dato mediante la funcion creada de lado del servicio
      this.coneccionServicio.agregarProblemas(this.formularioproblemas.value).subscribe(
        respuesta=>{
          //recarga de la pagina pa poder notar el registro
          location.reload();
        }
      );
    }else{
      //pasamos el dato mediante la funcion creada de lado del servicio, estos son lo de editado
      this.coneccionServicio.actualizarproblema(this.formularioproblemas.value).subscribe(
        respuesta=>{
          //recarga de la pagina pa poder notar el registro
          location.reload();
        }
      );
    }
     
  }

  //ruta para navegacion
  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }

  //funcion para eliminar un problema
  eliminarProblema(problema: any): void{ 
    this.captura=problema;
    this.formulariodeeliminar = this.formulario.group({
      problem: [this.captura]
    });
    if(window.confirm("Desea eliminar el problema, recuerde que se perdera la informacion")){
      this.coneccionServicio.borrarproblema(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }
  }

  //funcion para poder editar un problema
  editarproblema( problema: any): void {
    //esta variable ya le comente el por que en la parte de involucrado
    this.id_llave=problema;
    //extraccion de un problema en especifico
    this.coneccionServicio.extraerProblemaunico(problema).subscribe(respuesta=>{
      //le paso los parametros al formulario para poder editarlo
      this.formularioproblemas = this.formulario.group({
        id_problema:respuesta[0]['id_problema'],
        problema: respuesta[0]['problema']
      });
    });

  }

}
