import { AutomatedTweetsPage } from './app.po';

describe('automated-tweets App', () => {
  let page: AutomatedTweetsPage;

  beforeEach(() => {
    page = new AutomatedTweetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
