import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConjuntosElementosUnicosComponent } from './problemas/conjuntos-elementos-unicos/conjuntos-elementos-unicos.component';

const routes: Routes = [
  { path: '', component: ConjuntosElementosUnicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
