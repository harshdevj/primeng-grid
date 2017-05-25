import { PrimengTest2Page } from './app.po';

describe('primeng-test2 App', () => {
  let page: PrimengTest2Page;

  beforeEach(() => {
    page = new PrimengTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
