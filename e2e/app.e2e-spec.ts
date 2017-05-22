import { AsdPage } from './app.po';

describe('asd App', () => {
  let page: AsdPage;

  beforeEach(() => {
    page = new AsdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
