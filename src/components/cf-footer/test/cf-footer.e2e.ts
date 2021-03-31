import { newE2EPage } from '@stencil/core/testing';

describe('cf-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-footer></cf-footer>');

    const element = await page.find('cf-footer');
    expect(element).toHaveClass('hydrated');
  });
});
