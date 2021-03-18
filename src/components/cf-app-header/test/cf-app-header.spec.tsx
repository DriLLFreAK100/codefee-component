import { newSpecPage } from '@stencil/core/testing';
import { CfAppHeader } from '../cf-app-header';

describe('cf-app-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfAppHeader],
      html: `<cf-app-header></cf-app-header>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-app-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-app-header>
    `);
  });
});
