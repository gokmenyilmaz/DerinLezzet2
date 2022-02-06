import { NgDerinlezzetPage } from './app.po';

describe('ng-derinlezzet App', () => {
  let page: NgDerinlezzetPage;

  beforeEach(() => {
    page = new NgDerinlezzetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
