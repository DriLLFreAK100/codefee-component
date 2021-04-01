import { newE2EPage } from '@stencil/core/testing';

describe('cf-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-checkbox></cf-checkbox>');

    const element = await page.find('cf-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
