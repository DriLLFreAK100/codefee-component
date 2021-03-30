import { newSpecPage } from '@stencil/core/testing';
import { CfNotificationMessage } from '../cf-notification-message';

describe('cf-notification-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfNotificationMessage],
      html: `<cf-notification-message></cf-notification-message>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-notification-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-notification-message>
    `);
  });
});
