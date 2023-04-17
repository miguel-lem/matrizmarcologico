import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

//librerias para poder convertir a pdf la información
import jsPDF from 'jspdf';
import * as _html2canvas from 'html2canvas';

@Component({
  selector: 'app-matrizinvolucradoscreada',
  templateUrl: './matrizinvolucradoscreada.component.html',
  styleUrls: ['./matrizinvolucradoscreada.component.css']
})
export class MatrizinvolucradoscreadaComponent {
  formulariodelnombre: FormGroup;
  formulariparabusqueda: FormGroup;
  elproyecto:any;
  InvolucradoIntereses:any;
  InvolucradoProblemas:any;
  InvolucradoRecursos:any;
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
    this.formulariparabusqueda = this.formulario.group({
      id:[''],
      nombre:[''],
      nombre_extraido:['']
    });
    //para cargar el dato recibido por el id
    //y pasarlo al input de correo que en si es el usuario
    this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    //aqui le extraigo todos los elementos de la union de involucrado y los intereses
    this.coneccionServicio.filtrarinvolucradointeres(this.elproyecto).subscribe(respuesta=>{
      console.log("Se extrajo de la union de involucrado interes");
      console.log(respuesta);
      this.InvolucradoIntereses=respuesta;
    });

    //aqui le extraigo todos los elementos de la union de involucrado y los problemas
    this.coneccionServicio.filtrarinvolucradoproblema(this.elproyecto).subscribe(respuesta=>{
      console.log("Se extrajo de la union de involucrado problemas");
      console.log(respuesta);
      this.InvolucradoProblemas=respuesta;
    });

    //aqui le extraigo todos los elementos de la union de involucrado y los recursos
    this.coneccionServicio.filtrarinvolucradorecurso(this.elproyecto).subscribe(respuesta=>{
      console.log("Se extrajo de la union de involucrado recursos");
      console.log(respuesta);
      this.InvolucradoRecursos=respuesta;
    });
    var contenido= document.getElementById('tabla');
  } 
  ngOninit(){}

 //esta funcion es para poder convertir a un pdf la informacion de la tabla
  downloadPDF() {
    //capturo el documento de lado del html
    const html2canvas: any=_html2canvas;
    const INFORMACION = document.getElementById('tablaprincipal');
    //coloco las variable de psicion, unidad de media, y el formato
    //con 'p' se va de verttical con 'l' de horizontal
    const doc = new jsPDF('l', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
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
      docResult.save(`${new Date().toISOString()}matrizinvolucrados.pdf`);
    });
  }

  regresaraProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }


}
