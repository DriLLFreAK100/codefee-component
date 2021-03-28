import { newE2EPage } from '@stencil/core/testing';

describe('cf-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-card></cf-card>');

    const element = await page.find('cf-card');
    expect(element).toHaveClass('hydrated');
  });
});
