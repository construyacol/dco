import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import { MatTableDataSource, MatSort } from '@angular/material';
// import { Faq } from './faq.model';
// import FeedService from '../feed/feed.service';
declare var jQuery:any;
declare var $:any;



 @Component({
   selector: "app-auth",
   templateUrl:"./auth.component.html",
   styleUrls:["./auth.component.css"],
 	providers: []
 })

export class AuthComponent implements OnInit  {
    // constructor(private feedService: FeedService){}

    // @Input() faqP:string;

    signinForm: FormGroup;


    ngOnInit(){

      this.signinForm = new FormGroup({
        email:new FormControl(null, [
          Validators.required, //primera validación es que sea requerido
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ]),
        password: new FormControl(null, Validators.required)
      });
    }

    onSubmit(){
      if(!this.signinForm.valid){
         const { email, password } = this.signinForm.value;

         const user = [{mail:email, pass:password}];
         console.log(user);

      };
    }


}
