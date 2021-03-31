import { newSpecPage } from '@stencil/core/testing';
import { CfTable } from '../cf-table';

describe('cf-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTable],
      html: `<cf-table></cf-table>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table>
    `);
  });
});
