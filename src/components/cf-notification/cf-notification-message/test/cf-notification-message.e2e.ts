import { newE2EPage } from '@stencil/core/testing';

describe('cf-notification-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-notification-message></cf-notification-message>');

    const element = await page.find('cf-notification-message');
    expect(element).toHaveClass('hydrated');
  });
});
