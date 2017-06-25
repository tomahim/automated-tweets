import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsListComponent } from '../tweets-list/tweets-list.component';
import { ScheduledTweetsService } from '../scheduled-tweets/scheduled-tweets.service';
import { ScheduledTweetsComponent } from '../scheduled-tweets/scheduled-tweets.component';
import { DashboardWidgetsComponent } from '../dashboard-widgets/dashboard-widgets.component';
import { TweetComponent } from '../tweet/tweet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TweetsListComponent, ScheduledTweetsComponent, DashboardWidgetsComponent, TweetComponent],
  exports: [DashboardWidgetsComponent],
  providers: [ScheduledTweetsService]
})
export class DashboardModule { }
