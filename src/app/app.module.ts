import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemasModule } from './problemas/problemas.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProblemasModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
