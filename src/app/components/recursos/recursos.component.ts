import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  formulariorecursos: FormGroup;
  formulariodeeliminar: FormGroup;
  formularioverpertenencia: FormGroup;
  elinvolucrado: any;
  elproyecto:any;
  Recursos:any;
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

    this.formulariorecursos = this.formulario.group({
      id_recurso:[''],
      recurso: [''],
      id_involucra:[''],
      nombre_extraido:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      recurso: ['']
    });
    this.formularioverpertenencia = this.formulario.group({
      nombre: ['']
    });
    this.formulariorecursos.patchValue({id_involucra: this.elinvolucrado});
    this.formulariorecursos.patchValue({nombre_extraido: this.elproyecto});
    //aqui utilizo el api para extrear los datos de recursos pertenecientes a este involucrado y desplazarlos
      //en la vista
      this.coneccionServicio.extraerRecursos(this.elinvolucrado).subscribe(
        respuesta=>{
          this.Recursos=respuesta;
        }
      );
    //con ela funcion puedo extraer un determinado incolucrado para mostrarlo en la tabla de recursos a la
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

  //funcion para poder enviar los datos a la BD
  enviarDatos3(): any{
    if(this.id_llave==undefined){
      //pasamos el dato mediante la funcion creada de lado del servicio
      this.coneccionServicio.agregarRecursos(this.formulariorecursos.value).subscribe(
        respuesta=>{
          //recarga de la pagina pa poder notar el registro
          location.reload();
        }
      );
    }else{
      //pasamos el dato mediante la funcion creada de lado del servicio pero ya editado
      this.coneccionServicio.actualizarRecurso(this.formulariorecursos.value).subscribe(
        respuesta=>{
          //recarga de la pagina pa poder notar el registro
          location.reload();
        }
      );
    }
    
  }

  //funcion para poder regresar a la parte donde esta el involucrado
  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }

  //funcion para poder controlar el cerrado de sesion
  cerrarSesion(): void {
    if(window.confirm("Seguro desea cerrar sesion")){
      this.coneccionServicio.agregarFin(this.elcorreo).subscribe();
      this.router.navigate(['home']);
    }
    
  }

  //funcion para control de eliminacion de recurso
  eliminarRecurso(recurso: any): void{
    this.captura=recurso;
    this.formulariodeeliminar = this.formulario.group({
      recurso: [this.captura]
    });
    if(window.confirm("Desea eliminar el recurso, recuerde que se perdera la informacion")){
      this.coneccionServicio.borrarrecurso(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }
  }


  //funcion para edicion de recurso
  editarrecurso( recurso: any): void {
    this.id_llave=recurso;
    //extraigo el recurso que selecciono
    this.coneccionServicio.extraerRecursounico(recurso).subscribe(
      respuesta=>{
        this.formulariorecursos = this.formulario.group({
          id_recurso:respuesta[0]['id_recurso'],
          recurso:respuesta[0]['recurso']
        });
      }
    );
  }
}

