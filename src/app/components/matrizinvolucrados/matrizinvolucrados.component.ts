import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Registro } from 'src/app/services/Registro';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matrizinvolucrados',
  templateUrl: './matrizinvolucrados.component.html',
  styleUrls: ['./matrizinvolucrados.component.css']
})
export class MatrizinvolucradosComponent {
  formularioinvolucrados1: FormGroup;
  formulariodeeliminar: FormGroup;
  elproyecto: any;
  elcorreo:any;
  elinvolucrado: any;
  Involucrados:any;
  captura:any;
  constructor(
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ){
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    console.log("valor obtenido",this.elproyecto);

    this.formularioinvolucrados1 = this.formulario.group({
      nombre: [''],
      nombre_extraido:[''],
      correo_primario:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      involucra: ['']
    });

    //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formularioinvolucrados1.patchValue({nombre_extraido: this.elproyecto});
      this.formularioinvolucrados1.patchValue({correo_primario: this.elcorreo});

      //aqui utilizo el api para extrear los datos de involucrados pertenecientes a este proyecto y desplazarlos
      //en la vista
      this.coneccionServicio.extraerInvolucrados(this.elproyecto).subscribe(
        respuesta=>{
          console.log("valores que se obtuvieron");
          console.log(respuesta);
          this.Involucrados=respuesta;
        }
      )
 
  }
  ngOnInit(){}
  enviarDatos1(): any{
    console.log('me presionaste'); 
    console.log(this.formularioinvolucrados1.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarInvolucrado(this.formularioinvolucrados1.value).subscribe(
      respuesta=>{
        //recarga de la pagina pa poder notar el registro
        location.reload();
      }
    );
    console.log("se paso del registro"); 
  }
  obtenerInvolucrado(valorobtenido:string){
    this.elinvolucrado = valorobtenido;
    this.router.navigate(['/intereses/'+this.elinvolucrado]);
  }

  regresarProyectos(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

  eliminarInvolucrado(involucrado:any): void{
    this.captura=involucrado;
    console.log("el protecto que se pretente eliminar es: ",involucrado);
    this.formulariodeeliminar = this.formulario.group({
      involucra: [this.captura]
    });
    console.log("El contenido del formulario");
    console.log(this.formulariodeeliminar.value);
    if(window.confirm("Desea eliminar el involucrado, recuerde que se perdera la informacion de: intereses, problemas y recursos del involucrado seleccionado")){
      alert("Decidio eliminar el involucrado");
      this.coneccionServicio.borrarinvolucrado(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }else{
      alert("a cancelado la eliminacion del involucrado");
    }
  }

  editarinvolucrado(involucrado:any): void{
    
  }

}

