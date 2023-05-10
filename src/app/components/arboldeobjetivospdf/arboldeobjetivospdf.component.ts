import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';
//librerias para poder descargar pdf
import jsPDF from 'jspdf';
import * as _html2canvas from 'html2canvas';

@Component({
  selector: 'app-arboldeobjetivospdf',
  templateUrl: './arboldeobjetivospdf.component.html',
  styleUrls: ['./arboldeobjetivospdf.component.css']
})
export class ArboldeobjetivospdfComponent {
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
  //variables para extraccion y poder crear el pdf
  Fin1:any;
  Fin2:any;
  Fin3:any;
  Proposito:any;
  Componente1:any;
  Componente2:any;
  Componente3:any;
  Actividad1:any;
  Actividad2:any;
  Actividad3:any;
  Actividad4:any;
  Actividad5:any;

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
       //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    //aqui voy a buscar y extraer un elemento en especifico de la tabla efectos
    //para poder cargarlos en la vista y de alli poder editarlos
    this.fin1="fin1";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Fin1=respuesta;
      }
    );
    //para extrear el efecto directo1
    this.fin2="fin2";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Fin2=respuesta;
      }
    );
    //para extrear el efecto directo2
    this.fin3="fin3";
    this.coneccionServicio.filtrarFinesyPropositos(this.fin3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Fin3=respuesta;
      }
    );
    //para extrear el problema
    this.proposito="proposito";
    this.coneccionServicio.filtrarFinesyPropositos(this.proposito,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Proposito=respuesta;
      }
    );
    //para extrear la causa directa1
    this.componente1="componente1";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Componente1=respuesta;
      }
    );
    //para extrear la causa directa2
    this.componente2="componente2";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Componente2=respuesta;
      }
    );
    //para extrear la causa directa3
    this.componente3="componente3";
    this.coneccionServicio.filtrarFinesyPropositos(this.componente3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Componente3=respuesta;
      }
    );
    //para extrear la causa indirecta1
    this.actividad1="actividad1";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad1,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Actividad1=respuesta;
      }
    );
    //para extrear la causa indirecta2
    this.actividad2="actividad2";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad2,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Actividad2=respuesta;
      }
    );
    //para extrear la causa indirecta3
    this.actividad3="actividad3";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad3,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Actividad3=respuesta;
      }
    );
    //para extrear la causa indirecta4
    this.actividad4="actividad4";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad4,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Actividad4=respuesta;
      }
    );
    //para extrear la causa indirecta5
    this.actividad5="actividad5";
    this.coneccionServicio.filtrarFinesyPropositos(this.actividad5,this.formulariodelnombre.value).subscribe(
      respuesta=>{
        //con el console-log imprimo para ver si estoy trayendo los datos
        this.Actividad5=respuesta;
      }
    );
  }

  regresarUnpoco(): void {
    //ruta para poder navegar
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/arboldeobjetivos/'+this.elproyecto+'/arboldeobjetivoscreado/'+1]);
  }

  //esta funcion es para poder convertir a un pdf la informacion de la tabla
  downloadPDF() {
    //capturo el documento de lado del html
    const INFORMACION: any = document.getElementById('cuerpo');
    //coloco las variable de psicion, unidad de media, y el formato
    //con 'p' se va de verttical con 'l' de horizontal
    const doc = new jsPDF('l', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    //esta vriable la cree para que no me de los errores al transformar el pdf 
    const html2canvas: any=_html2canvas;
    //le agrego la imagen para el pdf
    html2canvas(INFORMACION, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      //aqui le contorlo para que el imprimir se vaya la descarga con la fecha del sistema y el nombre
      docResult.save(`${new Date().toISOString()}arbol-objetivos.pdf`);
    });
  }

}
