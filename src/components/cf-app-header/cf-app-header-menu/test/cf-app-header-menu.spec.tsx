import { newSpecPage } from '@stencil/core/testing';
import { CfAppHeaderMenu } from '../cf-app-header-menu';

describe('cf-app-header-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfAppHeaderMenu],
      html: `<cf-app-header-menu></cf-app-header-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-app-header-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-app-header-menu>
    `);
  });
});
