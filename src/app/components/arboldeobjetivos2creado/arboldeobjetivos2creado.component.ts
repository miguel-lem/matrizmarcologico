import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arboldeobjetivos2creado',
  templateUrl: './arboldeobjetivos2creado.component.html',
  styleUrls: ['./arboldeobjetivos2creado.component.css']
})
export class Arboldeobjetivos2creadoComponent {
  formulariodelnombre: FormGroup;
  formulariofin: FormGroup;
  formularioproposito: FormGroup;
  formulariocomponente1: FormGroup;
  formulariocomponente2: FormGroup;
  formulariocomponente3:FormGroup;
  formularioactividad1:FormGroup;
  formularioactividad2:FormGroup;
  formularioactividad3:FormGroup;
  formularioactividad4:FormGroup;
  formularioactividad5:FormGroup;
  formularioactividad6:FormGroup;
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
  actividad1:any;
  actividad2:any;
  actividad3:any;
  actividad4:any;
  actividad5:any;
  actividad6:any;
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

       //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
    this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
   
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.fin="fin";
    this.coneccionServicio.filtrarFinesyPropositos2(this.fin,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariofin = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos2(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioproposito = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad5 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );

        //para extrear la causa indirecta5
    this.actividad6="actividad6";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad6 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          j:respuesta[0]['id_finproposito']
        });    
      }
    );
  }
 
  guardararboleditado(): any{
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.editarFinesyPropositos2(this.formulariofin.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioproposito.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formulariocomponente1.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formulariocomponente2.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formulariocomponente3.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad1.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad2.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad3.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad4.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad5.value).subscribe();
    this.coneccionServicio.editarFinesyPropositos2(this.formularioactividad6.value).subscribe();
  }
  regresarUnpoco(): void {
    //ruta de navegacion entre proyectos y el arbol de objetivos2
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arboldeobjetivos2/'+this.elproyecto]);
  }

  eliminarArbol():void{
    if(window.confirm("En verdad desea eliminar el arbol fines y propositos2 que a creado ¿?")){
      this.coneccionServicio.eliminarFinesyPropositos2(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }

  }
 
  crearpdf(): void {
    //ruta de navegacion mas profunda
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arboldeobjetivos2/'+this.elproyecto+'/arboldeobjetivos2creado/'+2+'/arboldeobjetivos2pdf/'+2]);
  }

}
