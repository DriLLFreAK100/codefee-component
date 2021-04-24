import { newE2EPage } from '@stencil/core/testing';

describe('cf-dialog-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-dialog-overlay></cf-dialog-overlay>');

    const element = await page.find('cf-dialog-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
