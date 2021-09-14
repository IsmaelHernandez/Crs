import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucrsPage } from './menucrs.page';

const routes: Routes = [
  {
    path: '',
    component: MenucrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucrsPageRoutingModule {}
