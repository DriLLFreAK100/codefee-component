import { newSpecPage } from '@stencil/core/testing';
import { CfLoading } from '../cf-loading';

describe('cf-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfLoading],
      html: `<cf-loading></cf-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-loading>
    `);
  });
});
