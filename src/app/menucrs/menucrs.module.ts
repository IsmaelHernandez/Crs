import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucrsPageRoutingModule } from './menucrs-routing.module';

import { MenucrsPage } from './menucrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucrsPageRoutingModule
  ],
  declarations: [MenucrsPage]
})
export class MenucrsPageModule {}
