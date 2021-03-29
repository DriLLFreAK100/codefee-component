import { newSpecPage } from '@stencil/core/testing';
import { CfChip } from '../cf-chip';

describe('cf-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfChip],
      html: `<cf-chip></cf-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-chip>
    `);
  });
});
