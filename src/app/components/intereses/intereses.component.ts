import { Component } from '@angular/core';

import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent {
  formulariointereses: FormGroup;
  formulariodeeliminar: FormGroup;
  elinvolucrado: any;
  elproyecto:any;
  Intereses:any;
  elcorreo:any;
  captura:any;
  constructor (
    //el ofrmbuilder sirve para la recoleccion de los datos
    public formulario:FormBuilder,
    //para poder trabajr con el servicio le debemos agregar al constructor
    private coneccionServicio:CrudserviceService,
    private activeRoute:ActivatedRoute,
    private router: Router
  ){
    this.elinvolucrado = this.activeRoute.snapshot.paramMap.get('idinvolucrado');
    this.elproyecto = this.activeRoute.snapshot.paramMap.get('proyecto');
    this.elcorreo = this.activeRoute.snapshot.paramMap.get('correo');
    console.log("involucrado obtenido: ",this.elinvolucrado)
    this.formulariointereses = this.formulario.group({
      interes: [''],
      nombre_extraido:[''],
      id_involucrad:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      intere: ['']
    });

    this.formulariointereses.patchValue({id_involucrad: this.elinvolucrado});
    this.formulariointereses.patchValue({nombre_extraido: this.elproyecto});

    this.coneccionServicio.extraerIntereses(this.elinvolucrado).subscribe(
      respuesta=>{
        console.log("valores que se obtuvieron");
        console.log(respuesta); 
        this.Intereses=respuesta;
      }
    )
  }
  ngOnInit(){

  }
  enviarDatos2(): any{
    console.log('me presionaste'); 
    console.log(this.formulariointereses.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarIntereses(this.formulariointereses.value).subscribe(
      respuesta=>{
        //recarga de la pagina pa poder notar el registro
        location.reload();
      }
    );
    console.log("se paso del registro"); 
  }

  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }
  eliminarInteres(interes: any): void{
    this.captura=interes;
    console.log("el protecto que se pretente eliminar es: ",interes);
    this.formulariodeeliminar = this.formulario.group({
      intere: [this.captura]
    });
    console.log("El contenido del formulario");
    console.log(this.formulariodeeliminar.value);
    if(window.confirm("Desea eliminar el interes, recuerde que se perdera la informacion")){
      alert("Decidio eliminar el interes");
      this.coneccionServicio.borrarinteres(this.formulariodeeliminar.value).subscribe(
        respuesta=>{
          location.reload();
        }
      );
    }else{
      alert("a cancelado la eliminacion del interes");
    }
  }

  editarintereses(interes:any):void{
    
  }

}
