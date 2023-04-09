import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassowrd',
  templateUrl: './forgetpassowrd.component.html',
  styleUrls: ['./forgetpassowrd.component.css']
})
export class ForgetpassowrdComponent {

  correonecesario:any;
  
  constructor(
    private router: Router
    ) {
  }

  ngOnInit() {}

  iraPrincipal(): void {
    this.router.navigate(['home/login']);
  }

  recuperarcontraseña(correo:string): void {
    var abecedario=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","0","1","2","3","4","5","6","7","8","9","$","@"];
    var numeroAleatorio = 5;
    
  }

}
