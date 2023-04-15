import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpassowrdComponent } from './components/forgetpassowrd/forgetpassowrd.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { MatrizinvolucradosComponent } from './components/matrizinvolucrados/matrizinvolucrados.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { ProblemasComponent } from './components/problemas/problemas.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { TodoslosproblemasComponent } from './components/todoslosproblemas/todoslosproblemas.component';
import { ArboldeproblemasComponent } from './components/arboldeproblemas/arboldeproblemas.component';
import { ArbolcausaefectoComponent } from './components/arbolcausaefecto/arbolcausaefecto.component';
import { ArboldeobjetivosComponent } from './components/arboldeobjetivos/arboldeobjetivos.component';
import { ArboldeobjetivoscreadoComponent } from './components/arboldeobjetivoscreado/arboldeobjetivoscreado.component';
import { MatrizmarcologicoComponent } from './components/matrizmarcologico/matrizmarcologico.component';
import { MatrizmarcologicocreadaComponent } from './components/matrizmarcologicocreada/matrizmarcologicocreada.component';
import { Arboldeproblemas2Component } from './components/arboldeproblemas2/arboldeproblemas2.component';
import { Arboldeproblemas3Component } from './components/arboldeproblemas3/arboldeproblemas3.component';
import { Arbolcausaefecto2Component } from './components/arbolcausaefecto2/arbolcausaefecto2.component';
import { Arbolcausaefecto3Component } from './components/arbolcausaefecto3/arbolcausaefecto3.component';
import { Arboldeobjetivos2Component } from './components/arboldeobjetivos2/arboldeobjetivos2.component';
import { Arboldeobjetivos3Component } from './components/arboldeobjetivos3/arboldeobjetivos3.component';
import { Arboldeobjetivos2creadoComponent } from './components/arboldeobjetivos2creado/arboldeobjetivos2creado.component';
import { Arboldeobjetivos3creadoComponent } from './components/arboldeobjetivos3creado/arboldeobjetivos3creado.component';
import { Matrizmarcologico2Component } from './components/matrizmarcologico2/matrizmarcologico2.component';
import { Matrizmarcologico3Component } from './components/matrizmarcologico3/matrizmarcologico3.component';
import { Matrizmarcologico2creadaComponent } from './components/matrizmarcologico2creada/matrizmarcologico2creada.component';
import { Matrizmarcologico3creadaComponent } from './components/matrizmarcologico3creada/matrizmarcologico3creada.component';
import { MatrizinvolucradoscreadaComponent } from './components/matrizinvolucradoscreada/matrizinvolucradoscreada.component';
import { EditarelementomatrizComponent } from './components/editarelementomatriz/editarelementomatriz.component';
import { Editarelementomatriz2Component } from './components/editarelementomatriz2/editarelementomatriz2.component';
import { Editarelementomatriz3Component } from './components/editarelementomatriz3/editarelementomatriz3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassowrdComponent,
    ProyectosComponent,
    MatrizinvolucradosComponent,
    InteresesComponent,
    ProblemasComponent,
    RecursosComponent,
    TodoslosproblemasComponent,
    ArboldeproblemasComponent,
    ArbolcausaefectoComponent,
    ArboldeobjetivosComponent,
    ArboldeobjetivoscreadoComponent,
    MatrizmarcologicoComponent,
    MatrizmarcologicocreadaComponent,
    Arboldeproblemas2Component,
    Arboldeproblemas3Component,
    Arbolcausaefecto2Component,
    Arbolcausaefecto3Component,
    Arboldeobjetivos2Component,
    Arboldeobjetivos3Component,
    Arboldeobjetivos2creadoComponent,
    Arboldeobjetivos3creadoComponent,
    Matrizmarcologico2Component,
    Matrizmarcologico3Component,
    Matrizmarcologico2creadaComponent,
    Matrizmarcologico3creadaComponent,
    MatrizinvolucradoscreadaComponent,
    EditarelementomatrizComponent,
    Editarelementomatriz2Component,
    Editarelementomatriz3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
