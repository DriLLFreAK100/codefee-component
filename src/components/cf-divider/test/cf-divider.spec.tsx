import { newSpecPage } from '@stencil/core/testing';
import { CfDivider } from '../cf-divider';

describe('cf-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfDivider],
      html: `<cf-divider></cf-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-divider>
    `);
  });
});
