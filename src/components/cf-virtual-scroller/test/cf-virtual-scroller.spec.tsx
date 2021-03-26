import { newSpecPage } from '@stencil/core/testing';
import { CfVirtualScroller } from '../cf-virtual-scroller';

describe('cf-virtual-scroller', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfVirtualScroller],
      html: `<cf-virtual-scroller></cf-virtual-scroller>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-virtual-scroller>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-virtual-scroller>
    `);
  });
});
