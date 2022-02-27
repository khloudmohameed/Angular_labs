
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
    
      Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Name:['',Validators.required],
      userName:['',
      [
        Validators.required,
        Validators.pattern("^[a-z]*$")]],
      password:['',[
        Validators.required,
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]],
      confirmPassword:['',Validators.required]
    })
  }
 
  get formControls() {
    return this.RegisterForm.controls;
  }
  ngOnInit(): void {
  }

  submitRegForm() {
    console.log(this.RegisterForm);
  }

}

