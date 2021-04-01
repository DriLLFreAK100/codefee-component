import { newSpecPage } from '@stencil/core/testing';
import { CfCheckboxList } from '../cf-checkbox-list';

describe('cf-checkbox-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CfCheckboxList],
      html: `<cf-checkbox-list></cf-checkbox-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cf-checkbox-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cf-checkbox-list>
    `);
  });
});
