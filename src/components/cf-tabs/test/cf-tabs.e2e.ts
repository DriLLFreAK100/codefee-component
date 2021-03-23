import { newE2EPage } from '@stencil/core/testing';

describe('cf-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-tabs></cf-tabs>');

    const element = await page.find('cf-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
