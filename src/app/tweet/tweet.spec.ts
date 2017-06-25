import {Tweet} from './tweet';
import {TweetStatus} from './tweet-status.enum';

describe('Tweet', () => {
  it('should create an instance', () => {
    expect(new Tweet('', new Date(), TweetStatus.DRAFT)).toBeTruthy();
  });
});
