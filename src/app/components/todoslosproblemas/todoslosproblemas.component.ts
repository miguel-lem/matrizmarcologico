import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoslosproblemas',
  templateUrl: './todoslosproblemas.component.html',
  styleUrls: ['./todoslosproblemas.component.css']
})
export class TodoslosproblemasComponent {
  formularioproblemas: FormGroup;
  formulariodeenvio: FormGroup;
  elproyecto:any;
  Problemas:any;
  variableid:any;
  elcorreo:any;
  constructor(
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ) {
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    this.formularioproblemas = this.formulario.group({
      nombre_extraido:['']
    });
    this.formulariodeenvio = this.formulario.group({
      problema:[''],
      nombre_extraido:['']
    });
    //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
    this.formularioproblemas.patchValue({nombre_extraido: this.elproyecto});
    this.coneccionServicio.extraerlosProblemas(this.elproyecto).subscribe(
        respuesta=>{
          console.log("valores que se obtuvieron");
          console.log(respuesta);
          this.Problemas=respuesta;
        }
    );
    
  }
  
  ngOnInit() {
    
  }
  //esta funcion permite seleccionar los datos del problema en especifico y le paso 
  //para asi evitar en el arbol de problemas que se me carguen toditos los problemas
  enviarProblema(id:string){
    this.variableid = id;
    console.log("id recuperado: ",this.variableid); 
    //aqui le separo un problema en especifico
    this.coneccionServicio.filtrarProblemasseleccionados(this.variableid).subscribe(
      respuesta=>{
        console.log("valores que se obtuvieron");
        console.log(respuesta);
        //le agrego los valores del problema  extraido al formulario
        this.formulariodeenvio.setValue({
          problema:respuesta[0]['problema'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
        //los console.log son porqu debo ir probando si estan pasando los datos para sino buscar solucion
        //ya que de los contrario estaria a ciegas
        console.log("valores que estamos separando: ");
        console.log(this.formulariodeenvio.value);
        //esos datos extraidos le paso a la funcion de la api que se encarga de guardarlos ya en la parte del arbol de problemas
        this.coneccionServicio.agregarProblemasarbol(this.formulariodeenvio.value).subscribe();
        console.log("se paso de la parte del envio del problema seleccionado: ");
      }
    );
    console.log("se paso el envio del problem");
  }

  cerrarSesion(): void {
    //console.log("El correo que se enviara a cerrar sesion es: ");
    //console.log(this.elcorreo);
    if(window.confirm("Seguro desea cerrar sesion")){
      this.coneccionServicio.agregarFin(this.elcorreo).subscribe();
      this.router.navigate(['home']);
    }
    
  }

  regresarProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

}
