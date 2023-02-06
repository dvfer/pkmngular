import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturesViewComponent } from './Components/captures-view/captures-view.component';
import { GrassViewComponent } from './Components/grass-view/grass-view.component';
import { RootViewComponent } from './Components/root-view/root-view.component';

const routes: Routes = [
  {
    path: '',
    component: RootViewComponent,
  },
  {
    path: 'grass',
    component: GrassViewComponent,
  },
  {
    path: 'captures',
    component: CapturesViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
