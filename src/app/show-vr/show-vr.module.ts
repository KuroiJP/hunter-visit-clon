import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowVrPage } from './show-vr.page';

const routes: Routes = [
  {
    path: '',
    component: ShowVrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowVrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShowVrPageModule {}
