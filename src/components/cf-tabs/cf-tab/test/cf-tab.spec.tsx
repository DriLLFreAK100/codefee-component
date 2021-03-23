import { newSpecPage } from '@stencil/core/testing';
import { CfTab } from '../cf-tab';

describe('cf-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfTab],
      html: `<cf-tab></cf-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-tab>
    `);
  });
});
