import { newE2EPage } from '@stencil/core/testing';

describe('cf-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-select></cf-select>');

    const element = await page.find('cf-select');
    expect(element).toHaveClass('hydrated');
  });
});
