import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tweet } from '../tweet/tweet';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
  providers : [ DatePipe ]
})
export class TweetComponent implements OnInit {

  @Input()
  tweet: Tweet;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  badgeText() {
  	let text = 'Brouillon';
  	switch (this.tweet.status) {
  		case 1:
			break;
  		case 2:
  			text = 'Programmé le ' + this.transformDate(this.tweet.sendDate);
  			break;
  		case 3:
  			text = 'Envoyé le ' + this.transformDate(this.tweet.sendDate);
  			break;
  		
  		default:
  			break;
  	}
  	return text;
  }

  private transformDate(date) {
  	return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
  }

}
