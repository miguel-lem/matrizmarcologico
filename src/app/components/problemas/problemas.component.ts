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
  elproyecto:any;
  Problemas:any;
  elinvolucrado: any;
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
    this.formularioproblemas = this.formulario.group({
      problema: [''],
      nombre_extraido:[''],
      id_involucrado:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      problem: ['']
    });
    //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formularioproblemas.patchValue({id_involucrado: this.elinvolucrado});
      this.formularioproblemas.patchValue({nombre_extraido: this.elproyecto});

    this.coneccionServicio.extraerProblemas(this.elinvolucrado).subscribe(
        respuesta=>{
          console.log("valores que se obtuvieron");
          console.log(respuesta);
          this.Problemas=respuesta;
        }
    )

  }
  ngOnInit(){

  }
  enviarDatos3(): any{
    console.log('me presionaste'); 
    console.log(this.formularioproblemas.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarProblemas(this.formularioproblemas.value).subscribe(
      respuesta=>{
        //recarga de la pagina pa poder notar el registro
        location.reload();
      }
    );
    console.log("se paso del registro"); 
  }

  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }
  eliminarProblema(problema: any): void{ 
    this.captura=problema;
    console.log("el protecto que se pretente eliminar es: ",problema);
    this.formulariodeeliminar = this.formulario.group({
      problem: [this.captura]
    });
    console.log("El contenido del formulario");
    console.log(this.formulariodeeliminar.value);
    if(window.confirm("Desea eliminar el problema, recuerde que se perdera la informacion")){
      alert("Decidio eliminar el problema");
      this.coneccionServicio.borrarproblema(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }else{
      alert("a cancelado la eliminacion del problema");
    }
  }

  editarproblema( problema: any): void {

  }

}
