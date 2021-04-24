import { newSpecPage } from '@stencil/core/testing';
import { CfDialogOverlay } from '../cf-dialog-overlay';

describe('cf-dialog-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfDialogOverlay],
      html: `<cf-dialog-overlay></cf-dialog-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-dialog-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-dialog-overlay>
    `);
  });
});
