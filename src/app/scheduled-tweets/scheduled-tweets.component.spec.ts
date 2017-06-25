import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTweetsComponent } from './scheduled-tweets.component';
import { TweetsListComponent } from '../tweets-list/tweets-list.component';
import { TweetComponent } from '../tweet/tweet.component';
import { ScheduledTweetsService } from '../scheduled-tweets/scheduled-tweets.service';

describe('ScheduledTweetsComponent', () => {
  let component: ScheduledTweetsComponent;
  let fixture: ComponentFixture<ScheduledTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledTweetsComponent, TweetsListComponent, TweetComponent ],
      providers: [ ScheduledTweetsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
