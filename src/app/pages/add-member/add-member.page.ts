import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss','../dashboard/dashboard.page.scss'],
})

export class AddMemberPage implements OnInit {
  currentStep=1;
  constructor(private MemberService:MemberService) { }

  ngOnInit() {
    this.MemberService.formInit();
  }
  submit()
  {
    console.log(this.MemberService.addMemberForm.value,`KKKKKKK `)
  }
  onStepClick(step)
  {
   this.currentStep=step;
  }
}
