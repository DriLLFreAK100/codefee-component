import { newE2EPage } from '@stencil/core/testing';

describe('cf-virtual-scroller', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-virtual-scroller></cf-virtual-scroller>');

    const element = await page.find('cf-virtual-scroller');
    expect(element).toHaveClass('hydrated');
  });
});
