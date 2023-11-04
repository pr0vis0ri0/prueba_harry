import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrListarPage } from './sr-listar.page';

const routes: Routes = [
  {
    path: '',
    component: SrListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrListarPageRoutingModule {}
