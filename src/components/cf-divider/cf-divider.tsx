import { Component, h, Host, Prop } from '@stencil/core';
import { GutterSize } from '../../common/types';

@Component({
  tag: 'cf-divider',
  styleUrl: 'cf-divider.scss',
  shadow: true,
})
export class CfDivider {
  @Prop() gutterBottom: GutterSize = 'g0';

  render() {
    return (
      <Host class={`${this.gutterBottom}`}>
        <hr class="cfDivider" />
      </Host>
    );
  }

}
