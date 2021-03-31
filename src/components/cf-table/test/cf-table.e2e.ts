import { newE2EPage } from '@stencil/core/testing';

describe('cf-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table></cf-table>');

    const element = await page.find('cf-table');
    expect(element).toHaveClass('hydrated');
  });
});
