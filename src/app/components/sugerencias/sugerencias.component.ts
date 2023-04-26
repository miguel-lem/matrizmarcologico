import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//importamos la libreria para dar uso de los formularios
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent {
  formulariodecomentario:FormGroup;
  formularioenviar:FormGroup;
  
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
      this.formulariodecomentario = this.formulario.group({
        nombre_proyecto: [''],
        correo_primario:['']
      });
      this.formularioenviar = this.formulario.group({
        comentario: [''],
        sugerencia:[''],
        correo:[this.elcorreo]
      });
      //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formulariodecomentario.patchValue({correo_primario: this.elcorreo});
      //aqui utilizo el api para extrear los datos de proyctos pertenecientes a ese usuario y desplazarlos
      //en la vista
      this.coneccionServicio.extraerProyectos(this.elcorreo).subscribe(
        respuesta=>{
          this.Proyectos=respuesta;
        }
      );
  
  }
  ngOnInit(): void {
     
  }
  //creamos el metodo con el cual le vamos a enviar los datos a la bd y a su vez tambien le probaremos en la consola
  enviarDatos1(): any{
    console.log('me presionaste'); 
    console.log(this.formularioenviar.value);
    this.coneccionServicio.agregarComentario(this.formularioenviar.value).subscribe(
      respuesta=>{
        //para poder recargar la pagina 
        location.reload();
        alert("Su comentario a sido enviado")
      }
    );
  }
  
  //función con ruta de navegacion
  regresarProyectos(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

}
