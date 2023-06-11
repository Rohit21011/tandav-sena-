import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetOtpComponent } from './get-otp/get-otp.component';
import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,ReactiveFormsModule
  ],
  declarations: [SharedComponent,HeaderComponent,SidebarComponent,FooterComponent, GetOtpComponent, ButtonComponent, SliderComponent],
  exports:[SharedComponent,HeaderComponent,SidebarComponent,FooterComponent,IonicModule,ReactiveFormsModule,GetOtpComponent,ButtonComponent,SliderComponent]
})
export class SharedModule { }
