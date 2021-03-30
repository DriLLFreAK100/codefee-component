import { newE2EPage } from '@stencil/core/testing';

describe('cf-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-loading></cf-loading>');

    const element = await page.find('cf-loading');
    expect(element).toHaveClass('hydrated');
  });
});
