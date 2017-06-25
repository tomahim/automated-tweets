import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTweetsComponent } from './scheduled-tweets.component';
import { TweetsListComponent } from '../tweets-list/tweets-list.component';
import { TweetComponent } from '../tweet/tweet.component';
import { ScheduledTweetsService } from '../scheduled-tweets/scheduled-tweets.service';

describe('ScheduledTweetsComponent', () => {
  let component: ScheduledTweetsComponent;
  let scheduledTweetsService: ScheduledTweetsService; 
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
    scheduledTweetsService = new ScheduledTweetsService();
    spyOn(scheduledTweetsService, "getAll");
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve scheduled tweets on init', () => {
    component.ngOnInit();
    expect(component.scheduledTweets.length >= 0).toBeTruthy();
  });

  it('should use tweets-list component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('tweets-list')).toBeTruthy();
  }));

});
