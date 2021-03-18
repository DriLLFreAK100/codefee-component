import { newE2EPage } from '@stencil/core/testing';

describe('cf-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-link></cf-link>');

    const element = await page.find('cf-link');
    expect(element).toHaveClass('hydrated');
  });
});
