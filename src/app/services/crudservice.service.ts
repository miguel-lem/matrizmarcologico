import { Injectable , Output, EventEmitter } from '@angular/core';
//importamos la libreria http para las comunicaciones ocn la bd
import { HttpClient } from '@angular/common/http';
//importamos un observable para poder monitorear lo que pase con la informacion
import { Observable } from 'rxjs';
//importamos el modelo
import { Registro } from './Registro';
import { Involucrado } from './Involucrado';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
   //creamos la variable de donde esta almacenado la API para la conexion
   API: string = 'http://localhost/matrizml2.php';

  constructor(
    private clienteHttp:HttpClient
  ) { }
  //funcion para pasarle los datos del registro
  agregarRegistro(datosRegistro:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarusuario",datosRegistro);
  }

  //funcion para poder iniciar sesion y en el servidor alterar el estado
  agregarInicio(datosInicio:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarestado",datosInicio);
  }

  //funcion para extraer los involucrados
  extraerelestado(correorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verelestado="+correorequerido);
  }

  //funcion para serrar sesion
  agregarFin(correofinalizacion:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?insertarcerrado="+correofinalizacion);
  }

  //funcion para el inicio de recuperar contraseña que me envie la clave de recuperacion al correo
  recuperarContraseña1(datoscorreo:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?comprobarexistencia=",datoscorreo); 
  }

  //funcion para concretar el recuperar contraseña con la clave de recuperacion del correo
   recuperarContraseña(datosnuevacontrasenia:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizarcontraseniaclave=",datosnuevacontrasenia); 
  }


  //funcion para ingresar el nombre de un nuevo proyecto
  agregarProyecto(datosnombreProyecto:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarproyecto=1",datosnombreProyecto); 
  } 

   //funcion para poder extraer proyectos creados
   extraerProyectos(correorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verproyectos="+correorequerido);
  }

  //funcion para eliminar un proyecto de la BD
   borrarproyecto(nombreproyecto:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?borrarproyecto=",nombreproyecto);
  }

  //funcion para pasarle los datos del nombre del involucrado
  agregarInvolucrado(datosInvolucrado:Involucrado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarinvolucrado=1",datosInvolucrado);
  }

  //funcion para extraer los involucrados 
  extraerInvolucrados(proyectorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verinvolucrados="+proyectorequerido);
  }

  //funcion para eliminar un involucrado de la BD
  borrarinvolucrado(numeroinvolucrado:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?borrarinvolucrada=",numeroinvolucrado);
  }

  //funcion para extraer un involucrado y poder editarlo
  extraerInvolucradounico(idinvolcurado:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?veruninvolucrado="+idinvolcurado);
  }

//funcion para pasarle los datos editados del involucrado
actualizarinvolucrado(ideinvolucrado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizarinvolucrado=",ideinvolucrado);
}

  //funcion para pasarle los datos de los intereses del involucrado
  agregarIntereses(datosInteres:Involucrado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarinteres=1",datosInteres);
  }
  
  //funcion para extraer los intereses
  extraerIntereses(involucradorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verintereses="+involucradorequerido);
  }

  //funcion para eliminar un interes de la BD
  borrarinteres(numerointeres:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?borrarinteres=",numerointeres);
  }

  //funcion para extraer un interes y poder editarlo
  extraerInteresunico(idinteres:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?veruninteres="+idinteres);
  }

  //funcion para pasarle los datos editados del interes
actualizarinteres(ideinteres:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizarinteres=",ideinteres);
}

  //funcion para pasarle los datos de los problemas del involucrado
  agregarProblemas(involucradorequerido:Involucrado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarproblema=1",involucradorequerido);
  }
  
  //funcion para extraer los problemas
  extraerProblemas(involucradorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verproblemas="+involucradorequerido);
  }

  //funcion para eliminar un problema de la BD
  borrarproblema(numeroproblema:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?borrarproblema=",numeroproblema);
  }

  //funcion para extraer un problema y poder editarlo
  extraerProblemaunico(idproblema:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verunproblema="+idproblema);
  }

    //funcion para pasarle los datos editados del problema
actualizarproblema(ideproblema:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizarproblema=",ideproblema);
}

  //funcion para pasarle los datos de los recursos del involucrado
  agregarRecursos(involucradorequerido:Involucrado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarrecurso=1",involucradorequerido);
  }
  //funcion para extraer los recursos
  extraerRecursos(involucradorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verrecursos="+involucradorequerido);
  }

  //funcion para eliminar un recurso de la BD
  borrarrecurso(numerorecurso:Registro):Observable<any>{
    return this.clienteHttp.post(this.API+"?borrarrecurso=",numerorecurso);
  }

  //funcion para extraer un recurso y poder editarlo
  extraerRecursounico(idrecurso:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verunrecurso="+idrecurso);
  }

