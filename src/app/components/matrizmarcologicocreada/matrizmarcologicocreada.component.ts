import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';
//librerias para poder descargar pdf
import jsPDF from 'jspdf';
import * as _html2canvas from 'html2canvas';
import * as _html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-matrizmarcologicocreada',
  templateUrl: './matrizmarcologicocreada.component.html',
  styleUrls: ['./matrizmarcologicocreada.component.css']
})
export class MatrizmarcologicocreadaComponent {
  formulariodelnombre: FormGroup;
  elproyecto:any;
  Elementos:any;
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
    //para cargar el dato recibido por el id
    //y pasarlo al input de correo que en si es el usuario
    this.formulariodelnombre.patchValue({nombre_extraido: this.elproyecto});
    //aqui le extraigo todos los elementos de la tabla matriz marco logico para mostrarlos en la tabla
    this.coneccionServicio.filtrarlamatrizmarcoparverlocreado(this.elproyecto).subscribe(respuesta=>{
      this.Elementos=respuesta;

    });
  }
  prepararDatos(datos: string) {
    
  }

  //funcion con ruta para navegacion
  regresarUnpoco(): void {
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico/'+this.elproyecto]);
  }

  //funcion para poder eliminar la matriz
  eliminarMatriz(): void{
    if(window.confirm("En verdad desea eliminar la matriz que a creado ¿?")){
      this.coneccionServicio.eliminarMatrizmarco(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }

  }

  //funcion para navegacion, esta mal redactado el nombre de la funcion
  editaelementoMatriz(elemento: any): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico/'+this.elproyecto+'/matrizmarcologicocreada/'+1+'/editarelementomatriz/'+elemento]);

  } 




  //con esta funcion le voy a convertir a pdf
  descargaPDF(): void{
    
    // Aquí puedes elegir cualquier elemento del DOM
    //le utilizo ts puro para trabajarle con la libraria
    //aqui extraigo el elemento del DOM 
    const $elementoParaConvertir: any = document.getElementById('tablaresponsiva');
    //utilizo la variable creada en base al alias que le puse a la libreria
    const html2pdf: any=_html2pdf;
    html2pdf()
      //aqui le coloco las configuracion del pdf
      .set({
        margin: 1,
        //el nombre del archivo, le coloque lo de la fecha para que tome la del sistema
        filename: (`${new Date().toISOString()}Matriz-marco-logico1.pdf`),
        //caracteristicas y tipo de imagen
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        //le utilizo la libreria del canvas, antes en la otra manera le enviaba directo a esta libreria
        html2canvas: {
          // la escala es para la calidad, mientras mas alto mas pesado el archivo
            scale: 3, 
            letterRendering: true,
        },
        jsPDF: {
            unit: "in",
            //es el formato de la hoja
            format: "a4",
            //la orientacion = landscape o portrait la primera de acuerdo a la imagen es: orizontal, la otra es vertical
            orientation: 'landscape' 
        }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err));
  }

}

