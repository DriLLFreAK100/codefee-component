import { newE2EPage } from '@stencil/core/testing';

describe('cf-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-tab></cf-tab>');

    const element = await page.find('cf-tab');
    expect(element).toHaveClass('hydrated');
  });
});
