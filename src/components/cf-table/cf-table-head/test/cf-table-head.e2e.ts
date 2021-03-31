import { newE2EPage } from '@stencil/core/testing';

describe('cf-table-head', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cf-table-head></cf-table-head>');

    const element = await page.find('cf-table-head');
    expect(element).toHaveClass('hydrated');
  });
});
