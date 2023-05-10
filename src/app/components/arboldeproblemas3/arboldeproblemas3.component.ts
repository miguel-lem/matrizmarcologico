import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-arboldeproblemas3',
  templateUrl: './arboldeproblemas3.component.html',
  styleUrls: ['./arboldeproblemas3.component.css']
})
export class Arboldeproblemas3Component { 
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
  elcorreo:any;
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

  //variables creadas para poder controlar las opciones de lado de la vista
  id:any;
  id2:any;
  id3:any;
  id4:any;
  id5:any;
  idconvert:number=0;
  id2convert:number=0;
  Vector:any;
  
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
    
    


    //aqui voy a buscar y extraer todos los elementos del arbol de problemas
    //para poder cargarlos en la vista y de alli enviarlos luego a la otra tabla
    this.coneccionServicio.traerlosproblemasarbol(this.elproyecto).subscribe(
        respuesta=>{
          //con el console-log imprimo para ver si estoy trayendo los datos
          this.Problemas=respuesta;        
        }
    );
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.efecto_directo="efectodirecto";
    this.coneccionServicio.filtrarcausasyefecto3(this.efecto_directo,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formularioefectodirecto = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear el problema
    this.problema="problema";
    this.coneccionServicio.filtrarcausasyefecto3(this.problema,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa1,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa2,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa directa4
    this.causa_directa4="causadirecta4";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_directa4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausadirecta4 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
    //para extrear la causa indirecta1
    this.causa_indirecta1="causaindirecta1";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta1,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta2,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta3,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta4,this.formulariodelnombre.value).subscribe(
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
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );

        //para extrear la causa indirecta5
    this.causa_indirecta5="causaindirecta5";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
      //para extrear la causa indirecta6
    this.causa_indirecta6="causaindirecta6";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta6 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
          //para extrear la causa indirecta6
    this.causa_indirecta7="causaindirecta7";
    this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta7,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.formulariocausaindirecta7 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
      }
    );
      //para extrear la causa indirecta6
      this.causa_indirecta8="causaindirecta8";
      this.coneccionServicio.filtrarcausasyefecto3(this.causa_indirecta8,this.formulariodelnombre.value).subscribe(
        respuesta=>{
          //con el console-log imprimo para ver si estoy trayendo los datos
          this.formulariocausaindirecta8 = this.formulario.group({
            a:respuesta[0]['causasefectos'],
            j:respuesta[0]['id_causaefecto']
          });    
        }
      );
  }
  

  //esta funcion es la que permite interactuar las opciones de lado del html y cargar los datos
  changeselected(parametroid:any){
    const idproblemaseidopciones = parametroid.target.value;
    //this.id=parametroid.target.value;
    //variables para el control
    this.id = idproblemaseidopciones[0];
    this.id4 = idproblemaseidopciones[1];
    this.id2 = idproblemaseidopciones[2];
    this.id3 = idproblemaseidopciones[3];
    this.id5 = idproblemaseidopciones[4];
    this.idconvert= parseInt(this.id);
    this.id2convert= parseInt(this.id2+this.id3);
    //con el if lo que busco es contorlar que si al extraer del lado del html
    //la segunda posicion no es una coma quiere decir que el id de la tabla todoslosproblemas
    //esta desde el 10 en adelante y debo buscarle de manera diferente
    if(this.id4==','){
      this.idconvert= parseInt(this.id);
      this.id2convert= parseInt(this.id2+this.id3);
    }else{
      this.idconvert= parseInt(this.id+this.id4);
      this.id2convert= parseInt(this.id3+this.id5);
    }
    
    
    //opcion=this.id;
    switch(this.id2convert){
      case 1: {
        this.efectodirecto(this.idconvert);
        break;
      }
      case 2: {
        this.problemacentral(this.idconvert)
        break;
      }
      case 3: {
        this.causadirecta1(this.idconvert);
        break;
      }
      case 4: {
        this.causadirecta2(this.idconvert);
        break;
      }
      case 5: {
        this.causadirecta3(this.idconvert);
        break;
      }
      case 6: {
        this.causadirecta4(this.idconvert);
        break;
      }
      case 7: {
        this.causaindirecta1(this.idconvert);
        break;
      }
      case 8: {
        this.causaindirecta2(this.idconvert);
        break;
      }
      case 9: {
        this.causaindirecta3(this.idconvert);
        break;
      }
      case 10: {
        this.causaindirecta4(this.idconvert);
        break;
      }
      case 11: {
        this.causaindirecta5(this.idconvert);
        break;
      }
      case 12: {
        this.causaindirecta6(this.idconvert);
        break;
      }
      case 13: {
        this.causaindirecta7(this.idconvert);
        break;
      }
      case 14: {
        this.causaindirecta8(this.idconvert);
        break;
      }
    }
  }


  //con esta funcion lo que hago es extraer un problema en especifico desde e arbol de problemas para 
  //poder enviarlos al arbol de causa efecto
  //todas las funciones creadas a continuacion buscan hacer ese trabajo
  efectodirecto(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formularioefectodirecto = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['efectodirecto'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
 
  problemacentral(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formularioproblema = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['problema'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causadirecta1(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausadirecta1 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta1'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causadirecta2(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausadirecta2 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta2'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }

  causadirecta3(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta3'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causadirecta4(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausadirecta4 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta4'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta1(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta1 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta1'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta2(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta2 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta2'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta3(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta3 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta3'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta4(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta4 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta4'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta5(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta5'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta6(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta6 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta6'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta7(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta7 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta7'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  causaindirecta8(id:number): any{
    this.id_problemas=id;
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        this.formulariocausaindirecta8 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta8'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
  }
  pasararbolcreado(): any{
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarCausasyEfectos3(this.formularioefectodirecto.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formularioproblema.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausadirecta1.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausadirecta2.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausadirecta3.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausadirecta4.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta1.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta2.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta3.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta4.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta5.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta6.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta7.value).subscribe();
    this.coneccionServicio.agregarCausasyEfectos3(this.formulariocausaindirecta8.value).subscribe();
  }

  //rutas para la navegacion
  regresarTodoslosproblemas(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/todoslosproblemas/'+this.elproyecto]);
  }
 
  regresaraProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }
}


