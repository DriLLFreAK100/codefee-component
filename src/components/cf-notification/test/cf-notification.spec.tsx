import { newSpecPage } from '@stencil/core/testing';
import { CfNotification } from '../cf-notification';

describe('cf-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfNotification],
      html: `<cf-notification></cf-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-notification>
    `);
  });
});
