import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arboldeobjetivos3',
  templateUrl: './arboldeobjetivos3.component.html',
  styleUrls: ['./arboldeobjetivos3.component.css']
})
export class Arboldeobjetivos3Component {

  formulariodelnombre: FormGroup;
  formularioefectodirecto: FormGroup;
  formularioproblema: FormGroup;
  formulariocausadirecta1: FormGroup;
  formulariocausadirecta2: FormGroup;
  formulariocausadirecta3:FormGroup;
  formulariocausadirecta4:FormGroup;
  formulariocausaindirecta1:FormGroup;
  formulariocausaindirecta2:FormGroup;
  formulariocausaindirecta3:FormGroup;
  formulariocausaindirecta4:FormGroup;
  formulariocausaindirecta5:FormGroup;
  formulariocausaindirecta6:FormGroup;
  formulariocausaindirecta7:FormGroup;
  formulariocausaindirecta8:FormGroup;
  elproyecto:any;
  Problemas:any;
  id_problemas:any;
  resultado:any;
  //las variables que se utilizara en caso de que ya este creado el arbol
  efecto_directo:any;
  problema:any;
  causa_directa1:any;
  causa_directa2:any;
  causa_directa3:any;
  causa_directa4:any;
  causa_indirecta1:any;
  causa_indirecta2:any;
  causa_indirecta3:any;
  causa_indirecta4:any;
  causa_indirecta5:any;
  causa_indirecta6:any;
  causa_indirecta7:any;
  causa_indirecta8:any;
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
    this.formulariodelnombre = this.formulario.group({
      nombre_extraido:['']
    });
    this.formularioefectodirecto =this.formulario.group({
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
    this.formulariocausadirecta4 =this.formulario.group({
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
    this.formulariocausaindirecta6 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta7 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocausaindirecta8 =this.formulario.group({
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
    this.efecto_directo="efectodirecto";
    this.coneccionServicio.filtrarcausasyefecto3(this.efecto_directo,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioefectodirecto = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['fin'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el problema
    this.problema="problema";
    this.coneccionServicio.filtrarcausasyefecto3(this.problema,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioproblema = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['proposito'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa1
    this.causa_directa1="causadirecta1";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['componente1'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa2
    this.causa_directa2="causadirecta2";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['componente2'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa3
    this.causa_directa3="causadirecta3";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['componente3'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa4
    this.causa_directa4="causadirecta4";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta4 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['componente4'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta1
    this.causa_indirecta1="causaindirecta1";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad1'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta2
    this.causa_indirecta2="causaindirecta2";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad2'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta3
    this.causa_indirecta3="causaindirecta3";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad3'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta4
    this.causa_indirecta4="causaindirecta4";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta4 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad4'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta5
    this.causa_indirecta5="causaindirecta5";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad5'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );

        //para extrear la causa indirecta6
    this.causa_indirecta6="causaindirecta6";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta6 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad6'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
      //para extrear la causa indirecta7
    this.causa_indirecta7="causaindirecta7";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta7,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta7 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad7'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
          //para extrear la causa indirecta8
    this.causa_indirecta8="causaindirecta8";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta8,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta8 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          descripcion:['actividad8'],
          j:respuesta[0]['id_causaefecto'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
  }
  
  ngOnInit() {
    
  }

 
  creararbolfinesproposito(): any{
    if(window.confirm("Ya convirtio el arbol a positivo ¿?")){
      console.log("Probando los datos del arbol creado");
      console.log("Datos para tabla efectos");
      console.log(this.formularioefectodirecto.value);
      //pasamos el dato mediante la funcion creada de lado del servicio
      this.coneccionServicio.agregarFinesyPropositos3(this.formularioefectodirecto.value).subscribe();
      console.log("Datos para tabla causas");
      console.log(this.formularioproblema.value); 
      this.coneccionServicio.agregarFinesyPropositos3(this.formularioproblema.value).subscribe();
      console.log(this.formulariocausadirecta1.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausadirecta1.value).subscribe();
      console.log(this.formulariocausadirecta2.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausadirecta2.value).subscribe();
      console.log(this.formulariocausadirecta3.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausadirecta3.value).subscribe();
      console.log(this.formulariocausadirecta4.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausadirecta4.value).subscribe();
      console.log(this.formulariocausaindirecta1.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta1.value).subscribe();
      console.log(this.formulariocausaindirecta2.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta2.value).subscribe();
      console.log(this.formulariocausaindirecta3.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta3.value).subscribe();
      console.log(this.formulariocausaindirecta4.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta4.value).subscribe();
      console.log(this.formulariocausaindirecta5.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta5.value).subscribe();
      console.log(this.formulariocausaindirecta6.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta6.value).subscribe();
      console.log(this.formulariocausaindirecta7.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta7.value).subscribe();
      console.log(this.formulariocausaindirecta8.value);
      this.coneccionServicio.agregarFinesyPropositos3(this.formulariocausaindirecta8.value).subscribe();
    }
    
  }
  regresarProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

}
