import { newSpecPage } from '@stencil/core/testing';
import { CfIconButton } from '../cf-icon-button';

describe('cf-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfIconButton],
      html: `<cf-icon-button></cf-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-icon-button>
    `);
  });
});
