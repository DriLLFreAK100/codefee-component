import { newSpecPage } from '@stencil/core/testing';
import { CfInput } from '../cf-input';

describe('cf-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfInput],
      html: `<cf-input></cf-input>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-input>
    `);
  });
});
