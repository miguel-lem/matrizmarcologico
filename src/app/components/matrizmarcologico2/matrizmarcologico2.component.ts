import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matrizmarcologico2',
  templateUrl: './matrizmarcologico2.component.html',
  styleUrls: ['./matrizmarcologico2.component.css']
})
export class Matrizmarcologico2Component {
  formulariodelnombre: FormGroup;
  formulariofin: FormGroup;
  formularioproposito: FormGroup;
  formulariocomponente1:FormGroup;
  formulariocomponente2:FormGroup;
  formulariocomponente3:FormGroup;
  formularioactividad1:FormGroup;
  formularioactividad2:FormGroup;
  formularioactividad3:FormGroup;
  formularioactividad4:FormGroup;
  formularioactividad5:FormGroup;
  formularioactividad6: FormGroup;
  elproyecto:any;
  id_problemas:any;
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
  Finparatabla:any;
  Propositotabla:any;
  Componente1tabla:any;
  Componente2tabla:any;
  Componente3tabla:any;
  Actividad1tabla:any;
  Actividad2tabla:any;
  Actividad3tabla:any;
  Actividad4tabla:any;
  Actividad5tabla:any;
  Actividad6tabla:any;
  elcorreo:any;
  
  fin2:any;
  fin3:any;
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
    this.formulariofin =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioproposito =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente1 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente2 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formulariocomponente3 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad1 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad2 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad3 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad4 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad5 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
      nombre_extraido:['']
    });
    this.formularioactividad6 =this.formulario.group({
      a:[''],
      b:[''],
      c:[''],
      d:[''],
      nombre:[''],
      e:[''],
      f:[''],
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
        this.Finparatabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariofin = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['a'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos2(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Propositotabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioproposito = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['b'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente1tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['c'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente2tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['d'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos2(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Componente3tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocomponente3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['e'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad1tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad1 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['f'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad2tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad2 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['g'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad3tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad3 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['h'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad4tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad4 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['i'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad5tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad5 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['j'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );
    this.actividad6="actividad6";
    this.coneccionServicio.filtrarFinesyPropositos2(this.actividad6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        this.Actividad6tabla=respuesta;
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioactividad6 = this.formulario.group({
          a:respuesta[0]['finproposito'],
          b:[''],
          c:[''],
          d:[''],
          nombre:respuesta[0]['descripcion'],
          e:respuesta[0]['id_finproposito'],
          f:['k'],
          nombre_extraido:respuesta[0]['nombre_extraido'],
        });    
      }
    );




  }

  //con esta fucion extraifo todo lo que ayan llenado de lado del cliente y le guardo la informacion
  guardarDatos(): void{
    if(window.confirm("Ya completo los campos, porque de lo contrario si esta mal elaborada la tabla debera eliminarla y volver a crearla")){
      
      this.coneccionServicio.agregarMatrizMarco2(this.formulariofin.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioproposito.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formulariocomponente1.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formulariocomponente2.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formulariocomponente3.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad1.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad2.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad3.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad4.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad5.value).subscribe();
      this.coneccionServicio.agregarMatrizMarco2(this.formularioactividad6.value).subscribe();
    }
    
  }
  

  //ruta de navegacion
  regresarUnpoco(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }

}
