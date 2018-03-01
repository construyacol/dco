import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

    }


}
