import { CountDownPage } from './app.po';

describe('count-down App', function() {
  let page: CountDownPage;

  beforeEach(() => {
    page = new CountDownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
