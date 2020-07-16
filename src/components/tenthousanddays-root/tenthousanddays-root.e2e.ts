import { newE2EPage } from '@stencil/core/testing';

describe('tenthousanddays-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tenthousanddays-root></tenthousanddays-root>');

    const element = await page.find('tenthousanddays-root');
    expect(element).toHaveClass('hydrated');
  });
});
