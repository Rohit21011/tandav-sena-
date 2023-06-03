import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetOtpComponent } from './get-otp/get-otp.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,ReactiveFormsModule
  ],
  declarations: [SharedComponent,HeaderComponent,SidebarComponent,FooterComponent, GetOtpComponent],
  exports:[SharedComponent,HeaderComponent,SidebarComponent,FooterComponent,IonicModule,ReactiveFormsModule,GetOtpComponent]
})
export class SharedModule { }
