import { newE2EPage } from '@stencil/core/testing';

describe('cf-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-typography></cf-typography>');

    const element = await page.find('cf-typography');
    expect(element).toHaveClass('hydrated');
  });
});
