import { newSpecPage } from '@stencil/core/testing';
import { CfTypography } from '../cf-typography';

describe('cf-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTypography],
      html: `<cf-typography></cf-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-typography>
    `);
  });
});
