import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//importamos la libreria para dar uso de los formularios
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent { 
  formulariodecrearproyecto:FormGroup;
  formulariodeeliminar:FormGroup;
  
  //variable para almacenar los datos que voy a extraer de lado de la api
  Proyectos:any;
  //variable para poder utilizar el correo que viene del otro componente
  elcorreo:any;
  captura:any;
  constructor(
    //el router es para poder comunicar y llamar de este componente hacia otro dentro de la pagina
    private router: Router,
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute
    ) {
      this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
      //console.log("valor obtenido",this.elcorreo);
      //almacenamos los datos para poder procesarlos 
      this.formulariodecrearproyecto = this.formulario.group({
        nombre_proyecto: [''],
        correo_primario:['']
      });
      this.formulariodeeliminar = this.formulario.group({
        nombre_proyect: ['']
      });
      //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formulariodecrearproyecto.patchValue({correo_primario: this.elcorreo});
      //aqui utilizo el api para extrear los datos de proyctos pertenecientes a ese usuario y desplazarlos
      //en la vista
      this.coneccionServicio.extraerProyectos(this.elcorreo).subscribe(
        respuesta=>{
          //console.log("valores que se obtuvieron");
          //console.log(respuesta);
          this.Proyectos=respuesta;
        }
      )
  
  }
  ngOnInit(): void {
     
  }
  //creamos el metodo con el cual le vamos a enviar los datos a la bd y a su vez tambien le probaremos en la consola
  enviarDatos1(): any{
    console.log('me presionaste'); 
    console.log(this.formulariodecrearproyecto.value);
    if(window.confirm("Desea crear proyecto con ese nombre¿?, luego no podra editar el nombre")){
      //pasamos el dato mediante la funcion creada de lado del servicio
      this.coneccionServicio.agregarProyecto(this.formulariodecrearproyecto.value).subscribe(
        respuesta=>{
          //para poder recargar la pagina y ver el nuevo nombre creado
          location.reload();
        }
      );
    }
    console.log("se paso del registro"); 
  }
  
  cerrarSesion(): void {
    //console.log("El correo que se enviara a cerrar sesion es: ");
    //console.log(this.elcorreo);
    if(window.confirm("Seguro desea cerrar sesion")){
      this.coneccionServicio.agregarFin(this.elcorreo).subscribe(
        respuesta=>{
          location.reload();
        }
      );
      this.router.navigate(['home']);
    }
  }

  eliminarProyecto(nombre:any): void {
    this.captura=nombre;
    console.log("el protecto que se pretente eliminar es: ",nombre);
    this.formulariodeeliminar = this.formulario.group({
      nombre_proyect: [this.captura]
    });
    console.log("El contenido del formulario");
    console.log(this.formulariodeeliminar.value);
    if(window.confirm("Desea eliminar el proyecto, recuerde que se perdera toda la informacion relacionada con el proyecto")){
      alert("Decidio eliminar el proyecto");
      this.coneccionServicio.borrarproyecto(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }else{
      alert("a cancelado la eliminacion del proyecto");
    }
  }


}
