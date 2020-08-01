import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConjuntosElementosUnicosComponent } from './conjuntos-elementos-unicos/conjuntos-elementos-unicos.component';
import { AppComponent } from '../app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {TooltipModule} from 'primeng/tooltip';




@NgModule({
  declarations: [ConjuntosElementosUnicosComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    TooltipModule

  ],
  bootstrap: [AppComponent],
})
export class ProblemasModule { }
