import { ReferangularPage } from './app.po';

describe('referangular App', () => {
  let page: ReferangularPage;

  beforeEach(() => {
    page = new ReferangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