//funcion para pasarle los datos editados del recurso
actualizarRecurso(iderecurso:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?actualizarrecurso=",iderecurso);
}

  //funcion para extraer todos los problemas de un proyecto
  extraerlosProblemas(involucradorequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?vertodoslosproblemas="+involucradorequerido);
  }

  //funcion para extraer los elementos de la union de involucrado e intereses
filtrarinvolucradointeres(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccioninvolucradointeres="+nombreproyecto); 
}

//funcion para extraer los elementos de la union de involucrado y los problemas
filtrarinvolucradoproblema(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccioninvolucradoproblema="+nombreproyecto); 
}

//funcion para extraer los elementos de la union de involucrado y los recursos
filtrarinvolucradorecurso(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccioninvolucradorecursos="+nombreproyecto); 
}

  //funcion para extraer los problemas seleccionados desde todos los problemas ingresados por los involucrados
  filtrarProblemasseleccionados(idrequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?seleccionarproblema="+idrequerido);
  }

  //funcion para pasarle los datos de los problemas seleccionados al arbol de problemas
  agregarProblemasarbol(problemaseleccionado:Involucrado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertararbolproblemas=1",problemaseleccionado);
  }

  //este le vamos a utilizar para poder traer todos los elementos de la tabla arboldeproblemas
  traerlosproblemasarbol(idrequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?verarbolproblemas="+idrequerido); 
  }
    
  //funcion para extraer los problemas del arbol de problemas y filtrarlos para poder armar el arbol causa efecto
  filtrarProblemasseleccionadosarbol(idrequerido:Registro):Observable<any>{
    return this.clienteHttp.get(this.API+"?seleccionarproblemaarbol="+idrequerido); 
  }

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos 
agregarCausasyEfectos(problemaseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararcausasefectos=1",problemaseleccionado);
}

