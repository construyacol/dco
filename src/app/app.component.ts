import { Component, OnInit } from '@angular/core';
import FeedService from './feed/feed.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedService]
})
export class AppComponent implements OnInit {
  constructor(private feedService: FeedService){}

  title = 'app';

  ngOnInit(){
    
    // $('body').css('overflow-y','hidden');
    // $('#botonMenu1').css('color','rgb(0, 252, 108)');
  }
}
