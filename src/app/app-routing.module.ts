import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpassowrdComponent } from './components/forgetpassowrd/forgetpassowrd.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MatrizinvolucradosComponent } from './components/matrizinvolucrados/matrizinvolucrados.component';
import { ProblemasComponent } from './components/problemas/problemas.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { MatrizinvolucradoscreadaComponent } from './components/matrizinvolucradoscreada/matrizinvolucradoscreada.component';
import { TodoslosproblemasComponent } from './components/todoslosproblemas/todoslosproblemas.component';
import { ArboldeproblemasComponent } from './components/arboldeproblemas/arboldeproblemas.component';
import { Arboldeproblemas2Component } from './components/arboldeproblemas2/arboldeproblemas2.component';
import { Arboldeproblemas3Component } from './components/arboldeproblemas3/arboldeproblemas3.component';
import { ArbolcausaefectoComponent } from './components/arbolcausaefecto/arbolcausaefecto.component';
import { Arbolcausaefecto2Component } from './components/arbolcausaefecto2/arbolcausaefecto2.component';
import { Arbolcausaefecto3Component } from './components/arbolcausaefecto3/arbolcausaefecto3.component';
import { ArboldeobjetivosComponent } from './components/arboldeobjetivos/arboldeobjetivos.component';
import { Arboldeobjetivos2Component } from './components/arboldeobjetivos2/arboldeobjetivos2.component';
import { Arboldeobjetivos3Component } from './components/arboldeobjetivos3/arboldeobjetivos3.component';
import { ArboldeobjetivoscreadoComponent } from './components/arboldeobjetivoscreado/arboldeobjetivoscreado.component';
import { Arboldeobjetivos2creadoComponent } from './components/arboldeobjetivos2creado/arboldeobjetivos2creado.component';
import { Arboldeobjetivos3creadoComponent } from './components/arboldeobjetivos3creado/arboldeobjetivos3creado.component';
import { MatrizmarcologicoComponent } from './components/matrizmarcologico/matrizmarcologico.component';
import { MatrizmarcologicocreadaComponent } from './components/matrizmarcologicocreada/matrizmarcologicocreada.component';
import { EditarelementomatrizComponent } from './components/editarelementomatriz/editarelementomatriz.component';
import { Matrizmarcologico2Component } from './components/matrizmarcologico2/matrizmarcologico2.component';
import { Matrizmarcologico2creadaComponent } from './components/matrizmarcologico2creada/matrizmarcologico2creada.component';
import { Editarelementomatriz2Component } from './components/editarelementomatriz2/editarelementomatriz2.component';
import { Matrizmarcologico3Component } from './components/matrizmarcologico3/matrizmarcologico3.component';
import { Matrizmarcologico3creadaComponent } from './components/matrizmarcologico3creada/matrizmarcologico3creada.component';
import { Editarelementomatriz3Component } from './components/editarelementomatriz3/editarelementomatriz3.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'home/info', component: InfoComponent},
  {path: 'home/login', component: LoginComponent},
  {path: 'home/login/forgetpassowrd', component: ForgetpassowrdComponent},
  {path: 'home/login/register', component: RegisterComponent},
  {path: 'home/login/proyectos/:correo', component: ProyectosComponent},
  {path: 'home/login/proyectos/:correo/matrizinvolucrados/:proyecto', component: MatrizinvolucradosComponent},
  {path: 'home/login/proyectos/:correo/matrizinvolucrados/:proyecto/intereses/:idinvolucrado', component: InteresesComponent},
  {path: 'home/login/proyectos/:correo/matrizinvolucrados/:proyecto/problemas/:idinvolucrado', component: ProblemasComponent},
  {path: 'home/login/proyectos/:correo/matrizinvolucrados/:proyecto/recursos/:idinvolucrado', component: RecursosComponent},
  {path: 'home/login/proyectos/:correo/matrizinvolucradoscreada/:proyecto', component: MatrizinvolucradoscreadaComponent},
  {path: 'home/login/proyectos/:correo/todoslosproblemas/:proyecto', component:TodoslosproblemasComponent},
  {path: 'home/login/proyectos/:correo/todoslosproblemas/:proyecto/arboldeproblemas/:id', component:ArboldeproblemasComponent},
  {path: 'home/login/proyectos/:correo/todoslosproblemas/:proyecto/arboldeproblemas2/:id', component:Arboldeproblemas2Component},
  {path: 'home/login/proyectos/:correo/todoslosproblemas/:proyecto/arboldeproblemas3/:id', component:Arboldeproblemas3Component},
  {path: 'home/login/proyectos/:correo/arbolcausaefecto/:proyecto', component:ArbolcausaefectoComponent},
  {path: 'home/login/proyectos/:correo/arbolcausaefecto2/:proyecto', component:Arbolcausaefecto2Component},
  {path: 'home/login/proyectos/:correo/arbolcausaefecto3/:proyecto', component:Arbolcausaefecto3Component},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos/:proyecto', component:  ArboldeobjetivosComponent},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos2/:proyecto', component:  Arboldeobjetivos2Component},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos3/:proyecto', component:  Arboldeobjetivos3Component},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos/:proyecto/arboldeobjetivoscreado/:valor', component:  ArboldeobjetivoscreadoComponent},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos2/:proyecto/arboldeobjetivos2creado/:valor', component:  Arboldeobjetivos2creadoComponent},
  {path: 'home/login/proyectos/:correo/arboldeobjetivos3/:proyecto/arboldeobjetivos3creado/:valor', component:  Arboldeobjetivos3creadoComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico/:proyecto', component:MatrizmarcologicoComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico/:proyecto/matrizmarcologicocreada/:id', component:MatrizmarcologicocreadaComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico/:proyecto/matrizmarcologicocreada/:id/editarelementomatriz/:idmat', component:EditarelementomatrizComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico2/:proyecto', component:Matrizmarcologico2Component},
  {path: 'home/login/proyectos/:correo/matrizmarcologico2/:proyecto/matrizmarcologico2creada/:id', component:Matrizmarcologico2creadaComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico2/:proyecto/matrizmarcologico2creada/:id/editarelementomatriz2/:idmat2', component:Editarelementomatriz2Component},
  {path: 'home/login/proyectos/:correo/matrizmarcologico3/:proyecto', component:Matrizmarcologico3Component},
  {path: 'home/login/proyectos/:correo/matrizmarcologico3/:proyecto/matrizmarcologico3creada/:id', component:Matrizmarcologico3creadaComponent},
  {path: 'home/login/proyectos/:correo/matrizmarcologico3/:proyecto/matrizmarcologico3creada/:id/editarelementomatriz3/:idmat3', component:Editarelementomatriz3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
