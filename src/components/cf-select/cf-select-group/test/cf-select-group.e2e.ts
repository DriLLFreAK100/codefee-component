import { newE2EPage } from '@stencil/core/testing';

describe('cf-select-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-select-group></cf-select-group>');

    const element = await page.find('cf-select-group');
    expect(element).toHaveClass('hydrated');
  });
});
