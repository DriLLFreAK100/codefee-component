import { newE2EPage } from '@stencil/core/testing';

describe('cf-table-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table-cell></cf-table-cell>');

    const element = await page.find('cf-table-cell');
    expect(element).toHaveClass('hydrated');
  });
});