//funcion para extraer un efecto o una causa en especifico y filtrarlo para poder editar el arbol causa efecto
filtrarcausasyefecto(descripcionrequerida:any, nombre: any):Observable<any>{
  return this.clienteHttp.post(this.API+"?seleccionarcausaefectoefecto="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de causas y efectos 
editarCausasyEfectos(causasyefectoeleccionada:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarcausasyefectos=",causasyefectoeleccionada);
}

//funcion para eliminar las causas y efectos creados
eliminarcausasyefectos(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarcausaefecto=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos del segundo diseño 
agregarCausasyEfectos2(problemaseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararcausasefectos2=1",problemaseleccionado);
}

//funcion para extraer un efecto o una causa en especifico y filtrarlo para poder editar el arbol causa efecto diseño dos
filtrarcausasyefecto2(descripcionrequerida:any, nombre: any):Observable<any>{
  return this.clienteHttp.post(this.API+"?seleccionarcausaefectoefecto2="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de causas y efectos segundo diseño 
editarCausasyEfectos2(causasyefectoeleccionada:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarcausasyefectos2=",causasyefectoeleccionada);
}

//funcion para eliminar las causas y efectos2 creados
eliminarcausasyefectos2(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarcausaefecto2=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos del segundo diseño 
agregarCausasyEfectos3(problemaseleccionado:Involucrado):Observable<any>{
return this.clienteHttp.post(this.API+"?insertararcausasefectos3=1",problemaseleccionado);
}

//funcion para extraer un efecto o una causa en especifico y filtrarlo para poder editar el arbol causa efecto diseño dos
filtrarcausasyefecto3(descripcionrequerida:any, nombre: any):Observable<any>{
return this.clienteHttp.post(this.API+"?seleccionarcausaefectoefecto3="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de causas y efectos segundo diseño 
editarCausasyEfectos3(causasyefectoeleccionada:Involucrado):Observable<any>{
return this.clienteHttp.post(this.API+"?editarcausasyefectos3=",causasyefectoeleccionada);
}

//funcion para eliminar las causas y efectos3 creados
eliminarcausasyefectos3(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarcausaefecto3=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos 
agregarFinesyPropositos(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararfinproposito=1",elementoseleccionado);
}

filtrarFinesyPropositos(descripcionrequerida:any, nombre: any):Observable<any>{
  return this.clienteHttp.post(this.API+"?seleccionarfinproposito="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de fines y propositos 
editarFinesyPropositos(finypropositoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarfinproposito=",finypropositoseleccionado);
}

//funcion para eliminar los fines y propositos creados
eliminarFinesyPropositos(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarfinproposito=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos a los fines y propositos 2
agregarFinesyPropositos2(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararfinproposito2=1",elementoseleccionado);
}

//funcion para extraer un fin o proposito en especifico y filtrarlo para poder editar el arbol de objetivos
filtrarFinesyPropositos2(descripcionrequerida:any, nombre: any):Observable<any>{
return this.clienteHttp.post(this.API+"?seleccionarfinproposito2="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de fines y propositos 
editarFinesyPropositos2(finypropositoseleccionado:Involucrado):Observable<any>{
return this.clienteHttp.post(this.API+"?editarfinproposito2=",finypropositoseleccionado);
}

//funcion para eliminar los fines y propositos creados
eliminarFinesyPropositos2(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarfinproposito2=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de causas y efectos a los fines y propositos 2
agregarFinesyPropositos3(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararfinproposito3=1",elementoseleccionado);
}

//funcion para extraer un fin o proposito en especifico y filtrarlo para poder editar el arbol de objetivos
filtrarFinesyPropositos3(descripcionrequerida:any, nombre: any):Observable<any>{
return this.clienteHttp.post(this.API+"?seleccionarfinproposito3="+descripcionrequerida,nombre); 
}

//funcion para pasarle los datos editados del arbol creado a la tabla de fines y propositos 
editarFinesyPropositos3(finypropositoseleccionado:Involucrado):Observable<any>{
return this.clienteHttp.post(this.API+"?editarfinproposito3=",finypropositoseleccionado);
}

//funcion para eliminar los fines y propositos3 creados
eliminarFinesyPropositos3(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarfinproposito3=",nombreproyecto);
}

//funcion para pasarle los datos del arbol creado a la tabla de matriz de marco logico 
agregarMatrizMarco(elementoseleccionados:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararmatrizmarco=1",elementoseleccionados);
}

 //funcion para extraer los datos de la matriz de marco logico
filtrarlamatrizmarcoparverlocreado(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccionarmatrizmarco="+nombreproyecto); 
}

//funcion para eliminar la matriz de marco logico creada
eliminarMatrizmarco(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarmatrizmarco=",nombreproyecto);
}

//funcion para extraer un elemento de la matriz de marco logico uno
extraerUnelementomatriz(idmatriz:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?verunelementomatriz="+idmatriz);
}

//funcion para pasarle los datos editados a la matriz de marco logico 
editarMatrizmarco(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarelementomatriz=",elementoseleccionado);
}

//funcion para pasarle los datos de la tabla a la matriz de marco logico 
agregarMatrizMarco2(elementoseleccionados:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararmatrizmarco2=1",elementoseleccionados);
}

 //funcion para extraer los elementos de la matriz de marco logico
filtrarlamatrizmarcoparverlocreado2(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccionarmatrizmarco2="+nombreproyecto); 
}

//funcion para eliminar la matriz de marco logico creada
eliminarMatrizmarco2(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarmatrizmarco2=",nombreproyecto);
}

//funcion para extraer un elemento de la matriz de marco logico uno
extraerUnelementomatriz2(idmatriz:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?verunelementomatriz2="+idmatriz);
}

//funcion para pasarle los datos editados a la matriz de marco logico 
editarMatrizmarco2(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarelementomatriz2=",elementoseleccionado);
}

//funcion para pasarle los datos de la tabla a la matriz de marco logico 
agregarMatrizMarco3(elementoseleccionados:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?insertararmatrizmarco3=1",elementoseleccionados);
}

 //funcion para extraer los elementos de la matriz de marco logico
filtrarlamatrizmarcoparverlocreado3(nombreproyecto:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?seleccionarmatrizmarco3="+nombreproyecto); 
}

//funcion para eliminar la matriz de marco logico creada
eliminarMatrizmarco3(nombreproyecto:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?eliminarmatrizmarco3=",nombreproyecto);
}

//funcion para extraer un elemento de la matriz de marco logico uno
extraerUnelementomatriz3(idmatriz:Registro):Observable<any>{
  return this.clienteHttp.get(this.API+"?verunelementomatriz3="+idmatriz);
}

//funcion para pasarle los datos editados a la matriz de marco logico 
editarMatrizmarco3(elementoseleccionado:Involucrado):Observable<any>{
  return this.clienteHttp.post(this.API+"?editarelementomatriz3=",elementoseleccionado);
}
}
