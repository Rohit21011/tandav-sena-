import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMemberPageRoutingModule } from './add-member-routing.module';

import { AddMemberPage } from './add-member.page';
import { SharedModule } from '../../shared/shared.module';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { MemberService } from './member.service';
import { KycComponent } from './kyc/kyc.component';
import { MembershipComponent } from './membership/membership.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddMemberPageRoutingModule
  ],
  declarations: [AddMemberPage,FamilyDetailsComponent,PersonalDetailsComponent,ProfessionalDetailsComponent,KycComponent,MembershipComponent],

  providers:[MemberService]
})
export class AddMemberPageModule {}
