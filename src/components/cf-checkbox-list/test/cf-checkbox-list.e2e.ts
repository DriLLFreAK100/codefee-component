import { newE2EPage } from '@stencil/core/testing';

describe('cf-checkbox-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-checkbox-list></cf-checkbox-list>');

    const element = await page.find('cf-checkbox-list');
    expect(element).toHaveClass('hydrated');
  });
});
