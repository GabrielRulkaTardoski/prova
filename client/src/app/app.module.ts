import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarComponent } from './views/pessoa/cadastrar/cadastrar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule } from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
