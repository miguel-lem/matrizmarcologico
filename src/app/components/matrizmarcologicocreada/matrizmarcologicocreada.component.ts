import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';
//librerias para poder descargar pdf
import jsPDF from 'jspdf';
import * as _html2canvas from 'html2canvas';

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
      console.log("Se extrajo de la tabla matriz marco lo siguiente");
      console.log(respuesta);
      this.Elementos=respuesta;

    });
  }
  prepararDatos(datos: string) {
    
  }

  regresarUnpoco(): void {
    //this.router.navigate(['home/login/proyectos/'+this.elcorreo]);
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico/'+this.elproyecto]);
  }

  eliminarMatriz(): void{
    if(window.confirm("En verdad desea eliminar la matriz que a creado ¿?")){
      alert("Decidio eliminar la matriz");
      console.log("la informacion que le voy  pasar");
      console.log(this.formulariodelnombre.value);
      this.coneccionServicio.eliminarMatrizmarco(this.formulariodelnombre.value).subscribe(respuesta=>{
        //recargo la pagina para ver los cambios de eliminar el arbol de causa efecto
        location.reload();
      });
    }else{
      alert("A cancelado la eliminación del arbol")
    }

  }

  editaelementoMatriz(elemento: any): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico/'+this.elproyecto+'/matrizmarcologicocreada/'+1+'/editarelementomatriz/'+elemento]);

  } 

  descargaPdf(): void { 
    const INFORMACION: any = document.getElementById('tablaresponsiva');
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
      //doc.addPage();
      
      return doc;
    }).then((docResult) => {
      //aqui le contorlo para que el imprimir se vaya la descarga con la fecha del sistema y el nombre
      docResult.save(`${new Date().toISOString()}matriz-marco-logico-diseño1.pdf`);
    });
  }

}

