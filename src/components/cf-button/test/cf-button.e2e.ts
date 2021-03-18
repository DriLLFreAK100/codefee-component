import { newE2EPage } from '@stencil/core/testing';

describe('cf-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-button></cf-button>');

    const element = await page.find('cf-button');
    expect(element).toHaveClass('hydrated');
  });
});
