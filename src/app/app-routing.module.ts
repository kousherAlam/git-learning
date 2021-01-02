import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    loadChildren: () => import('./basic-topics/basic-topics.module').then(m => m.BasicTopicsModule),
  },
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'basic',
  },
  {
    path: '**',
    redirectTo: 'basic',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
