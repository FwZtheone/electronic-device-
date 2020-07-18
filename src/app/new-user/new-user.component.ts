import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';




@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
  private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  get f(){
    return this.userForm.controls;
  }

  onSubmitForm(){
    const formValue= this.userForm.value;
    const newUser = new User(formValue.firstName,formValue.lastName,formValue.email,formValue.drinkPreference,formValue.hobbies?formValue.hobbies : []);
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }


  initForm(){
    this.userForm = this.formBuilder.group({
      firstName :['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      drinkPreference:['', Validators.required],
      hobbies: this.formBuilder.array([])
    });

  }


  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobbies(){
    const hobbiesControl = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(hobbiesControl);
  }

}