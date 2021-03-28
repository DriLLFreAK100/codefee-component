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
  @Prop() height: string;
  @Prop() padding: GutterSize = 'g16';
  @Prop() width: string;

  render() {
    const styles: { [key: string]: string } = {};
    if (this.height) styles.height = this.height;
    if (this.width) styles.width = this.width;

    return (
      <Host class={this.padding} style={styles}>
        <slot></slot>
      </Host>
    );
  }

}
