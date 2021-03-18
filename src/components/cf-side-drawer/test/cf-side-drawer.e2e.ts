import { newE2EPage } from '@stencil/core/testing';

describe('cf-side-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-side-drawer></cf-side-drawer>');

    const element = await page.find('cf-side-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
