import { newE2EPage } from '@stencil/core/testing';

describe('cf-circular-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-circular-progress></cf-circular-progress>');

    const element = await page.find('cf-circular-progress');
    expect(element).toHaveClass('hydrated');
  });
});
