import { newE2EPage } from '@stencil/core/testing';

describe('cf-select-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-select-option></cf-select-option>');

    const element = await page.find('cf-select-option');
    expect(element).toHaveClass('hydrated');
  });
});
