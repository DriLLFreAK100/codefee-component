import { newSpecPage } from '@stencil/core/testing';
import { CfLink } from '../cf-link';

describe('cf-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfLink],
      html: `<cf-link></cf-link>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-link>
    `);
  });
});
