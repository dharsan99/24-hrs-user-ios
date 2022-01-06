import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SetalarmPageRoutingModule } from './setalarm-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SetalarmPage } from './setalarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetalarmPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SetalarmPage]
})
export class SetalarmPageModule {}
