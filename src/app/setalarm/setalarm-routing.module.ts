import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetalarmPage } from './setalarm.page';

const routes: Routes = [
  {
    path: '',
    component: SetalarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetalarmPageRoutingModule {}
