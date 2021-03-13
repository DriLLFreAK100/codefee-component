import { newE2EPage } from '@stencil/core/testing';

describe('cf-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-divider></cf-divider>');

    const element = await page.find('cf-divider');
    expect(element).toHaveClass('hydrated');
  });
});
