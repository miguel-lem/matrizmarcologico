import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-arbolcausaefecto',
  templateUrl: './arbolcausaefecto.component.html',
  styleUrls: ['./arbolcausaefecto.component.css']
})
export class ArbolcausaefectoComponent {
  formulariodelnombre: FormGroup;
  formularioefectoindirecto: FormGroup;
  formularioefectodirecto1: FormGroup;
  formularioefectodirecto2: FormGroup;
  formularioproblema: FormGroup;
  formulariocausadirecta1:FormGroup;
  formulariocausadirecta2:FormGroup;
  formulariocausadirecta3:FormGroup;
  formulariocausaindirecta1:FormGroup;
  formulariocausaindirecta2:FormGroup;
  formulariocausaindirecta3:FormGroup;
  formulariocausaindirecta4:FormGroup;
  formulariocausaindirecta5:FormGroup;
  elproyecto:any;
  elcorreo:any; 
  id_problemas:any;
  efecto_indirecto:any;
  efecto_directo1:any;
  efecto_directo2:any;
  problema:any;
  causa_directa1:any;
  causa_directa2:any;
  causa_directa3:any;
  causa_indirecta1:any;
  causa_indirecta2:any;
  causa_indirecta3:any;
  causa_indirecta4:any;
  causa_indirecta5:any;
  constructor (
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ){
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    this.formulariodelnombre = this.formulario.group({
      nombre_extraido:['']
    });
    this.formularioefectoindirecto =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioefectodirecto1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioefectodirecto2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioproblema =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausadirecta1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausadirecta2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausadirecta3 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta3 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta4 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta5 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
       //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.efecto_indirecto="efectoindirecto";
    this.coneccionServicio.filtrarcausasyefecto(this.efecto_indirecto,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioefectoindirecto = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });
      }
    );
    //para extrear el efecto directo1
    this.efecto_directo1="efectodirecto1";
    this.coneccionServicio.filtrarcausasyefecto(this.efecto_directo1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioefectodirecto1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear el efecto directo2
    this.efecto_directo2="efectodirecto2";
    this.coneccionServicio.filtrarcausasyefecto(this.efecto_directo2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioefectodirecto2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear el problema
    this.problema="problema";
    this.coneccionServicio.filtrarcausasyefecto(this.problema,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioproblema = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa directa1
    this.causa_directa1="causadirecta1";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_directa1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausadirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });   
      }
    );
    //para extrear la causa directa2
    this.causa_directa2="causadirecta2";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_directa2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausadirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa directa3
    this.causa_directa3="causadirecta3";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_directa3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });   
      }
    );
    //para extrear la causa indirecta1
    this.causa_indirecta1="causaindirecta1";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_indirecta1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa indirecta2
    this.causa_indirecta2="causaindirecta2";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_indirecta2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa indirecta3
    this.causa_indirecta3="causaindirecta3";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_indirecta3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa indirecta4
    this.causa_indirecta4="causaindirecta4";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_indirecta4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta4 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa indirecta5
    this.causa_indirecta5="causaindirecta5";
    this.coneccionServicio.filtrarcausasyefecto(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );

  }
  ngOnInit() {
    
  }
  
  guardarmodificaciones(): any{
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.editarCausasyEfectos(this.formularioefectoindirecto.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formularioefectodirecto1.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formularioefectodirecto2.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formularioproblema.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausadirecta1.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausadirecta2.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausadirecta3.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausaindirecta1.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausaindirecta2.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausaindirecta3.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausaindirecta4.value).subscribe();
    this.coneccionServicio.editarCausasyEfectos(this.formulariocausaindirecta5.value).subscribe();
  }

  regresarProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

  capturar(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arbolcausaefecto/'+this.elproyecto+'/arbolcausaefectopdf/'+1]);
  }

  eliminarArbol():void{
    if(window.confirm("En verdad desea eliminar el arbol causa efecto que a creado ¿?")){
      this.coneccionServicio.eliminarcausasyefectos(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }
  }
  

}
