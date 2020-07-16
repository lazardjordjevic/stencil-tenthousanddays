import { newSpecPage } from '@stencil/core/testing';
import { TenthousanddaysRoot } from './tenthousanddays-root';

describe('tenthousanddays-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TenthousanddaysRoot],
      html: `<tenthousanddays-root></tenthousanddays-root>`,
    });
    expect(page.root).toEqualHtml(`
      <tenthousanddays-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tenthousanddays-root>
    `);
  });
});
