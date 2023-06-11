import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineDonationPageRoutingModule } from './online-donation-routing.module';

import { OnlineDonationPage } from './online-donation.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OnlineDonationPageRoutingModule
  ],
  declarations: [OnlineDonationPage]
})
export class OnlineDonationPageModule {}
