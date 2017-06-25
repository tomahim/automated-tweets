import { Injectable } from '@angular/core';
import { Tweet } from '../tweet/tweet';
import { TweetStatus } from '../tweet/tweet-status.enum';

@Injectable()
export class ScheduledTweetsService {

  constructor() { }

  getAll() : Tweet[] {
  	return [
  		new Tweet('Un test de tweet', new Date(), TweetStatus.DRAFT),
  		new Tweet('Le contenu d\'un tweet envoyé #test #tropfun #Angular4', new Date(), TweetStatus.SENDED),
  		new Tweet('Le contenu d\'un tweet programmé dans le temps #test #AutomatedTweetsAppRocks !', new Date(), TweetStatus.SCHEDULED),
  		new Tweet('Un test de tweet', new Date(), TweetStatus.DRAFT),
  		new Tweet('Le contenu d\'un tweet envoyé #test #tropfun #Angular4', new Date(), TweetStatus.SENDED),
  		new Tweet('Le contenu d\'un tweet programmé dans le temps #test #AutomatedTweetsAppRocks !', new Date(), TweetStatus.SCHEDULED),
  		new Tweet('Un test de tweet', new Date(), TweetStatus.DRAFT),
  		new Tweet('Le contenu d\'un tweet envoyé #test #tropfun #Angular4', new Date(), TweetStatus.SENDED),
  		new Tweet('Le contenu d\'un tweet programmé dans le temps #test #AutomatedTweetsAppRocks !', new Date(), TweetStatus.SCHEDULED),
  		new Tweet('Un test de tweet', new Date(), TweetStatus.DRAFT),
  		new Tweet('Le contenu d\'un tweet envoyé #test #tropfun #Angular4', new Date(), TweetStatus.SENDED),
  		new Tweet('Le contenu d\'un tweet programmé dans le temps #test #AutomatedTweetsAppRocks !', new Date(), TweetStatus.SCHEDULED)

  	];
  }

}
