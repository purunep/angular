import { DreamprojectPage } from './app.po';

describe('dreamproject App', () => {
  let page: DreamprojectPage;

  beforeEach(() => {
    page = new DreamprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
