import { Component, h } from '@stencil/core';

@Component({
  tag: 'cf-divider',
  styleUrl: 'cf-divider.scss',
  shadow: true,
})
export class CfDivider {

  render() {
    return (
      <hr class="cf-divider" />
    );
  }

}
