import { newE2EPage } from '@stencil/core/testing';

describe('cf-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-notification></cf-notification>');

    const element = await page.find('cf-notification');
    expect(element).toHaveClass('hydrated');
  });
});
