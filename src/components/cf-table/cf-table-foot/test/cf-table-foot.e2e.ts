import { newE2EPage } from '@stencil/core/testing';

describe('cf-table-foot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table-foot></cf-table-foot>');

    const element = await page.find('cf-table-foot');
    expect(element).toHaveClass('hydrated');
  });
});
