import { Component, OnInit } from '@angular/core';
import { ScheduledTweetsService } from './scheduled-tweets.service';
import { Tweet } from '../tweet/tweet';

@Component({
  selector: 'scheduled-tweets',
  templateUrl: './scheduled-tweets.component.html',
  styleUrls: ['./scheduled-tweets.component.scss']
})
export class ScheduledTweetsComponent implements OnInit {

  scheduledTweets : Tweet[];

  constructor(private scheduledTweetsService: ScheduledTweetsService) { }

  ngOnInit() {
  	this.scheduledTweets = this.scheduledTweetsService.getAll();
  }

}
