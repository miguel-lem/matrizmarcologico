import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matrizmarcologico',
  templateUrl: './matrizmarcologico.component.html',
  styleUrls: ['./matrizmarcologico.component.css']
})
export class MatrizmarcologicoComponent {
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
  Fin1paratabla:any;
  Fin2paratabla:any;
  Fin3paratabla:any;
  Propositotabla:any;
  Componente1tabla:any;
  Componente2tabla:any;
  Componente3tabla:any;
  Actividad1tabla:any;
  Actividad2tabla:any;
  Actividad3tabla:any;
  Actividad4tabla:any;
  Actividad5tabla:any;
  elcorreo:any;
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
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formulariofin2 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formulariofin3 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioproposito =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente1 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente2 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente3 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioactividad1 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioactividad2 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioactividad3 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioactividad4 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      nombre_extraido:['']
    });
    this.formularioactividad5 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
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
        this.Fin1paratabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el efecto directo1
    this.fin2="fin2";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Fin2paratabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el efecto directo2
    this.fin3="fin3";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Fin3paratabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariofin3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Propositotabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioproposito = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente1tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente2tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente3tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocomponente3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad1tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad2tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad3tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad4tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad5tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioactividad5 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );




  }
  ngOnInit() {
    
  }
  
  //funciones se aqui para abajo sirven solamente para enviar los campos de la matriz de marco logico en la tabla
  enviarfin1aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariofin1.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariofin1.value).subscribe();
  }

  enviarfin2aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariofin2.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariofin2.value).subscribe();
  }

  enviarfin3aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariofin3.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariofin3.value).subscribe();
  }

  enviarpropositoaMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioproposito.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioproposito.value).subscribe();
  }

  enviarcomponente1aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariocomponente1.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariocomponente1.value).subscribe();
  }

  enviarcomponente2aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariocomponente2.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariocomponente2.value).subscribe();
  }

  enviarcomponente3aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formulariocomponente3.value);
    this.coneccionServicio.agregarMatrizMarco(this.formulariocomponente3.value).subscribe();
  }

  enviaractividad1aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioactividad1.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioactividad1.value).subscribe();
  }

  enviaractividad2aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioactividad2.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioactividad2.value).subscribe();
  }

  enviaractividad3aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioactividad3.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioactividad3.value).subscribe();
  }

  enviaractividad4aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioactividad4.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioactividad4.value).subscribe();
  }

  enviaractividad5aMatriz(): any{
    console.log("probando el funcionamiento del boton");
    console.log(this.formularioactividad5.value);
    this.coneccionServicio.agregarMatrizMarco(this.formularioactividad5.value).subscribe();
  }

  regresarProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }
}

