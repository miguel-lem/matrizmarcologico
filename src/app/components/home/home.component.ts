import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(){
  this.NoBackNavigator();
}
ngOninit(){

}
//funcion creada que para cuando cierren la sesion no puedan de la pagina principal regresar
//con el boton de retroceso
NoBackNavigator() {
  history.pushState(null, document.title, location.href);
  window.addEventListener('popstate', function (event)
  {
    history.pushState(null, document.title, location.href);
  });
}

}
