import { newE2EPage } from '@stencil/core/testing';

describe('cf-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-icon-button></cf-icon-button>');

    const element = await page.find('cf-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
