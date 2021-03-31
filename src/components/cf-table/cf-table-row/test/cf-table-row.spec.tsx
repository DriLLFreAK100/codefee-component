import { newSpecPage } from '@stencil/core/testing';
import { CfTableRow } from '../cf-table-row';

describe('cf-table-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTableRow],
      html: `<cf-table-row></cf-table-row>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table-row>
    `);
  });
});
