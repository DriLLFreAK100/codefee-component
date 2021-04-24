import { newSpecPage } from '@stencil/core/testing';
import { CfDialog } from '../cf-dialog';

describe('cf-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfDialog],
      html: `<cf-dialog></cf-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-dialog>
    `);
  });
});
