import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodejsComponent } from './nodejs/nodejs.component';
import { SpringbootComponent } from './springboot/springboot.component';

const routes: Routes = [
  {path: '', component: NodejsComponent},
  {path: 'nodejs', component: NodejsComponent},
  {path: 'springboot', component: SpringbootComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
