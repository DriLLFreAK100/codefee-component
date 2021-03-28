import { newE2EPage } from '@stencil/core/testing';

describe('cf-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-input></cf-input>');

    const element = await page.find('cf-input');
    expect(element).toHaveClass('hydrated');
  });
});
