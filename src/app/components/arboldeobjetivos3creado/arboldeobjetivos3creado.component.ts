import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arboldeobjetivos3creado',
  templateUrl: './arboldeobjetivos3creado.component.html',
  styleUrls: ['./arboldeobjetivos3creado.component.css']
})
export class Arboldeobjetivos3creadoComponent {
  
  formulariodelnombre: FormGroup;
  formulariofin: FormGroup;
  formularioproposito: FormGroup;
  formulariocomponente1: FormGroup;
  formulariocomponente2: FormGroup;
  formulariocomponente3:FormGroup;
  formulariocomponente4:FormGroup;
  formularioactividad1:FormGroup;
  formularioactividad2:FormGroup;
  formularioactividad3:FormGroup;
  formularioactividad4:FormGroup;
  formularioactividad5:FormGroup;
  formularioactividad6:FormGroup;
  formularioactividad7:FormGroup;
  formularioactividad8:FormGroup;
  elproyecto:any;
  Problemas:any;
  id_problemas:any;
  resultado:any;
  //las variables que se utilizara en caso de que ya este creado el arbol
  fin:any;
  proposito:any;
  componente1:any;
  componente2:any;
  componente3:any;
  componente4:any;
  actividad1:any;
  actividad2:any;
  actividad3:any;
  actividad4:any;
  actividad5:any;
  actividad6:any;
  actividad7:any;
  actividad8:any;
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
    this.formulariofin =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioproposito =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente3 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente4 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad3 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad4 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad5 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad6 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad7 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formularioactividad8 =this.formulario.group({
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
    this.fin="fin";
    this.coneccionServicio.filtrarFinesyPropositos3(this.fin,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos3(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioproposito = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos3(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos3(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos3(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa4
    this.componente4="componente4";
    this.coneccionServicio.filtrarFinesyPropositos3(this.componente4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad5 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );

        //para extrear la causa indirecta6
    this.actividad6="actividad6";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad6 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
      //para extrear la causa indirecta7
    this.actividad7="actividad7";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad7,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad7 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
          //para extrear la causa indirecta8
    this.actividad8="actividad8";
    this.coneccionServicio.filtrarFinesyPropositos3(this.actividad8,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad8 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
  }
  
  ngOnInit() {
    
  }

 
  editararbolfinesproposito(): any{
    console.log("Probando los datos del arbol creado");
    console.log("Datos para tabla efectos");
    console.log(this.formulariofin.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.editarFinesyPropositos3(this.formulariofin.value).subscribe();
    console.log("Datos para tabla causas");
    console.log(this.formularioproposito.value); 
    this.coneccionServicio.editarFinesyPropositos3(this.formularioproposito.value).subscribe();
    console.log(this.formulariocomponente1.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formulariocomponente1.value).subscribe();
    console.log(this.formulariocomponente2.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formulariocomponente2.value).subscribe();
    console.log(this.formulariocomponente3.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formulariocomponente3.value).subscribe();
    console.log(this.formulariocomponente4.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formulariocomponente4.value).subscribe();
    console.log(this.formularioactividad1.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad1.value).subscribe();
    console.log(this.formularioactividad2.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad2.value).subscribe();
    console.log(this.formularioactividad3.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad3.value).subscribe();
    console.log(this.formularioactividad4.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad4.value).subscribe();
    console.log(this.formularioactividad5.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad5.value).subscribe();
    console.log(this.formularioactividad6.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad6.value).subscribe();
    console.log(this.formularioactividad7.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad7.value).subscribe();
    console.log(this.formularioactividad8.value);
    this.coneccionServicio.editarFinesyPropositos3(this.formularioactividad8.value).subscribe();
  }

  regresarUnpoco(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arboldeobjetivos3/'+this.elproyecto]);
  }

  eliminarArbol():void{
    if(window.confirm("En verdad desea eliminar el arbol fines y propositos3 que a creado ¿?")){
      alert("Decidio eliminar el arbol3");
      console.log("la informacion que le voy  pasar");
      console.log(this.formulariodelnombre.value);
      this.coneccionServicio.eliminarFinesyPropositos3(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }else{
      alert("A cancelado la eliminación del arbol3")
    }

  }
}
