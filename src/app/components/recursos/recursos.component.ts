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
  elinvolucrado: any;
  elproyecto:any;
  Recursos:any;
  elcorreo:any;
  captura:any;
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
    console.log("valor obtenido",this.elinvolucrado);

    this.formulariorecursos = this.formulario.group({
      recurso: [''],
      id_involucra:[''],
      nombre_extraido:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      recurso: ['']
    });
    this.formulariorecursos.patchValue({id_involucra: this.elinvolucrado});
    this.formulariorecursos.patchValue({nombre_extraido: this.elproyecto});
    //aqui utilizo el api para extrear los datos de recursos pertenecientes a este involucrado y desplazarlos
      //en la vista
      this.coneccionServicio.extraerRecursos(this.elinvolucrado).subscribe(
        respuesta=>{
          console.log("valores que se obtuvieron");
          console.log(respuesta);
          this.Recursos=respuesta;
        }
      )

  }
  ngOnInit(){

  }
  enviarDatos3(): any{
    console.log('me presionaste'); 
    console.log(this.formulariorecursos.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarRecursos(this.formulariorecursos.value).subscribe(
      respuesta=>{
        //recarga de la pagina pa poder notar el registro
        location.reload();
      }
    );
    console.log("se paso del registro"); 
  }

  //funcion para poder regresar a la parte donde esta el involucrado
  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }

  cerrarSesion(): void {
    //console.log("El correo que se enviara a cerrar sesion es: ");
    //console.log(this.elcorreo);
    if(window.confirm("Seguro desea cerrar sesion")){
      this.coneccionServicio.agregarFin(this.elcorreo).subscribe();
      this.router.navigate(['home']);
    }
    
  }

  eliminarRecurso(recurso: any): void{
    this.captura=recurso;
    console.log("el protecto que se pretente eliminar es: ",recurso);
    this.formulariodeeliminar = this.formulario.group({
      recurso: [this.captura]
    });
    console.log("El contenido del formulario");
    console.log(this.formulariodeeliminar.value);
    if(window.confirm("Desea eliminar el recurso, recuerde que se perdera la informacion")){
      alert("Decidio eliminar el recurso");
      this.coneccionServicio.borrarrecurso(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }else{
      alert("a cancelado la eliminacion del recurso");
    }
  }

  editarrecurso( recurso: any): void {
    
  }
}

