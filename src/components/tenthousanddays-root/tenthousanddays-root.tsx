import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'tenthousanddays-root',
  styleUrl: 'tenthousanddays-root.css',
  shadow: true,
})
export class TenthousanddaysRoot implements ComponentInterface {

  render() {
    return (
      <Host>
        <h1>Ten thousand days app</h1>
      </Host>
    );
  }

}
