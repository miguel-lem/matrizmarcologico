import { Component } from '@angular/core';

import {FormGroup, FormBuilder} from '@angular/forms';
//importamos el servicio para poder establecer comnicacion
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.css']
})
export class ProblemasComponent {
  formularioproblemas: FormGroup;
  elproyecto:any;
  Problemas:any;
  elinvolucrado: any;
  elcorreo:any;
  constructor(
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
    this.formularioproblemas = this.formulario.group({
      problema: [''],
      nombre_extraido:[''],
      id_involucrado:['']
    });
    //para cargar el dato recibido por el id
      //y pasarlo al input de correo que en si es el usuario
      this.formularioproblemas.patchValue({id_involucrado: this.elinvolucrado});
      this.formularioproblemas.patchValue({nombre_extraido: this.elproyecto});

    this.coneccionServicio.extraerProblemas(this.elinvolucrado).subscribe(
        respuesta=>{
          console.log("valores que se obtuvieron");
          console.log(respuesta);
          this.Problemas=respuesta;
        }
    )

  }
  ngOnInit(){

  }
  enviarDatos3(): any{
    console.log('me presionaste'); 
    console.log(this.formularioproblemas.value);
    //pasamos el dato mediante la funcion creada de lado del servicio
    this.coneccionServicio.agregarProblemas(this.formularioproblemas.value).subscribe();
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
