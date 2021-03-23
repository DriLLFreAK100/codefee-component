import { newSpecPage } from '@stencil/core/testing';
import { CfTabs } from '../cf-tabs';

describe('cf-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTabs],
      html: `<cf-tabs></cf-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-tabs>
    `);
  });
});
