import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
addMemberForm:FormGroup;
constructor(private formBuilder: FormBuilder) { }

formInit()
{
  this.addMemberForm=this.formBuilder.group({
    name: ['xyz', Validators.required],
    email: ['p@', [Validators.required, Validators.email]],
    dateofBirth: ['22-12-1996', Validators.required],
    gender: ['male', Validators.required],
    maritalStatus: ['single', Validators.required],
    mobileNo: ['1111', Validators.required],
    alterneteMobileNo: ['000', Validators.required],
    bloodGroup: ['a', Validators.required],

    qualification: ['a', Validators.required],
    occupation: ['a', Validators.required],
    address: ['a', Validators.required],
    skills: ['a', Validators.required],
    hobby: ['a', Validators.required],
    motoToJoin: ['a', Validators.required],
    signature: ['a', Validators.required],


    members: this.formBuilder.array([])


  });
  this.addMember();
}

createMember(): FormGroup {
  return this.formBuilder.group({
    name: ['', Validators.required],
    relation: ['', Validators.required],
    occupation: ['', Validators.required],
    bloodGroup: ['', Validators.required]
  });
}

addMember(): void {
  (this.addMemberForm.get('members') as FormArray).push(this.createMember());
}

deleteMember(index: number): void {
  (this.addMemberForm.get('members') as FormArray).removeAt(index);
}

}
