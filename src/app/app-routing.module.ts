import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sr-listar',
    pathMatch: 'full'
  },
  {
    path: 'sr-listar',
    loadChildren: () => import('./CRUDL-Perritos/sr-listar/sr-listar.module').then( m => m.SrListarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
