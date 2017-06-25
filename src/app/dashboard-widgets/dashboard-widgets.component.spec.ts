import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsComponent } from './dashboard-widgets.component';
import { ScheduledTweetsComponent } from '../scheduled-tweets/scheduled-tweets.component';
import { TweetsListComponent } from '../tweets-list/tweets-list.component';
import { TweetComponent } from '../tweet/tweet.component';
import { ScheduledTweetsService } from '../scheduled-tweets/scheduled-tweets.service';

describe('DashboardWidgetsComponent', () => {
  let component: DashboardWidgetsComponent;
  let fixture: ComponentFixture<DashboardWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetsComponent, ScheduledTweetsComponent, TweetsListComponent, TweetComponent ],
      providers : [ScheduledTweetsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should use scheduled-tweets component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('scheduled-tweets')).toBeTruthy();
  }));

});
