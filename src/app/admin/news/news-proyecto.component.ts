import { Component, ViewChild, OnInit, Input} from '@angular/core';
import { Project } from '../../detalle-proyecto/proyecto.model';
import { NgForm } from '@angular/forms';
import { Update } from '../../models/modelos.model';

// import FeedService from '../feed/feed.service';
// import { MatTableDataSource, MatSort } from '@angular/material';
// import UserService from '../../user.service';
// import { User } from '../user.model';
// declare var jQuery:any;
// declare var $:any;

 @Component({
   selector: "app-news",
   templateUrl:"./news-proyecto.component.html",
   styleUrls:["./news-proyecto.component.css"],
 	 providers: []
 })

export class NewsComponent implements OnInit {
  // constructor(private feedService: FeedService){}


@Input() project: Project;

  onSubmit(form:NgForm){
      const news = new Update(
        form.value.title,
        form.value.description,
        'https://www.google.com.co',
        new Date,
        new Date,
        this.project
      );
      this.project.news.unshift(news);
      form.reset();
      console.log(news);
  }
  ngOnInit(){
    // $('#botonMenu1').css('background','#2D3A43');
    // $('#botonMenu1').css('color','rgb(0, 252, 108)');
  }
}
