import { newE2EPage } from '@stencil/core/testing';

describe('cf-table-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table-row></cf-table-row>');

    const element = await page.find('cf-table-row');
    expect(element).toHaveClass('hydrated');
  });
});
