import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-arboldeproblemas2',
  templateUrl: './arboldeproblemas2.component.html',
  styleUrls: ['./arboldeproblemas2.component.css']
})
export class Arboldeproblemas2Component { 
  formulariodelnombre: FormGroup;
  formularioefectodirecto: FormGroup;
  formularioproblema: FormGroup;
  formulariocausadirecta1: FormGroup;
  formulariocausadirecta2: FormGroup;
  formulariocausadirecta3:FormGroup;
  formulariocausaindirecta1:FormGroup;
  formulariocausaindirecta2:FormGroup;
  formulariocausaindirecta3:FormGroup;
  formulariocausaindirecta4:FormGroup;
  formulariocausaindirecta5:FormGroup;
  formulariocausaindirecta6:FormGroup;
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
  causa_indirecta1:any;
  causa_indirecta2:any;
  causa_indirecta3:any;
  causa_indirecta4:any;
  causa_indirecta5:any;
  causa_indirecta6:any;
  elcorreo:any;

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

       //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
    this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    
  
    


    //aqui voy a buscar y extraer todos los elementos del arbol de problemas
    //para poder cargarlos en la vista y de alli enviarlos luego a la otra tabla
    this.coneccionServicio.traerlosproblemasarbol(this.elproyecto).subscribe(
        respuesta=>{
          //con el console-log imprimo para ver si estoy trayendo los datos
          console.log("valores que se obtuvieron en la parte de arbol de problemas");
          console.log(respuesta);
          this.Problemas=respuesta;        
          console.log("se paso de la parte del envio del problema seleccionado: ");
        }
    );
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.efecto_directo="efectodirecto";
    this.coneccionServicio.filtrarcausasyefecto2(this.efecto_directo,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioefectodirecto = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear el problema
    this.problema="problema";
    this.coneccionServicio.filtrarcausasyefecto2(this.problema,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formularioproblema = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa1
    this.causa_directa1="causadirecta1";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_directa1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa2
    this.causa_directa2="causadirecta2";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_directa2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa directa3
    this.causa_directa3="causadirecta3";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_directa3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta1
    this.causa_indirecta1="causaindirecta1";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta1 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta2
    this.causa_indirecta2="causaindirecta2";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta2 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta3
    this.causa_indirecta3="causaindirecta3";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta3 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta4
    this.causa_indirecta4="causaindirecta4";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta4 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
    //para extrear la causa indirecta5
    this.causa_indirecta5="causaindirecta5";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );

        //para extrear la causa indirecta5
    this.causa_indirecta5="causaindirecta5";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
      //para extrear la causa indirecta6
    this.causa_indirecta6="causaindirecta6";
    this.coneccionServicio.filtrarcausasyefecto2(this.causa_indirecta6,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        console.log("valores que se obtuvieron en la parte de arbol de problemas");
        console.log(respuesta);
        this.formulariocausaindirecta6 = this.formulario.group({
          a:respuesta[0]['causasefectos'],
          j:respuesta[0]['id_causaefecto']
        });    
        console.log("se paso de la parte de la extraccion del efecto seleccionado: ");
      }
    );
  }
  
  ngOnInit() {
    
  }

  changeselected(parametroid:any){
    console.log("esto se trajo con la otra funcion");
    console.log(parametroid.target.value);
    const idproblemaseidopciones = parametroid.target.value;
    //this.id=parametroid.target.value;
    console.log("esto se trajo con la otra funcion pero capturado en una const");
    console.log(idproblemaseidopciones);
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
      console.log("LA SEGUNDA POSICION FUE UNA COMA");
      console.log("--------EL id para buscar dentro de la tabla de problemas-----------");
      console.log(this.idconvert);
      console.log("--------EL id para buscar dentro del SWITCH-----------");
      console.log(this.id2convert);
    }else{
      console.log("LA SEGUNDA POSICION FUE UN NUMERO");
      this.idconvert= parseInt(this.id+this.id4);
      this.id2convert= parseInt(this.id3+this.id5);
      console.log("--------EL id para buscar dentro de la tabla de problemas-----------");
      console.log(this.idconvert);
      console.log("--------EL id para buscar dentro del SWITCH-----------");
      console.log(this.id2convert);
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
        this.causaindirecta1(this.idconvert);
        break;
      }
      case 7: {
        this.causaindirecta2(this.idconvert);
        break;
      }
      case 8: {
        this.causaindirecta3(this.idconvert);
        break;
      }
      case 9: {
        this.causaindirecta4(this.idconvert);
        break;
      }
      case 10: {
        this.causaindirecta5(this.idconvert);
        break;
      }
      case 11: {
        this.causaindirecta6(this.idconvert);
        break;
      }
    }
  }

  //con esta funcion lo que hago es extraer un problema en especifico desde e arbol de problemas para 
  //poder enviarlos al arbol de causa efecto
  //todas las funciones creadas a continuacion buscan hacer ese trabajo
  efectodirecto(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('Este es un efectoindirecto');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formularioefectodirecto = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['efectodirecto'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
 
  problemacentral(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es problemacentral');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formularioproblema = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['problema'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causadirecta1(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causadirecta1');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausadirecta1 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta1'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causadirecta2(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causadirecta2');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausadirecta2 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta2'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }

  causadirecta3(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causadirecta3');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausadirecta3 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causadirecta3'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta1(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta1');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta1 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta1'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta2(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta2');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta2 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta2'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta3(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta3');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta3 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta3'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta4(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta4');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta4 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta4'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta5(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta5');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta5 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta5'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  causaindirecta6(id:number): any{
    this.id_problemas=id;
    console.log("este es el id del arbol de problemas: ",this.id_problemas);
    console.log('me presionaste');
    console.log('este es causaindirecta5');
    this.coneccionServicio.filtrarProblemasseleccionadosarbol(this.id_problemas).subscribe(
      respuesta=>{
        console.log("valores recuperados del arbol de problemas: ");
        console.log(respuesta);
        this.formulariocausaindirecta6 = this.formulario.group({
          a:respuesta[0]['problema'],
          descripcion:['causaindirecta6'],
          j:respuesta[0]['id_arbol'],
          nombre_extraido:respuesta[0]['nombre_extraido']
        });
      }
    );
    console.log("se paso del registro");
  }
  pasararbolcreado(): any{
    console.log("Probando los datos del arbol creado");
    console.log("Datos para tabla efectos");
    console.log(this.formularioefectodirecto.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarCausasyEfectos2(this.formularioefectodirecto.value).subscribe();
    console.log("Datos para tabla causas");
    console.log(this.formularioproblema.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formularioproblema.value).subscribe();
    console.log(this.formulariocausadirecta1.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausadirecta1.value).subscribe();
    console.log(this.formulariocausadirecta2.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausadirecta2.value).subscribe();
    console.log(this.formulariocausadirecta3.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausadirecta3.value).subscribe();
    console.log(this.formulariocausaindirecta1.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta1.value).subscribe();
    console.log(this.formulariocausaindirecta2.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta2.value).subscribe();
    console.log(this.formulariocausaindirecta3.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta3.value).subscribe();
    console.log(this.formulariocausaindirecta4.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta4.value).subscribe();
    console.log(this.formulariocausaindirecta5.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta5.value).subscribe();
    console.log(this.formulariocausaindirecta6.value);
    this.coneccionServicio.agregarCausasyEfectos2(this.formulariocausaindirecta6.value).subscribe();
  }
  regresarTodoslosproblemas(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/todoslosproblemas/'+this.elproyecto]);
  }
 
  regresaraProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }
  

}


