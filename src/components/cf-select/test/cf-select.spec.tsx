import { newSpecPage } from '@stencil/core/testing';
import { CfSelect } from '../cf-select';

describe('cf-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfSelect],
      html: `<cf-select></cf-select>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-select>
    `);
  });
});
