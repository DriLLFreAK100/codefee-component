import { newE2EPage } from '@stencil/core/testing';

describe('cf-app-header-action-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-app-header-action-menu></cf-app-header-action-menu>');

    const element = await page.find('cf-app-header-action-menu');
    expect(element).toHaveClass('hydrated');
  });
});
