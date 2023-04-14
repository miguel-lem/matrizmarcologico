import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arboldeobjetivoscreado',
  templateUrl: './arboldeobjetivoscreado.component.html',
  styleUrls: ['./arboldeobjetivoscreado.component.css']
})
export class ArboldeobjetivoscreadoComponent {
  formulariodelnombre: FormGroup;
  formulariofin1: FormGroup;
  formulariofin2: FormGroup;
  formulariofin3: FormGroup;
  formularioproposito: FormGroup;
  formulariocomponente1:FormGroup;
  formulariocomponente2:FormGroup;
  formulariocomponente3:FormGroup;
  formularioactividad1:FormGroup;
  formularioactividad2:FormGroup;
  formularioactividad3:FormGroup;
  formularioactividad4:FormGroup;
  formularioactividad5:FormGroup;
  elproyecto:any;
  elcorreo:any;
  id_problemas:any;
  fin1:any;
  fin2:any;
  fin3:any;
  proposito:any;
  componente1:any;
  componente2:any;
  componente3:any;
  actividad1:any;
  actividad2:any;
  actividad3:any;
  actividad4:any;
  actividad5:any;
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
    this.formulariofin1 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariofin2 =this.formulario.group({
      a:[''],
      descripcion:[''],
      j:[''],
      nombre_extraido:['']
    });
    this.formulariofin3 =this.formulario.group({
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
       //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.fin1="fin1";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el efecto directo1
    this.fin2="fin2";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el efecto directo2
    this.fin3="fin3";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioproposito = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad5 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );




  }
  ngOnInit() {
    
  }
  
  pasararbolcreado(): any{
    console.log("Probando los datos del arbol creado");
    console.log("Datos para tabla efectos");
    console.log(this.formulariofin1.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.editarFinesyPropositos(this.formulariofin1.value).subscribe();
    console.log(this.formulariofin2.value);
    this.coneccionServicio.editarFinesyPropositos(this.formulariofin2.value).subscribe();
    console.log(this.formulariofin3.value);
    this.coneccionServicio.editarFinesyPropositos(this.formulariofin3.value).subscribe();
    console.log("Datos para tabla causas");
    console.log(this.formularioproposito.value); 
    this.coneccionServicio.editarFinesyPropositos(this.formularioproposito.value).subscribe();
    console.log(this.formulariocomponente1.value);
    this.coneccionServicio.editarFinesyPropositos(this.formulariocomponente1.value).subscribe();
    console.log(this.formulariocomponente2.value);
    this.coneccionServicio.editarFinesyPropositos(this.formulariocomponente2.value).subscribe();
    console.log(this.formulariocomponente3.value);
    this.coneccionServicio.editarFinesyPropositos(this.formulariocomponente3.value).subscribe();
    console.log(this.formularioactividad1.value);
    this.coneccionServicio.editarFinesyPropositos(this.formularioactividad1.value).subscribe();
    console.log(this.formularioactividad2.value);
    this.coneccionServicio.editarFinesyPropositos(this.formularioactividad2.value).subscribe();
    console.log(this.formularioactividad3.value);
    this.coneccionServicio.editarFinesyPropositos(this.formularioactividad3.value).subscribe();
    console.log(this.formularioactividad4.value);
    this.coneccionServicio.editarFinesyPropositos(this.formularioactividad4.value).subscribe();
    console.log(this.formularioactividad5.value);
    this.coneccionServicio.editarFinesyPropositos(this.formularioactividad5.value).subscribe();
  }

  regresarUnpoco(): void {
    //this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arboldeobjetivos/'+this.elproyecto]);
  }
  eliminarArbol():void{
    if(window.confirm("En verdad desea eliminar el arbol fines y propositos que a creado ¿?")){
      alert("Decidio eliminar el arbol");
      console.log("la informacion que le voy  pasar");
      console.log(this.formulariodelnombre.value);
      this.coneccionServicio.eliminarFinesyPropositos(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }else{
      alert("A cancelado la eliminación del arbol")
    }

  }

}
