import { AdmintemplatePage } from './app.po';

describe('admintemplate App', () => {
  let page: AdmintemplatePage;

  beforeEach(() => {
    page = new AdmintemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
