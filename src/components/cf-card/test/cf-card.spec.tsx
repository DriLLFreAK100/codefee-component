import { newSpecPage } from '@stencil/core/testing';
import { CfCard } from '../cf-card';

describe('cf-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfCard],
      html: `<cf-card></cf-card>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-card>
    `);
  });
});
