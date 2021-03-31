import { newE2EPage } from '@stencil/core/testing';

describe('cf-table-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table-body></cf-table-body>');

    const element = await page.find('cf-table-body');
    expect(element).toHaveClass('hydrated');
  });
});
