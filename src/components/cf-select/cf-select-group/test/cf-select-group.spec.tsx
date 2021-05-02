import { newSpecPage } from '@stencil/core/testing';
import { CfSelectGroup } from '../cf-select-group';

describe('cf-select-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfSelectGroup],
      html: `<cf-select-group></cf-select-group>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-select-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-select-group>
    `);
  });
});
