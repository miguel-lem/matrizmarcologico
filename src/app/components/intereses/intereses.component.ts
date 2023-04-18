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
  formularioverpertenencia: FormGroup;
  elinvolucrado: any;
  elproyecto:any;
  Intereses:any;
  elcorreo:any;
  captura:any;
  id_llave:any;
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
      id_interes:[''],
      interes: [''],
      nombre_extraido:[''],
      id_involucrad:['']
    });
    this.formulariodeeliminar = this.formulario.group({
      intere: ['']
    });
    this.formularioverpertenencia = this.formulario.group({
      nombre: ['']
    });

    this.formulariointereses.patchValue({id_involucrad: this.elinvolucrado});
    this.formulariointereses.patchValue({nombre_extraido: this.elproyecto});

    this.coneccionServicio.extraerIntereses(this.elinvolucrado).subscribe(
      respuesta=>{
        console.log("valores que se obtuvieron");
        console.log(respuesta); 
        this.Intereses=respuesta;
      }
    );
    //con ela funcion puedo extraer un determinado incolucrado para mostrarlo en la tabla de intereses a la
    //cabecera y evitar repetirlo en cada fila
    this.coneccionServicio.extraerInvolucradounico(this.elinvolucrado).subscribe(
      respuesta=>{
        console.log("Lo que se extrajo como unico involucrado");
        console.log(respuesta);
        //extraigo la informacion y le cargo para poder contemplar en la vista
        this.formularioverpertenencia = this.formulario.group({
          nombre:respuesta[0] ['nombre']
        });
      }
    );
  }
  ngOnInit(){

  }
  enviarDatos2(): any{
    if(this.id_llave==undefined){
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
    }else{
      console.log("el numero es mayor que cero");
      console.log(this.formulariointereses.value);
      //pasamos el dato mediante la funcion creada de lado del servicio
      this.coneccionServicio.actualizarinteres(this.formulariointereses.value).subscribe(
        respuesta=>{
          //recarga de la pagina pa poder notar el registro
          location.reload();
        }
      );
    }
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
    this.id_llave=interes;
    this.coneccionServicio.extraerInteresunico(interes).subscribe(
      respuesta=>{
        console.log("informacion extraido de un interes en especifico");
        console.log(respuesta);
        this.formulariointereses = this.formulario.group({
          id_interes:respuesta[0]['id_interes'],
          interes: respuesta[0]['interes']
        });
      }
    );
    
  }

}
