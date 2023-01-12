import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturesViewComponent } from './Components/captures-view/captures-view.component';
import { GrassViewComponent } from './Components/grass-view/grass-view.component';
import { RootViewComponent } from './Components/root-view/root-view.component';
import { AngularFireAuthGuard , redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {
    path: '',
    component: RootViewComponent,
  },
  {
    path: 'grass',
    component: GrassViewComponent, canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},

  {
    path: 'captures',
    component: CapturesViewComponent, canActivate: [AngularFireAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
