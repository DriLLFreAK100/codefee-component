import { newSpecPage } from '@stencil/core/testing';
import { CfTableCell } from '../cf-table-cell';

describe('cf-table-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTableCell],
      html: `<cf-table-cell></cf-table-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table-cell>
    `);
  });
});
