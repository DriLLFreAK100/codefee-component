import { newSpecPage } from '@stencil/core/testing';
import { CfFooter } from '../cf-footer';

describe('cf-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfFooter],
      html: `<cf-footer></cf-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-footer>
    `);
  });
});
