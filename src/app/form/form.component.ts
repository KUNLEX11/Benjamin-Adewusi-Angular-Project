import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      username: new FormControl(null, [Validators.min(18), Validators.max(25)]),
      dob: new FormControl(null, [Validators.pattern('[0-9]{11}')]),
      street: new FormControl(null),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null)

    })

  }
  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }
}
