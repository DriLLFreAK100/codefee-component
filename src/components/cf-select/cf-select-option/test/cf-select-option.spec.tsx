import { newSpecPage } from '@stencil/core/testing';
import { CfSelectOption } from '../cf-select-option';

describe('cf-select-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfSelectOption],
      html: `<cf-select-option></cf-select-option>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-select-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-select-option>
    `);
  });
});
