import { newE2EPage } from '@stencil/core/testing';

describe('cf-app-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-app-header></cf-app-header>');

    const element = await page.find('cf-app-header');
    expect(element).toHaveClass('hydrated');
  });
});
