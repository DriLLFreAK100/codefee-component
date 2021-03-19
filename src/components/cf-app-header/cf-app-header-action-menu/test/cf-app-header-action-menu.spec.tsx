import { newSpecPage } from '@stencil/core/testing';
import { CfAppHeaderActionMenu } from '../cf-app-header-action-menu';

describe('cf-app-header-action-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfAppHeaderActionMenu],
      html: `<cf-app-header-action-menu></cf-app-header-action-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-app-header-action-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-app-header-action-menu>
    `);
  });
});
