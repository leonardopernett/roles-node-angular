import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputForm:FormGroup
  regex = /\S+@\S+\.\S+/

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      email:["", [Validators.required, Validators.pattern(this.regex)]],
      password:["", [Validators.required]]
    })
  } 

  handleSubmit(){
    this.authService.login(this.inputForm.value).subscribe(
      result => console.log(result),
      err=>console.log(err.error.message)
   )
   
  }

}
