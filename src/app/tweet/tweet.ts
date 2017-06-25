import {TweetStatus} from './tweet-status.enum';

export class Tweet {
	text: string;
	sendDate:	Date;
	status: TweetStatus;

	constructor(text: string, sendDate: Date, status: TweetStatus) {
		this.text = text;
		this.sendDate = sendDate;
		this.status = status;
	}
}

