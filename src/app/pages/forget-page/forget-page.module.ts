import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPagePageRoutingModule } from './forget-page-routing.module';

import { ForgetPagePage } from './forget-page.page';
import { SharedModule } from '../../shared/shared.module';
import { GetOtpComponent } from '../../shared/get-otp/get-otp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ForgetPagePageRoutingModule
  ],
  declarations: [ForgetPagePage]
})
export class ForgetPagePageModule {}
