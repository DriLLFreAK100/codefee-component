import { newSpecPage } from '@stencil/core/testing';
import { CfCheckbox } from '../cf-checkbox';

describe('cf-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfCheckbox],
      html: `<cf-checkbox></cf-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-checkbox>
    `);
  });
});
