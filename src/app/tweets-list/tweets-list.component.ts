import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet/tweet';

@Component({
  selector: 'tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.scss']
})
export class TweetsListComponent implements OnInit {

  @Input() 
  tweetsList: Tweet[];

  constructor() { }

  ngOnInit() {
  }

}
