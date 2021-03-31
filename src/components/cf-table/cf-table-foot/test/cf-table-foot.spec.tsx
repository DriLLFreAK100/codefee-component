import { newSpecPage } from '@stencil/core/testing';
import { CfTableFoot } from '../cf-table-foot';

describe('cf-table-foot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTableFoot],
      html: `<cf-table-foot></cf-table-foot>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-table-foot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-table-foot>
    `);
  });
});
