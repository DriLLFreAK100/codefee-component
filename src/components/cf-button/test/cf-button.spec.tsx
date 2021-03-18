import { newSpecPage } from '@stencil/core/testing';
import { CfButton } from '../cf-button';

describe('cf-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfButton],
      html: `<cf-button></cf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-button>
    `);
  });
});
