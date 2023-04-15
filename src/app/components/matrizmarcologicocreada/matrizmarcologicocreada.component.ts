import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  }

}

