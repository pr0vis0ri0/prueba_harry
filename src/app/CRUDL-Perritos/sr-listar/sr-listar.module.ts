import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrListarPageRoutingModule } from './sr-listar-routing.module';

import { SrListarPage } from './sr-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrListarPageRoutingModule
  ],
  declarations: [SrListarPage]
})
export class SrListarPageModule {}
