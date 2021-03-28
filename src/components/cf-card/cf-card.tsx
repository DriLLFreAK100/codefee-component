import { GutterSize } from '../../common/types';
import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-card',
  styleUrl: 'cf-card.scss',
  shadow: true,
})
export class CfCard {
  @Prop() padding: GutterSize = 'g16';

  render() {
    return (
      <Host class={this.padding}>
        <slot></slot>
      </Host>
    );
  }

}
