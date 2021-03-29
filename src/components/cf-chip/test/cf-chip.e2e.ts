import { newE2EPage } from '@stencil/core/testing';

describe('cf-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-chip></cf-chip>');

    const element = await page.find('cf-chip');
    expect(element).toHaveClass('hydrated');
  });
});
