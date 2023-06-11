import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineDonationPage } from './online-donation.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineDonationPageRoutingModule {}
