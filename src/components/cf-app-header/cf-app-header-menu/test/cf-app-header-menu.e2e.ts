import { newE2EPage } from '@stencil/core/testing';

describe('cf-app-header-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-app-header-menu></cf-app-header-menu>');

    const element = await page.find('cf-app-header-menu');
    expect(element).toHaveClass('hydrated');
  });
});
