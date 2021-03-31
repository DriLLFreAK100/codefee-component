import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { flatten } from '../../utils';

@Component({
  tag: 'cf-footer',
  styleUrl: 'cf-footer.scss',
  shadow: true,
})
export class CfFooter {
  @Prop() fixed: boolean = false;

  render() {
    const className = flatten(`
      ${this.fixed ? 'fixed' : ''}
    `);

    return (
      <Host class={className}>
        <slot></slot>
      </Host>
    );
  }

}
