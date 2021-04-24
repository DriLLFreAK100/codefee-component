import { newE2EPage } from '@stencil/core/testing';

describe('cf-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-dialog></cf-dialog>');

    const element = await page.find('cf-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
