import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExibirdadosComponent } from './exibirdados/exibirdados.component';
import { ConsultadadosComponent } from './consultadados/consultadados.component';
import { ModelComponent } from './model/model.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExibirdadosComponent,
    ConsultadadosComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
