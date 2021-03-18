import { newSpecPage } from '@stencil/core/testing';
import { CfSideDrawer } from '../cf-side-drawer';

describe('cf-side-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfSideDrawer],
      html: `<cf-side-drawer></cf-side-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-side-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-side-drawer>
    `);
  });
});
