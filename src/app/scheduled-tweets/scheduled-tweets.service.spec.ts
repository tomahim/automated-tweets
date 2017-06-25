import { TestBed, inject } from '@angular/core/testing';

import { ScheduledTweetsService } from './scheduled-tweets.service';

describe('ScheduledTweetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduledTweetsService]
    });
  });

  it('should be created', inject([ScheduledTweetsService], (service: ScheduledTweetsService) => {
    expect(service).toBeTruthy();
  }));
});
