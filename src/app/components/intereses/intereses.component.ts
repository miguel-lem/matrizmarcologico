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
  formulariointereses: FormGroup
  elinvolucrado: any;
  elproyecto:any;
  Intereses:any;
  elcorreo:any;
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
    this.coneccionServicio.agregarIntereses(this.formulariointereses.value).subscribe();
    console.log("se paso del registro"); 
  }

  regresarInvolucrados(): void{
    this.router.navigate(['home/login/proyectos/'+this.elcorreo+'/matrizinvolucrados/'+this.elproyecto]);
  }
  cerrarSesion(): void {
    //console.log("El correo que se enviara a cerrar sesion es: ");
    //console.log(this.elcorreo);
    if(window.confirm("Seguro desea cerrar sesion")){
      this.coneccionServicio.agregarFin(this.elcorreo).subscribe();
      this.router.navigate(['home']);
    }
    
  }

}
