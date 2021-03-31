import { newSpecPage } from '@stencil/core/testing';
import { CfTableBody } from '../cf-table-body';

describe('cf-table-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTableBody],
      html: `<cf-table-body></cf-table-body>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table-body>
    `);
  });
});
