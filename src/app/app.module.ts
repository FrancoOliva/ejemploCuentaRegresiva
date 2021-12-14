import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaRegresivaComponent } from './cuenta-regresiva/cuenta-regresiva.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaRegresivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
