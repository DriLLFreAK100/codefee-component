import { newSpecPage } from '@stencil/core/testing';
import { CfTableHead } from '../cf-table-head';

describe('cf-table-head', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTableHead],
      html: `<cf-table-head></cf-table-head>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table-head>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table-head>
    `);
  });
});
