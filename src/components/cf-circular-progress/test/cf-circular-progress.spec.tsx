import { newSpecPage } from '@stencil/core/testing';
import { CfCircularProgress } from '../cf-circular-progress';

describe('cf-circular-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfCircularProgress],
      html: `<cf-circular-progress></cf-circular-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-circular-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-circular-progress>
    `);
  });
});
