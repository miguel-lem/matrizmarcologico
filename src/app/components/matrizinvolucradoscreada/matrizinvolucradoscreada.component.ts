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
    var doc = new jsPDF();
	
    // se extrae la informacion de lado del documento y la almaceno en una variable para convertir a pdf.
    var elementHTML: any = document.getElementById('tablaresponsiva');

    doc.html(elementHTML, {
        callback: function(doc) {
            // para guardar el PDF
            doc.save(`${new Date().toISOString()}Matriz-de-involucrados.pdf`);
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //el ancho del documento pdf
        windowWidth: 675 //el alto de la ventana medido en pixeles
    });
  }

  regresaraProyectos(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
  }


}
