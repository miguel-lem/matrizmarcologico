import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarelementomatriz2',
  templateUrl: './editarelementomatriz2.component.html',
  styleUrls: ['./editarelementomatriz2.component.css']
})
export class Editarelementomatriz2Component {
  formularioedicion: FormGroup;
  elproyecto:any;
  elcorreo:any;
  idInvolucrado:any;
  matriz1:any;
  matriz2:any;
  matriz3:any;


  constructor(
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ){
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    this.idInvolucrado = this.activeRoute.snapshot.paramMap.get('idmat2');

    this.formularioedicion = this.formulario.group({
      id_matriz:[''],
      descripcion:[''],
      indicadores:[''],
      verificadores:[''],
      supuestos:[''],
      nombre:['']
    });

    //con ela funcion puedo extraer los elementos de la matriz de marco logico para editar
    this.coneccionServicio.extraerUnelementomatriz2(this.idInvolucrado).subscribe(
      respuesta=>{
        //extraigo la informacion y le cargo para poder contemplar en la vista
        this.formularioedicion = this.formulario.group({
          id_matriz:respuesta[0]['id_matriz'],
          descripcion:respuesta[0]['descripcion'],
          indicadores:respuesta[0]['indicadores'],
          verificadores:respuesta[0]['verificadores'],
          supuestos:respuesta[0]['supuestos'],
          nombre:respuesta[0]['nombre']
        });
      }
    );

  }
 
  //rutas de navegacion
  guardareditado(): void {
    this.coneccionServicio.editarMatrizmarco2(this.formularioedicion.value).subscribe(
      respuesta=>{
        this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico2/'+this.elproyecto+'/matrizmarcologico2creada/'+2]);
      }
    );
  }

  cancelareditado(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizmarcologico2/'+this.elproyecto+'/matrizmarcologico2creada/'+2]);
  }


}
