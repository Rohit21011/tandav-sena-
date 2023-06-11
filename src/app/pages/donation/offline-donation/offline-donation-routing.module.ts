import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineDonationPage } from './offline-donation.page';

const routes: Routes = [
  {
    path: '',
    component: OfflineDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineDonationPageRoutingModule {}
